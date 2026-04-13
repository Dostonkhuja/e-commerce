import type { CategoriesState } from "./categories.slice.ts";

type CategoriesStateSchema = {
    categories: CategoriesState;
};

export const selectCategoriesState = (state: CategoriesStateSchema) => state.categories;

export const selectCategoriesItems = (state: CategoriesStateSchema) =>
    selectCategoriesState(state).items;

export const selectCategoriesLoading = (state: CategoriesStateSchema) =>
    selectCategoriesState(state).loading;

export const selectCategoriesError = (state: CategoriesStateSchema) =>
    selectCategoriesState(state).error;
