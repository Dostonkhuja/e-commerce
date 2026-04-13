import { useEffect } from "react";
import type { Product } from "@/4-entities/products";
import { useAppDispatch, useAppSelector } from "@/5-shared/lib/store/hooks.ts";
import { setPage, setSelectedProduct } from "../products.slice.ts";
import { selectProductsState } from "../products.selectors.ts";
import { fetchProductsThunk } from "../products.thunks.ts";

export const useProducts = () => {
    const dispatch = useAppDispatch();
    const {
        category,
        error,
        limit,
        loading,
        order,
        page,
        products,
        searchQuery,
        selectedProduct,
        sortBy,
        total,
    } = useAppSelector(selectProductsState);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(
                fetchProductsThunk({
                    category,
                    limit,
                    order,
                    page,
                    search: searchQuery.trim() || undefined,
                    sortBy,
                })
            );
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [category, dispatch, limit, order, page, searchQuery, sortBy]);

    return {
        error,
        loading,
        page,
        products,
        selectedProduct,
        setPage: (nextPage: number) => dispatch(setPage(nextPage)),
        setSelectedProduct: (product: Product | null) => dispatch(setSelectedProduct(product)),
        totalPages: Math.ceil(total / limit),
    };
};
