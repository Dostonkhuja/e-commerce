import { useAppSelector, useAppDispatch } from "@/5-shared/lib/store/hooks.ts";
import {closeCart, selectIsCartOpen} from "@/3-features/cart";

export const useCartDrawer = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(selectIsCartOpen);

    const close = () => dispatch(closeCart());

    return { isOpen, close };
};
