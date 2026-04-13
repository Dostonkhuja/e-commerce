import { closeCart } from "@/3-features/cart";
import { useAppDispatch } from "@/5-shared/lib/store/hooks.ts";

export const CartDrawerHeader = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cart
            </h3>

            <button
                onClick={() => dispatch(closeCart())}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
                X
            </button>
        </div>
    );
};
