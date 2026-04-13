import { createSlice, isAnyOf, type PayloadAction } from "@reduxjs/toolkit";
import type { CartProduct, CartState } from "@/4-entities/cart";
import { recalculate } from "@/3-features/cart/model/utils/recalculate.ts";
import { syncCartWithServerThunk, updateCartThunk } from "./cart.thunks.ts";

const initialState: CartState = {
    id: null,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
    syncStatus: "idle",
    userCart: null,
};

const cartPersistSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            const existingProduct = state.products.find((product) => product.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }

            recalculate(state);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const existingProduct = state.products.find((product) => product.id === action.payload);

            if (!existingProduct) {
                return;
            }

            if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            } else {
                state.products = state.products.filter((product) => product.id !== action.payload);
            }

            recalculate(state);
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const existingProduct = state.products.find((product) => product.id === action.payload);

            if (!existingProduct) {
                return;
            }

            existingProduct.quantity -= 1;

            if (existingProduct.quantity <= 0) {
                state.products = state.products.filter((product) => product.id !== action.payload);
            }

            recalculate(state);
        },
        clearCart: (state) => {
            state.products = [];
            recalculate(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(syncCartWithServerThunk.fulfilled, updateCartThunk.fulfilled),
                (state, action) => {
                    Object.assign(state, action.payload);
                    state.syncStatus = "success";
                }
            )
            .addMatcher(
                isAnyOf(syncCartWithServerThunk.pending, updateCartThunk.pending),
                (state) => {
                    state.syncStatus = "loading";
                }
            )
            .addMatcher(
                isAnyOf(syncCartWithServerThunk.rejected, updateCartThunk.rejected),
                (state) => {
                    state.syncStatus = "error";
                }
            );
    },
});

export const { addToCart, clearCart, decreaseQuantity, removeFromCart } = cartPersistSlice.actions;
export const cartPersistReducer = cartPersistSlice.reducer;
