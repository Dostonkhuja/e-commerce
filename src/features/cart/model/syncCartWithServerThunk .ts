import {createAsyncThunk} from "@reduxjs/toolkit";
import type {CartProduct} from "@/entitys/cart/model/types.ts";
import {syncCartApi} from "@/features/cart/api/syncCartApi.ts";

export const syncCartWithServerThunk = createAsyncThunk(
    "cart/syncWithServer",
    async ({ userId, products }: { userId: number; products: CartProduct[] }) => {

        const res = await syncCartApi(userId,products);
        return res;
    }
);


// syncCartWithServerThunk