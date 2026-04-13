import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchProductsAPI, type FetchProductsParams} from "@/3-features/products";

export const fetchProductsThunk = createAsyncThunk(
    "products/fetch",
    async (params: FetchProductsParams) => {
        return await fetchProductsAPI(params);
    }
);