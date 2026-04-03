import type { RootState } from "@/app/store/store.ts";

// export const selectCart = (state: RootState) => state.cartDrawer
//
// export const selectCartTotal = (state: RootState) => state.cartDrawer.total
//
// export const selectCartQuantity = (state: RootState) => state.cartDrawer.totalQuantity
//
export const selectCartProducts = (state: RootState) =>
    state.cartPersist?.products || [];

export const selectCartCount = (state: RootState) =>
    state.cartPersist?.products?.reduce((sum, p) => sum + p.quantity, 0) || 0;