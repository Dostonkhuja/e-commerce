import { removeFromCart, selectCart } from "@/3-features/cart";
import { useAppDispatch, useAppSelector } from "@/5-shared/lib/store/hooks.ts";

export const CartDrawerBody = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart);
    const products = cart?.products || [];

    return (
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {products.length === 0 && (
                <p className="w-80 text-gray-500 dark:text-gray-400">Cart is empty</p>
            )}

            {products.map((product) => (
                <div
                    key={product.id}
                    className="
                        flex w-80 w-full max-w-2xl items-center gap-3
                        rounded-lg border border-gray-100 bg-gray-50 p-3
                        dark:border-gray-800 dark:bg-gray-800
                    "
                >
                    <img
                        src={product.thumbnail}
                        className="h-12 w-12 rounded-md object-cover"
                    />

                    <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-white">
                            {product.title}
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            ${product.price} x {product.quantity}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                            {product.quantity}
                        </span>

                        <button
                            onClick={() => dispatch(removeFromCart(product.id))}
                            className="
                                flex h-8 w-8 items-center justify-center rounded-full
                                bg-red-500/10 text-red-500 transition
                                hover:bg-red-500/20
                            "
                        >
                            X
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
