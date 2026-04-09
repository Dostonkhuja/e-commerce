import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";
import {searchProductsApi} from "@/features/products/api/searchProductAPI.ts";

export const fetchProductsThunk = createAsyncThunk(
    "products/fetchProducts",
    async (params: { page: number; limit: number; category?: string }) => {
        const skip = (params.page - 1) * params.limit;

        const url = params.category
            ? `/products/category/${params.category}?limit=${params.limit}&skip=${skip}`
            : `/products?limit=${params.limit}&skip=${skip}`;

        const { data } = await axiosInstance.get(url);

        return data;
    }
);

export const searchProductsThunk = createAsyncThunk(
    "products/search",
    async (query: string) => {
        return await searchProductsApi(query);
    }
);