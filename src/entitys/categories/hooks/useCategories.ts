import {useAppDispatch, useAppSelector} from "@/app/providers/store/hooks.ts";
import {useEffect} from "react";
import {fetchCategoriesThunk} from "@/entitys/categories/model/categoriesThunks.ts";
import {setActiveCategory} from "@/entitys/categories/model/categoriesSlice.ts";

export const useCategories = () => {
    const dispatch = useAppDispatch();

    const { items, loading, error, activeCategory } = useAppSelector(
        (state) => state.categories
    );

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    return {
        categories: items,
        loading,
        error,
        activeCategory,
        setActiveCategory: (c: string) => dispatch(setActiveCategory(c)),
    };
};