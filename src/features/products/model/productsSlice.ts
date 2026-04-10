import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { Product } from "@/entitys/products";
import {fetchProductsThunk} from "@/features/products";

type ProductsState = {
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
        setPage(state, action) {
            state.page = action.payload;
        },
        setSort(
            state,
            action: PayloadAction<{ sortBy: "title" | "price"; order: "asc" | "desc" }>
        ) {
            state.sortBy = action.payload.sortBy;
            state.order = action.payload.order;
            state.page = 1;
        },

        setCategory(state, action) {
            if (state.category === action.payload) {
                state.category = null;   // toggle off
            } else {
                state.category = action.payload;
            }

            state.searchQuery = "";
            state.page = 1;
        },
        setSelectedProduct(state, action) {
            state.selectedProduct = action.payload;
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
            state.page = 1;

            if (action.payload.trim()) {
                state.category = null; // 🔥 category OFF
            }
        }
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
    },
});

export const { setPage, setSelectedProduct ,setCategory,setSearchQuery,setSort} = productsSlice.actions;
export default productsSlice.reducer;