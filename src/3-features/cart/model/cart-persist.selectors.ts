import type { CartState } from "@/4-entities/cart";

type CartPersistState = {
    cartPersist?: CartState;
};

export const selectCartProducts = (state: CartPersistState) => state.cartPersist?.products || [];

export const selectCartCount = (state: CartPersistState) =>
    state.cartPersist?.products?.reduce((sum, product) => sum + product.quantity, 0) || 0;
