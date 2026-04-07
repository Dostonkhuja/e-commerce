import {useAppDispatch, useAppSelector} from "@/app/providers/store/hooks.ts";
import {useEffect} from "react";
import {fetchCategoriesThunk} from "@/entitys/categories/model/categoriesThunks.ts";

export const useCategories = () => {
    const dispatch = useAppDispatch();

    const { items, loading, error } = useAppSelector(
        (state) => state.categories
    );

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    return {
        categories: items,
        loading,
        error,
    };
};