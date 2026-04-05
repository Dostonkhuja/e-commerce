import {addToCart} from "@/features/cart/model/cartPersistSlice.ts";

import type {CartProduct} from "@/entitys/cart/model/types.ts";
import type {AppDispatch} from "@/app/store/store.ts";
import {syncCartWithServerThunk} from "@/features/cart";

export const addToCartHandler =
    (product: CartProduct) =>
        async (dispatch: AppDispatch) => {

            const userString = localStorage.getItem("user");
            const user = userString ? JSON.parse(userString) : null;
            const userId: number = user?.userId;

            if (userId) {
               dispatch(syncCartWithServerThunk({userId:userId,products:[product]}));
            } else {
                dispatch(addToCart(product));
            }
        };