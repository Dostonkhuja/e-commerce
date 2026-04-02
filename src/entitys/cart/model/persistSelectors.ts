import type { RootState } from "@/app/store/store.ts";

// export const selectCart = (state: RootState) => state.cart
//
// export const selectCartTotal = (state: RootState) => state.cart.total
//
// export const selectCartQuantity = (state: RootState) => state.cart.totalQuantity
//
export const selectCartProducts = (state: RootState) =>
    state.cartPersist?.products || [];

export const selectCartCount = (state: RootState) =>
    state.cartPersist?.products?.reduce((sum, p) => sum + p.quantity, 0) || 0;