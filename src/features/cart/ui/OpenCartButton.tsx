import { useAppDispatch, useAppSelector } from "@/app/providers/store/hooks";
import { toggleCart } from "../model/cartUiSlice";
import { selectCartCount } from "@/features/cart/model/persistSelectors.ts";

export const OpenCartButton = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCartCount);

    return (
        <button
            onClick={() => dispatch(toggleCart())}
            className="
        relative
        px-4 py-1.5 text-sm
        rounded-lg
        bg-white text-gray-900
        dark:bg-gray-900 dark:text-white
        border border-gray-200 dark:border-gray-700
        hover:bg-gray-100 dark:hover:bg-gray-800
        active:scale-95
        transition
        flex items-center gap-2
      "
        >
            <span className="text-base leading-none">🛒</span>

            <span>Cart</span>

            {count > 0 && (
                <span
                    className="
            absolute -top-2 -right-2
            min-w-5 h-5 px-1
            flex items-center justify-center
            text-[11px] font-medium text-white
            bg-red-500
            rounded-full
            border border-white dark:border-gray-900
            shadow-sm
          "
                >
          {count > 99 ? "99+" : count}
        </span>
            )}
        </button>
    );
};