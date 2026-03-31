import type { Product } from "@/entitys/products";

type Props = {
    product: Product;
};

export function ProductDrawerSpecs({ product }: Props) {
    const specs = [
        { label: "Brand", value: product.brand },
        { label: "Stock", value: `${product.stock} pcs` },
        { label: "Weight", value: `${product.weight} g` },
        { label: "Min order", value: product.minimumOrderQuantity },
    ];

    const dimensions = [
        { label: "W", value: product.dimensions.width },
        { label: "H", value: product.dimensions.height },
        { label: "D", value: product.dimensions.depth },
    ];

    return (
        <div className="space-y-6">
            <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    Specifications
                </p>

                <div className="grid grid-cols-2 gap-3">
                    {specs.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-3"
                        >
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                {item.label}
                            </p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mt-1">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    Dimensions
                </p>

                <div className="grid grid-cols-3 gap-2">
                    {dimensions.map((d, i) => (
                        <div
                            key={i}
                            className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-2 text-center"
                        >
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                {d.label}
                            </p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {d.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    Tags
                </p>

                <div className="flex flex-wrap gap-2">
                    {product.tags?.map((tag, i) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-3 text-sm text-zinc-700 dark:text-zinc-300">
                    🚚 {product.shippingInformation}
                </div>

                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-3 text-sm text-zinc-700 dark:text-zinc-300">
                    🛡 {product.warrantyInformation}
                </div>

                <div className="text-xs text-zinc-500 dark:text-zinc-400 px-1">
                    Return policy: {product.returnPolicy}
                </div>
            </div>
        </div>
    );
}