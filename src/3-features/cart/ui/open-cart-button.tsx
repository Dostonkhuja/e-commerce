import { useAppDispatch, useAppSelector } from "@/5-shared/lib/store/hooks.ts";
import { toggleCart } from "../model/cart-ui.slice.ts";
import { selectCartCount } from "../model/cart-persist.selectors.ts";

export const OpenCartButton = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCartCount);

    return (
        <button
            onClick={() => dispatch(toggleCart())}
            className="
                relative
                flex items-center gap-2
                rounded-lg
                border border-gray-200 dark:border-gray-700
                bg-white px-4 py-1.5 text-sm text-gray-900
                transition
                hover:bg-gray-100
                active:scale-95
                dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800
            "
        >
            <span>Cart</span>

            {count > 0 && (
                <span
                    className="
                        absolute -right-2 -top-2
                        flex h-5 min-w-5 items-center justify-center
                        rounded-full border border-white bg-red-500 px-1
                        text-[11px] font-medium text-white shadow-sm
                        dark:border-gray-900
                    "
                >
                    {count > 99 ? "99+" : count}
                </span>
            )}
        </button>
    );
};
