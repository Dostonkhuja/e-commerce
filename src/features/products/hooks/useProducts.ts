import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/providers/store/hooks";
import {
    setPage,
    setSelectedProduct,
    setCategory
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
        selectedProduct,
    } = useAppSelector((state) => state.products);

    useEffect(() => {
        const id = setTimeout(() => {
            dispatch(
                fetchProductsThunk({
                    page,
                    limit,
                    category: category ?? undefined,
                })
            )
        }, 200);

        return () => clearTimeout(id);
    }, [page, limit, category,dispatch]);

    const totalPages = Math.ceil(total / limit);

    return {
        products,
        loading,
        error,

        page,
        setPage: (p: number) => dispatch(setPage(p)),
        totalPages,
        setCategory: (c: string | null) =>
            dispatch(setCategory(c)),
        selectedProduct,
        setSelectedProduct: (p: Product | null) =>
            dispatch(setSelectedProduct(p)),
    };
};