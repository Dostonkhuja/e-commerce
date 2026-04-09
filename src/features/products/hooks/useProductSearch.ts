import { useAppDispatch, useAppSelector } from "@/app/providers/store/hooks";
import { searchProductsThunk } from "../model/productsThunks";
import { setSearchQuery } from "../model/productsSlice";
import {useCategories} from "@/entitys/categories";

export const useProductSearch = () => {
    const dispatch = useAppDispatch();
    const { searchQuery } = useAppSelector((state) => state.products);
    const { setActiveCategory  } = useCategories();

    const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {

        dispatch(setActiveCategory(''));

        const value = e.target.value;
        dispatch(setSearchQuery(value));
        const trimmed = value.trim();

        if (!trimmed) return;

        dispatch(searchProductsThunk(trimmed));
    };

    return {
        searchQuery,
        searchHandle,
    };
};