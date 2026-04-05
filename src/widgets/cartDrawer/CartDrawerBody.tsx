import {useAppSelector, useAppDispatch} from "@/app/providers/store/hooks.ts";
import {removeFromCart} from "@/features/cart/model/cartPersistSlice.ts";

export const CartDrawerBody = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cartPersist);

    const products = cart?.products || [];

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {products.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400 w-80">
                    Cart is empty
                </p>
            )}

            {products.map((p) => (
                <div
                    key={p.id}
                    className="
                        flex items-center gap-3
                        p-3
                        rounded-lg
                        border border-gray-100 dark:border-gray-800
                        bg-gray-50 dark:bg-gray-800
                        w-w-full max-w-2xl w-80
                    "
                >
                    <img
                        src={p.thumbnail}
                        className="w-12 h-12 rounded-md object-cover"
                    />

                    <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-white">
                            {p.title}
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            ${p.price} × {p.quantity}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                            {p.quantity}
                        </span>

                        <button
                            onClick={() => dispatch(removeFromCart(p.id))}
                            className="
                                w-8 h-8
                                flex items-center justify-center
                                rounded-full
                                bg-red-500/10
                                hover:bg-red-500/20
                                text-red-500
                                transition
                            "
                        >
                            🗑
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};