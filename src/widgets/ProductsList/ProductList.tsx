import { ProductCard, useProducts } from "@/entitys/products";
import { ProductSkeleton } from "@/shared/ui";
import { AddToCartButton } from "@/features/cart";
import { ProductPagination } from "@/features/products";
import { ProductDrawer } from "@/widgets/ProductDrawer";

export const ProductList = () => {
    const {
        products,
        loading,
        error,
        selectedProduct,
        setSelectedProduct,
        page,
        setPage,
        totalPages,
    } = useProducts();

    const gridClass =
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

    if (error) {
        return (
            <div className="flex justify-center mt-6">
                <div className="bg-red-50 dark:bg-red-950 border border-red-300 dark:border-red-800 text-red-600 dark:text-red-300 px-4 py-2 rounded-lg text-sm">
                    ⚠️ {error}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">

            {/* GRID */}
            <div className={gridClass}>
                {loading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))
                    : (products ?? []).map((p) => (
                        <div
                            key={p.id}
                            className="
                  group flex flex-col h-full rounded-2xl
                  border border-gray-200 dark:border-gray-800
                  bg-white dark:bg-gray-900
                  shadow-sm hover:shadow-lg
                  transition-all overflow-hidden
                "
                            onClick={() => setSelectedProduct(p)}
                        >
                            <ProductCard product={p} />
                            <AddToCartButton product={p} />
                        </div>
                    ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center pt-4">
                <ProductPagination
                    page={page}
                    totalPages={totalPages}
                    loading={loading}
                    onPageChange={setPage}
                />
            </div>

            {/* DRAWER */}
            <ProductDrawer
                open={selectedProduct !== null}
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};