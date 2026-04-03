import {useAppDispatch} from "@/app/providers/store/hooks.ts";
import {closeCart} from "@/features/cart/model/cartUiSlice.ts";

export const CartDrawerHeader = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cart
            </h3>

            <button
                onClick={() => dispatch(closeCart())}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
                ✕
            </button>
        </div>
    );
};