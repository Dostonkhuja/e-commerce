import {useAppDispatch, useAppSelector} from "@/app/providers/store/hooks.ts";

import {setCategory} from "@/features/products/model/productsSlice.ts";

export const useCategories = () => {
    const dispatch = useAppDispatch();

    const { items, loading } = useAppSelector(
        (state) => state.categories
    );

    const { category } = useAppSelector(
        (state) => state.products
    );

    const setCategoryHandle = (c: string | null) => {
        dispatch(setCategory(c === category ? null : c));
    };

    return {
        categories: items,
        loading,
        category,
        setCategoryHandle,
    };
};