import type { Product } from "@/entitys/products";

type Props = {
    product: Product;
};

export function TagsSection({ product }: Props) {
    return (
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
    );
}