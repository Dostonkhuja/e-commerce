import type { Product } from "@/4-entities/products";
import { useAppDispatch, useAppSelector } from "@/5-shared/lib/store/hooks.ts";
import { setSelectedProduct } from "../products.slice.ts";
import { selectSelectedProduct } from "../products.selectors.ts";

export const useSelectedProduct = () => {
    const dispatch = useAppDispatch();
    const selectedProduct = useAppSelector(selectSelectedProduct);

    const updateSelectedProduct = (product: Product | null) => {
        dispatch(setSelectedProduct(product));
    };

    return {
        selectedProduct,
        setSelectedProduct: updateSelectedProduct,
    };
};
