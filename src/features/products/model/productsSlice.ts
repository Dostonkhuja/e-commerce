import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { Product } from "@/entitys/products";
import {fetchProductsThunk} from "@/features/products";
import {searchProductsThunk} from "@/features/products/model/productsThunks.ts";

type ProductsState = {
    products: Product[];
    loading: boolean;
    error: string;
    total: number;

    page: number;
    limit: number;
    category: string | null;
    selectedProduct: Product | null;
    searchQuery: string;
};

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: "",
    total: 0,

    page: 1,
    limit: 10,
    category: "",
    selectedProduct: null,
    searchQuery: "",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },

        setCategory(state, action) {
            if (state.category === action.payload) return;
            state.category = action.payload;
            state.searchQuery = "";
            state.page = 1;
        },
        setSelectedProduct(state, action) {
            state.selectedProduct = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
            state.page = 1;
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
                state.error = "ProductList yuklanmadi";
            })
            .addCase(searchProductsThunk.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(searchProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
                state.total = action.payload.total;
            })
            .addCase(searchProductsThunk.rejected, (state) => {
                state.loading = false;
                state.error = "Search failed";
            });
    },
});

export const { setPage, setSelectedProduct ,setCategory,setSearchQuery} = productsSlice.actions;
export default productsSlice.reducer;