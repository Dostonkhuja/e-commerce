import type { RootState } from "@/app/store/store";

export const selectCart = (state: RootState) => state.cart

export const selectCartTotal = (state: RootState) => state.cart.total

export const selectCartQuantity = (state: RootState) => state.cart.totalQuantity