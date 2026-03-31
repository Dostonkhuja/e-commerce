import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CartState, type CartProduct } from '../index'

const initialState: CartState = {
    id: 1,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            if (!state.products) {
                state.products = []
            }

            const existing = state.products.find(
                p => p.id === action.payload.id
            )

            if (existing) {
                existing.quantity += 1
            } else {
                state.products.push({
                    ...action.payload,
                    quantity: 1
                })
            }

            cartSlice.caseReducers.recalculate(state)
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(
                p => p.id !== action.payload
            )

            cartSlice.caseReducers.recalculate(state)
        },

        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.products.find(
                p => p.id === action.payload
            )

            if (item) {
                item.quantity -= 1

                if (item.quantity <= 0) {
                    state.products = state.products.filter(
                        p => p.id !== action.payload
                    )
                }
            }

            cartSlice.caseReducers.recalculate(state)
        },

        clearCart: (state) => {
            state.products = []
            cartSlice.caseReducers.recalculate(state)
        },

        recalculate: (state) => {
            let total = 0
            let discountedTotal = 0
            let totalQuantity = 0

            state.products.forEach(p => {
                total += p.price * p.quantity
                discountedTotal += p.discountedTotal || 0
                totalQuantity += p.quantity
            })

            state.total = total
            state.discountedTotal = discountedTotal
            state.totalQuantity = totalQuantity
            state.totalProducts = state.products.length
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart
} = cartSlice.actions

export default cartSlice.reducer