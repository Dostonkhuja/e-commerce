import { createSlice,type PayloadAction, isAnyOf  } from '@reduxjs/toolkit'
import { type CartState, type CartProduct } from '@/entitys/cart/model/types'
import { recalculate } from './utils/recalculate'
import {syncCartWithServerThunk, updateCartThunk} from "@/features/cart";

const initialState: CartState = {
    id: null,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
    syncStatus: 'idle',
    userCart:null
}

const cartPersistSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            const existing = state.products.find(p => p.id === action.payload.id)

            if (existing) {
                existing.quantity += 1
            } else {
                state.products.push({ ...action.payload, quantity: 1 })
            }

            recalculate(state)
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            const item = state.products.find(p => p.id === action.payload)

            if (!item) return

            if (item.quantity > 1) {
                item.quantity -= 1
            } else {
                state.products = state.products.filter(p => p.id !== action.payload)
            }

            recalculate(state)
        },

        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.products.find(p => p.id === action.payload)

            if (!item) return

            item.quantity -= 1

            if (item.quantity <= 0) {
                state.products = state.products.filter(p => p.id !== action.payload)
            }

            recalculate(state)
        },

        clearCart: (state) => {
            state.products = []
            recalculate(state)
        },
    },

    extraReducers: (builder) => {
        builder

            .addMatcher(
                isAnyOf(syncCartWithServerThunk.fulfilled, updateCartThunk.fulfilled),
                (state, action) => {
                    Object.assign(state, action.payload)
                    state.syncStatus = 'success'
                }
            )
            .addMatcher(
                isAnyOf(syncCartWithServerThunk.pending, updateCartThunk.pending),
                (state) => {
                    state.syncStatus = 'loading'
                }
            )
            .addMatcher(
                isAnyOf(syncCartWithServerThunk.rejected, updateCartThunk.rejected),
                (state) => {
                    state.syncStatus = 'error'
                }
            )
    },
})

export const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
} = cartPersistSlice.actions

export const cartPersistReducer = cartPersistSlice.reducer