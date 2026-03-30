import { type Product } from "../index"

type Props = {
    product: Product
}

export const ProductCard = ({ product }: Props) => {
    const inStock = product.availabilityStatus === "In Stock"

    return (

        <div className="group flex flex-col h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

            <div className="relative overflow-hidden">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-52 w-full object-contain p-4 bg-gray-50 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-3 left-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-900 text-white">
                        {product.category}
                    </span>
                </div>

                <div className="absolute top-3 right-3">
                    <span
                        className={`text-xs px-2 py-1 rounded-full ${
                            inStock ? "bg-green-500" : "bg-red-500"
                        } text-white`}
                    >
                        {product.stock} pcs
                    </span>
                </div>
            </div>

            <div className="p-4 flex flex-col flex-1 gap-2">

                <h3 className="text-gray-900 dark:text-white font-semibold text-base line-clamp-1">
                    {product.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                        ${product.price}
                    </div>

                    <div className="text-sm text-yellow-500">
                        ⭐ {product.rating}
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{product.brand}</span>
                    <span>{product.discountPercentage}% OFF</span>
                </div>

                {/* BUTTON FIX */}
                <button
                    className="mt-auto w-full rounded-xl bg-blue-600 text-white py-2 text-sm font-medium hover:bg-blue-700 active:scale-95 transition"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}