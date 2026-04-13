import { ProductCard } from "@/4-entities/products";
import { AddToCartButton } from "@/3-features/cart";
import { ProductPagination, SortProducts, useProducts } from "@/3-features/products";
import { ProductSkeleton } from "@/5-shared/ui";

export const ProductList = () => {
    const {
        products,
        loading,
        error,
        setSelectedProduct,
        page,
        setPage,
        totalPages,
    } = useProducts();

    const gridClass = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";

    if (error) {
        return (
            <div className="mt-6 flex justify-center">
                <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-600 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            <SortProducts />

            <div className={gridClass}>
                {loading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))
                    : (products ?? []).map((product) => (
                        <div
                            key={product.id}
                            className="
                                group flex h-full flex-col overflow-hidden rounded-2xl
                                border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg
                                dark:border-gray-800 dark:bg-gray-900
                            "
                            onClick={() => setSelectedProduct(product)}
                        >
                            <ProductCard product={product} />
                            <AddToCartButton product={product} />
                        </div>
                    ))}
            </div>

            <div className="flex justify-center pt-4">
                <ProductPagination
                    page={page}
                    totalPages={totalPages}
                    loading={loading}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
};
