import { createSlice ,type PayloadAction } from "@reduxjs/toolkit";
import { fetchCategoriesThunk } from "./categoriesThunks";

type CategoriesState = {
    items: string[];
    loading: boolean;
    error: string;
    activeCategory: string | null;
};

const initialState: CategoriesState = {
    items: [],
    loading: false,
    error: "",
    activeCategory: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<string>) => {
            if (state.activeCategory === action.payload) {
                state.activeCategory = null;
            } else {
                state.activeCategory = action.payload;
            }
        },
    },
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

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;