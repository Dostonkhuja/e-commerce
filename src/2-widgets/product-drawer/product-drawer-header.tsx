import type { Product } from "@/4-entities/products";

type Props = {
    product: Product;
    onClose: () => void;
};

export function ProductDrawerHeader({ product, onClose }: Props) {
    return (
        <div className="flex items-start justify-between gap-4 border-b border-gray-200 p-6 dark:border-gray-800">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {product.title}
                </h2>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    SKU: {product.sku}
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        {product.category}
                    </span>

                    <span
                        className={`rounded-full px-2 py-1 text-xs ${
                            product.availabilityStatus === "In Stock"
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                        }`}
                    >
                        {product.availabilityStatus}
                    </span>
                </div>
            </div>

            <button
                onClick={onClose}
                className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
                X
            </button>
        </div>
    );
}
