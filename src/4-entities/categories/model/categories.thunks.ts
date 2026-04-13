import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "@/4-entities/categories/api/get-categories.api.ts";

export const fetchCategoriesThunk = createAsyncThunk<string[]>(
    "categories/fetch",
    async () => {
        return getCategories();
    }
);
