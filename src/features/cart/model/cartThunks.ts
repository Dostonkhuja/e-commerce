import { createAsyncThunk } from '@reduxjs/toolkit'
import type {CartProduct} from "@/entitys/cart/model/types.ts";
import {syncCartApi} from "@/features/cart/api/syncCartApi.ts";
import {updateCartRequest} from "@/features/cart";

export const syncCartWithServerThunk = createAsyncThunk(
    "cartDrawer/syncWithServer",
    async ({ userId, products }: { userId: number; products: CartProduct[] }) => {

        const res = await syncCartApi(userId,products);
        return res;
    }
);

export const updateCartThunk = createAsyncThunk(
    "cartDrawer/updateCart",
    async (products: CartProduct[]) => {
        const res = await updateCartRequest(products);
        return res;
    }
);