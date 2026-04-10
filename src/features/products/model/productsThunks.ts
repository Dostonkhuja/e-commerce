import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api";

export const fetchProductsThunk = createAsyncThunk(
    "products/fetch",
    async (params: {
        page: number;
        limit: number;
        category?: string | null;
        search?: string;
        sortBy?: string;
        order?: "asc" | "desc";
    }) => {
        const skip = (params.page - 1) * params.limit;

        let baseUrl = "/products";

        if (params.search) {
            baseUrl = `/products/search`;
        } else if (params.category) {
            baseUrl = `/products/category/${params.category}`;
        }

        const query = new URLSearchParams({
            limit: String(params.limit),
            skip: String(skip),
            sortBy: params.sortBy || "title",
            order: params.order || "asc",
        });

        if (params.search) {
            query.append("q", params.search);
        }

        const { data } = await axiosInstance.get(
            `${baseUrl}?${query.toString()}`
        );

        return data;
    }
);