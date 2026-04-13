import { useAppDispatch, useAppSelector } from "@/5-shared/lib/store/hooks.ts";
import { setSearchQuery } from "../products.slice.ts";
import { selectProductsState } from "../products.selectors.ts";

export const useProductSearch = () => {
    const dispatch = useAppDispatch();
    const { searchQuery } = useAppSelector(selectProductsState);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value));
    };

    return {
        handleSearchChange,
        searchQuery,
    };
};
