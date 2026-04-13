export { fetchCategoriesThunk } from "@/4-entities/categories/model/categories.thunks.ts";
export { categoriesReducer } from "@/4-entities/categories/model/categories.slice.ts";
export {
    selectCategoriesError,
    selectCategoriesItems,
    selectCategoriesLoading,
} from "@/4-entities/categories/model/categories.selectors.ts";
export type { CategoriesState } from "@/4-entities/categories/model/categories.slice.ts";
