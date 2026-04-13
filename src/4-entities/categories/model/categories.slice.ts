import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesThunk } from "./categories.thunks.ts";

export type CategoriesState = {
    items: string[];
    loading: boolean;
    error: string;
};

const initialState: CategoriesState = {
    items: [],
    loading: false,
    error: "",
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCategoriesThunk.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to load categories";
            });
    },
});

export const categoriesReducer = categoriesSlice.reducer;
