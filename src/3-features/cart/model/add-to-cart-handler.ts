import type { CartProduct } from "@/4-entities/cart";
import type { AppStoreDispatch } from "@/5-shared/lib/store/types";
import { syncCartWithServerThunk } from "./cart.thunks";
import { addToCart } from "./cart-persist.slice";

export const addToCartHandler = (product: CartProduct) => {
    return async (dispatch: AppStoreDispatch) => {
        const userString = localStorage.getItem("user");
        const user = userString ? JSON.parse(userString) : null;
        const userId: number | undefined = user?.userId;

        if (userId) {
            dispatch(syncCartWithServerThunk({ products: [product], userId }));
            return;
        }

        dispatch(addToCart(product));
    };
};
