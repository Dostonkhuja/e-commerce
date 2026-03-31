import { useAppSelector, useAppDispatch } from "@/app/providers/store/hooks";
import {
    removeFromCart,
    clearCart,
} from "@/features/cart/model/cartSlice";
import { closeCart } from "@/features/cart/model/cartUiSlice";
import {formatPrice} from "@/shared/lib";

export const CartDrawer = () => {
    const dispatch = useAppDispatch();

    const isOpen = useAppSelector((state) => state.cartUI.isOpen);
    const cart = useAppSelector((state) => state.cart);

    const products = cart?.products || [];
    const total = cart?.total || 0;

    return (
        <>
            {isOpen && (
                <div
                    onClick={() => dispatch(closeCart())}
                    className="fixed inset-0 bg-black/50 z-40"
                />
            )}

            <div
                className={`
          fixed top-0 left-0
          h-full w-80

          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-700

          shadow-2xl
          flex flex-col

          transition-transform duration-300
          z-50

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* Header */}
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

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {products.length === 0 && (
                        <p className="text-gray-500 dark:text-gray-400">
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

                            {/* Quantity control */}
                            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {p.quantity}
                </span>

                                {/* Remove icon button */}
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

                {/* Footer */}
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
            </div>
        </>
    );
};