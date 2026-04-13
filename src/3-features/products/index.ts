export { useCategoryFilter } from "@/3-features/products/model/hooks/use-category-filter.ts";
export { usePagination } from "@/3-features/products/model/hooks/use-pagination.ts";
export { useProductSearch } from "@/3-features/products/model/hooks/use-product-search.ts";
export { useProducts } from "@/3-features/products/model/hooks/use-products.ts";
export { useSelectedProduct } from "@/3-features/products/model/hooks/use-selected-product.ts";

export { fetchProductsAPI, type FetchProductsParams } from "@/3-features/products/api/fetchProductsAPI.ts";
export { fetchProductsThunk } from "./model/products.thunks.ts";
export { productsReducer, setCategory, setSelectedProduct } from "./model/products.slice.ts";
export { selectProductsCategory, selectSelectedProduct } from "./model/products.selectors.ts";

export { ProductPagination } from "@/3-features/products/ui/products-pagination.tsx";
export { SearchInput } from "@/3-features/products/ui/search-input.tsx";
export { SortProducts } from "@/3-features/products/ui/sort-products.tsx";

export type { ProductsState } from "./model/products.slice.ts";
