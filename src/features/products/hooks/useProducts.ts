import { useState } from "react";
import {usePagination} from "@/features/products";
import {type Product, useProductsQuery} from "@/entitys/products";

export const useProducts = () => {
    const { page, setPage } = usePagination({ initialPage: 1 });

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const { products, loading, error, total } =
        useProductsQuery({
            page,
            limit: 10,
        });

    const totalPages = Math.ceil(total / 10);

    return {
        products,
        loading,
        error,

        page,
        setPage,
        totalPages,

        selectedProduct,
        setSelectedProduct,
    };
};