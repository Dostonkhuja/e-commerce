import type { Product } from "@/entitys/products";

type Props = {
    product: Product;
};

export function DimensionsGrid({ product }: Props) {
    const dimensions = [
        { label: "W", value: product.dimensions.width },
        { label: "H", value: product.dimensions.height },
        { label: "D", value: product.dimensions.depth },
    ];

    return (
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
    );
}