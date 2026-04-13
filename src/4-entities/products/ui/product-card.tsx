import { type Product } from "../index.ts";

type Props = {
    product: Product;
};

export const ProductCard = ({ product }: Props) => {
    const inStock = product.availabilityStatus === "In Stock";

    return (
        <>
            <div className="relative overflow-hidden">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-52 w-full object-contain bg-gray-50 p-4 transition-transform duration-300 group-hover:scale-105 dark:bg-gray-800"
                />

                <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-gray-900 px-2 py-1 text-xs text-white">
                        {product.category}
                    </span>
                </div>

                <div className="absolute right-3 top-3">
                    <span
                        className={`rounded-full px-2 py-1 text-xs text-white ${
                            inStock ? "bg-green-500" : "bg-red-500"
                        }`}
                    >
                        {product.stock} pcs
                    </span>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="line-clamp-1 text-base font-semibold text-gray-900 dark:text-white">
                    {product.title}
                </h3>

                <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                    {product.description}
                </p>

                <div className="mt-1 flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                        ${product.price}
                    </div>

                    <div className="text-sm text-yellow-500">
                        Rating: {product.rating}
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{product.brand}</span>
                    <span>{product.discountPercentage}% OFF</span>
                </div>
            </div>
        </>
    );
};
