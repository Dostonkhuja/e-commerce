import { useAppDispatch, useAppSelector } from "@/5-shared/lib/store/hooks";
import { toggleCart } from "../model/cart-ui.slice";
import { selectCartCount } from "../model/cart-persist.selectors";
import { ShoppingCart } from "lucide-react";

export const OpenCartButton = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCartCount);

    return (
        <button
            onClick={() => dispatch(toggleCart())}
            className="
                relative flex items-center justify-center
                h-10 w-10
                rounded-lg
                border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-900
                text-gray-900 dark:text-white
                transition
                hover:bg-gray-100 dark:hover:bg-gray-800
                active:scale-95
                shadow-sm
            "
            aria-label="Open cart"
        >
            <ShoppingCart className="h-5 w-5" />

            {count > 0 && (
                <span
                    className="
                        absolute -right-1.5 -top-1.5
                        flex h-5 min-w-5 items-center justify-center
                        rounded-full
                        bg-red-500 text-white
                        text-[11px] font-semibold
                        px-1
                        shadow-md
                        border border-white dark:border-gray-900
                    "
                >
                    {count > 99 ? "99+" : count}
                </span>
            )}
        </button>
    );
};