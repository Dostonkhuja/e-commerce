import { type Product } from "../index";

type Props = {
    product: Product;
};

export const ProductCard = ({ product }: Props) => {
    return (
        <div className="border rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm hover:shadow-lg transition p-4 flex flex-col">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
            />

            <h3 className="text-gray-900 dark:text-white">
                {product.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
                {product.category}
            </p>

            <p className="text-gray-900 dark:text-white">
                ${product.price}
            </p>

            <p className="text-gray-700 dark:text-gray-300">
                ⭐ {product.rating?.rate ?? 0} ({product.rating?.count ?? 0})
            </p>

            <button className="mt-3 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                Add to cart
            </button>
        </div>
    );
};