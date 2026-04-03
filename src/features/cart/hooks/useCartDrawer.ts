import {useAppSelector, useAppDispatch} from "@/app/providers/store/hooks";
import {closeCart} from "@/features/cart/model/cartUiSlice";

export const useCartDrawer = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((s) => s.cartUI.isOpen);

    const close = () => dispatch(closeCart());

    return {isOpen, close};
};