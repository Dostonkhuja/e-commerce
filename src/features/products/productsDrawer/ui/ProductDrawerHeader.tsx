import type {Product} from "@/entitys/products";

type Props = {
    product: Product;
    onClose: () => void;
};

export function ProductDrawerHeader({ product, onClose }: Props) {
    const inStock = product.availabilityStatus === "In Stock";

    return (
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-start justify-between gap-4">

            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {product.title}
                </h2>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    SKU: {product.sku}
                </p>

                <div className="flex gap-2 mt-2 flex-wrap">
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                {product.category}
                            </span>

                    <span className={`text-xs px-2 py-1 rounded-full ${
                        inStock
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                    }`}>
                                {product.availabilityStatus}
                            </span>
                </div>
            </div>

            <button
                onClick={onClose}
                className="px-3 py-1 rounded-lg text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
                ✕
            </button>
        </div>
    );
}