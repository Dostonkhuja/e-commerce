import type { CartState } from "@/4-entities/cart";

type CartStateSchema = {
    cartPersist: CartState;
};

export const selectCart = (state: CartStateSchema) => state.cartPersist;
export const selectCartProducts = (state: CartStateSchema) => state.cartPersist.products;
export const selectCartStatus = (state: CartStateSchema) => state.cartPersist.syncStatus;
export const selectCartTotal = (state: CartStateSchema) => state.cartPersist.total;
export const selectCartQuantity = (state: CartStateSchema) => state.cartPersist.totalQuantity;
