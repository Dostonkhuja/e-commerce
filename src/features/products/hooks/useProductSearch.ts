import { useAppDispatch, useAppSelector } from "@/app/providers/store/hooks";
import { setSearchQuery } from "../model/productsSlice";

export const useProductSearch = () => {
    const dispatch = useAppDispatch();
    const { searchQuery } = useAppSelector((s) => s.products);

    const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return {
        searchQuery,
        searchHandle,
    };
};