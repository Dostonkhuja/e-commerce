import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CartProduct } from "@/4-entities/cart";
import { syncCart } from "@/3-features/cart/api/sync-cart.api.ts";
import { updateCartRequest } from "@/3-features/cart/api/update-cart-request.api.ts";

export const syncCartWithServerThunk = createAsyncThunk(
    "cart/sync-with-server",
    async ({ products, userId }: { userId: number; products: CartProduct[] }) => {
        return syncCart(userId, products);
    }
);

export const updateCartThunk = createAsyncThunk(
    "cart/update",
    async (products: CartProduct[]) => {
        return updateCartRequest(products);
    }
);
