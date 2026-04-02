import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {type CartState, type CartProduct, syncCartWithServerThunk, updateCartThunk} from '../../../features/cart'
// import {fetchUserCartThunk} from "@/features/cart/model/fetchUserCartThunk.ts";
const initialState: CartState & { syncStatus: string } = {
    id: 1,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
    syncStatus: "idle",
    userCart:null
};

const cartPersistSlice = createSlice({
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

            cartPersistSlice.caseReducers.recalculate(state)
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            const product = state.products.find(p => p.id === action.payload)

            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1
                } else {
                    state.products = state.products.filter(
                        p => p.id !== action.payload
                    )
                }
            }

            cartPersistSlice.caseReducers.recalculate(state)
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

            cartPersistSlice.caseReducers.recalculate(state)
        },

        clearCart: (state) => {
            state.products = []
            cartPersistSlice.caseReducers.recalculate(state)
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(syncCartWithServerThunk.pending, (state) => {
                state.syncStatus = "loading";
            })

            .addCase(syncCartWithServerThunk.fulfilled, (state, action) => {
                const cart = action.payload;
                state.id = cart.id;
                state.products = cart.products;
                state.total = cart.total;
                state.discountedTotal = cart.discountedTotal;
                state.totalProducts = cart.totalProducts;
                state.totalQuantity = cart.totalQuantity;

                state.syncStatus = "success";
            })

            .addCase(syncCartWithServerThunk.rejected, (state) => {
                state.syncStatus = "error";
            })

            .addCase(updateCartThunk.pending, (state) => {
                state.syncStatus = "loading";
            })

            .addCase(updateCartThunk.fulfilled, (state, action) => {
                const cart = action.payload;
                state.id = cart.id;
                state.products = cart.products;
                state.total = cart.total;
                state.discountedTotal = cart.discountedTotal;
                state.totalProducts = cart.totalProducts;
                state.totalQuantity = cart.totalQuantity;

                state.syncStatus = "success";
            })

            .addCase(updateCartThunk.rejected, (state) => {
                state.syncStatus = "error";
            })

            // .addCase(fetchUserCartThunk.pending, (state) => {
            //     state.syncStatus = "loading";
            // })

            // .addCase(fetchUserCartThunk.fulfilled, (state, action) => {
            //     const cart = action.payload;
            //     console.log(cart)
            //     state.userCart = cart;
                // state.id = cart.id;
                // state.products = cart.products;
                // state.total = cart.total;
                // state.discountedTotal = cart.discountedTotal;
                // state.totalProducts = cart.totalProducts;
                // state.totalQuantity = cart.totalQuantity;
                // state.syncStatus = "success";
            // })

            // .addCase(fetchUserCartThunk.rejected, (state) => {
            //     state.syncStatus = "error";
            // });

    },
})

export const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart
} = cartPersistSlice.actions

export default cartPersistSlice.reducer