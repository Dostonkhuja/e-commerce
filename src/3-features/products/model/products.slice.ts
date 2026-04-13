import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/4-entities/products";
import { fetchProductsThunk } from "./products.thunks.ts";

export type ProductsState = {
    products: Product[];
    loading: boolean;
    error: string;
    total: number;
    page: number;
    limit: number;
    category: string | null;
    searchQuery: string;
    sortBy: "title" | "price";
    order: "asc" | "desc";
    selectedProduct: Product | null;
};

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: "",
    total: 0,
    page: 1,
    limit: 10,
    category: null,
    searchQuery: "",
    sortBy: "title",
    order: "asc",
    selectedProduct: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSort: (
            state,
            action: PayloadAction<{ sortBy: "title" | "price"; order: "asc" | "desc" }>
        ) => {
            state.sortBy = action.payload.sortBy;
            state.order = action.payload.order;
            state.page = 1;
        },
        setCategory: (state, action: PayloadAction<string | null>) => {
            state.category = state.category === action.payload ? null : action.payload;
            state.searchQuery = "";
            state.page = 1;
        },
        setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
            state.selectedProduct = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
            state.page = 1;

            if (action.payload.trim()) {
                state.category = null;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsThunk.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
                state.total = action.payload.total;
            })
            .addCase(fetchProductsThunk.rejected, (state) => {
                state.loading = false;
                state.error = "Products failed to load";
            });
    },
});

export const { setCategory, setPage, setSearchQuery, setSelectedProduct, setSort } =
    productsSlice.actions;
export const productsReducer = productsSlice.reducer;
