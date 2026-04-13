import type { Product } from "@/4-entities/products";

type Props = {
    product: Product;
};

export function ProductDrawerReviews({ product }: Props) {
    const reviews = product.reviews ?? [];

    return (
        <div className="space-y-6">
            <div>
                <p className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    Reviews
                </p>

                {reviews.length === 0 ? (
                    <div className="rounded-xl border border-zinc-200 p-4 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                        No reviews yet
                    </div>
                ) : (
                    <div className="space-y-3">
                        {reviews.map((review, reviewIndex) => (
                            <div
                                key={reviewIndex}
                                className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {review.reviewerName}
                                    </p>

                                    <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">
                                        Rating: {review.rating}
                                    </span>
                                </div>

                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                                    {review.comment}
                                </p>

                                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                                    {new Date(review.date).toLocaleDateString("uz-UZ")}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="space-y-1 rounded-xl border border-zinc-200 bg-white p-4 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
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
