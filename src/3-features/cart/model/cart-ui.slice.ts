import { createSlice } from "@reduxjs/toolkit";

export type CartUiState = {
    isOpen: boolean;
};

type CartUiStateSchema = {
    cartUi: CartUiState;
};

const initialState: CartUiState = {
    isOpen: false,
};

const cartUiSlice = createSlice({
    name: "cartUi",
    initialState,
    reducers: {
        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { closeCart, openCart, toggleCart } = cartUiSlice.actions;
export const selectIsCartOpen = (state: CartUiStateSchema) => state.cartUi.isOpen;
export default cartUiSlice.reducer;
