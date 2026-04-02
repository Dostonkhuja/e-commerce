import {createAsyncThunk} from "@reduxjs/toolkit";
import type {CartProduct} from "@/entitys/cart/model/types.ts";
import {updateCartRequest} from "@/features/cart";

export const updateCartThunk = createAsyncThunk(
    "cart/updateCart",
    async (products: CartProduct[]) => {
        const res = await updateCartRequest(products);
        return res;
    }
);