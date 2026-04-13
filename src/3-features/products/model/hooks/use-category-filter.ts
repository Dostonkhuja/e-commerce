import { useEffect } from "react";
import {
    fetchCategoriesThunk,
    selectCategoriesItems,
    selectCategoriesLoading,
} from "@/4-entities/categories";

import { useAppDispatch, useAppSelector } from "@/5-shared/lib/store/hooks.ts";
import {selectProductsCategory, setCategory} from "@/3-features/products";

export const useCategoryFilter = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectCategoriesItems);
    const loading = useAppSelector(selectCategoriesLoading);
    const category = useAppSelector(selectProductsCategory);

    useEffect(() => {
        if (!categories.length) {
            dispatch(fetchCategoriesThunk());
        }
    }, [categories.length, dispatch]);

    const handleCategoryChange = (nextCategory: string | null) => {
        dispatch(setCategory(nextCategory === category ? null : nextCategory));
    };

    return {
        categories,
        category,
        handleCategoryChange,
        loading,
    };
};
