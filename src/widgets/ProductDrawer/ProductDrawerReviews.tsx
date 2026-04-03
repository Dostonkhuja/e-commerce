import type { Product } from "@/entitys/products";

type Props = {
    product: Product;
};

export function ProductDrawerReviews({ product }: Props) {
    const reviews = product.reviews ?? [];

    return (
        <div className="space-y-6">
            <div>
                <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Reviews
                </p>

                {reviews.length === 0 ? (
                    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
                        No reviews yet
                    </div>
                ) : (
                    <div className="space-y-3">
                        {reviews.map((r, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {r.reviewerName}
                                    </p>

                                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">
                                        ⭐ {r.rating}
                                    </span>
                                </div>

                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                    {r.comment}
                                </p>

                                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                                    {new Date(r.date).toLocaleDateString("uz-UZ")}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                <p>Barcode: {product.meta.barcode}</p>
                <p>
                    Created: {new Date(product.meta.createdAt).toLocaleDateString()}
                </p>
                <p>
                    Updated: {new Date(product.meta.updatedAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}