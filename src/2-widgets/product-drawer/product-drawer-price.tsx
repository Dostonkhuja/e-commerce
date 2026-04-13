import type { Product } from "@/4-entities/products";

type Props = {
    product: Product;
};

export function ProductDrawerPrice({ product }: Props) {
    return (
        <div className="flex items-end justify-between">
            <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                </p>

                <p className="text-sm text-green-500">
                    -{product.discountPercentage}% discount
                </p>
            </div>

            <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Rating
                </p>
                <p className="font-semibold text-yellow-500">
                    {product.rating}
                </p>
            </div>
        </div>
    );
}
