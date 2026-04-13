import type { Product } from "@/4-entities/products";

type Props = {
    product: Product;
};

export function SpecsGrid({ product }: Props) {
    const specs = [
        { label: "Brand", value: product.brand },
        { label: "Stock", value: `${product.stock} pcs` },
        { label: "Weight", value: `${product.weight} g` },
        { label: "Min order", value: product.minimumOrderQuantity },
    ];

    return (
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
    );
}