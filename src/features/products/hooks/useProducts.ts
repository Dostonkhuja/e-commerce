import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/providers/store/hooks";
import {
    setPage,
    setSelectedProduct,
} from "../model/productsSlice";
import {fetchProductsThunk} from "@/features/products";
import type {Product} from "@/entitys/products";

export const useProducts = () => {
    const dispatch = useAppDispatch();

    const {
        products,
        loading,
        error,
        total,
        page,
        limit,
        category,
        searchQuery,
        selectedProduct,
        sortBy,
        order
    } = useAppSelector((state) => state.products);

    useEffect(() => {
        const id = setTimeout(() => {
            dispatch(
                fetchProductsThunk({
                    page,
                    limit,
                    category,
                    search: searchQuery.trim() || undefined,
                    sortBy,
                    order,
                })
            );
        }, 200);

        return () => clearTimeout(id);
    }, [page, limit, category, searchQuery, sortBy, order]);

    return {
        products,
        loading,
        error,

        page,
        setPage: (p: number) => dispatch(setPage(p)),

        selectedProduct,
        setSelectedProduct: (p: Product | null) =>
            dispatch(setSelectedProduct(p)),

        totalPages: Math.ceil(total / limit),
    };
};