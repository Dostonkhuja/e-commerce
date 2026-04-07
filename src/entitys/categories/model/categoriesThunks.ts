import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAPI } from "../api/getCategoriesAPI";

export const fetchCategoriesThunk = createAsyncThunk<
    string[]
>(
    "categories/fetch",
    async () => {
        const data = await getCategoriesAPI();
        return data;
    }
);