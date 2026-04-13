import type { ProductsState } from "./products.slice.ts";

type ProductsStateSchema = {
    products: ProductsState;
};

export const selectProductsState = (state: ProductsStateSchema) => state.products;

export const selectProductsCategory = (state: ProductsStateSchema) =>
    selectProductsState(state).category;

export const selectSelectedProduct = (state: ProductsStateSchema) =>
    selectProductsState(state).selectedProduct;
