import {useAppSelector, useAppDispatch} from "@/app/providers/store/hooks.ts";
import {clearCart} from "@/features/cart/model/cartPersistSlice.ts";
import {closeCart} from "@/features/cart/model/cartUiSlice.ts";
import {formatPrice} from "@/shared/lib";

export const CartDrawerFooter = () => {
    const dispatch = useAppDispatch();
    const total = useAppSelector((state) => state.cartPersist.total || 0);

    return (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-3">
            <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                    Total
                </span>

                <span className="text-gray-900 dark:text-white font-semibold">
                    {formatPrice(total)}
                </span>
            </div>

            <button
                onClick={() => {
                    dispatch(clearCart());
                    dispatch(closeCart());
                }}
                className="
                    w-full
                    py-2
                    rounded-lg
                    bg-gray-900 text-white
                    dark:bg-white dark:text-gray-900
                    hover:opacity-90
                    active:scale-95
                    transition
                "
            >
                Buy now
            </button>
        </div>
    );
};