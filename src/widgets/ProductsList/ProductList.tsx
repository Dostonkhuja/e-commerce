import {ProductCard, useProducts} from "@/entitys/products";
import {ProductSkeleton} from "@/shared/ui";
import {AddToCartButton} from "@/features/cart";
import {ProductPagination} from "@/features/products";
import {ProductDrawer} from "@/widgets/ProductDrawer";

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
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6";

    if (error) {
        return (
            <div className="flex justify-center mt-3">
                <div className="bg-red-50 border border-red-300 text-red-600 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                    <span>⚠️</span>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">

            {/* GRID AREA */}
            <div className="flex-1">
                <div className={gridClass}>
                    {loading
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <ProductSkeleton key={i} />
                        ))
                        : products.map((p) => (
                            <div
                                key={p.id}
                                className="
                                      group flex flex-col h-full rounded-2xl
                                      border border-gray-200 dark:border-gray-700
                                      bg-white dark:bg-gray-900
                                      shadow-sm hover:shadow-xl
                                      transition-all duration-300 overflow-hidden
                                  "
                                onClick={() => setSelectedProduct(p)}
                            >
                                <ProductCard product={p} />
                                <AddToCartButton product={p} />
                            </div>
                        ))}
                </div>
            </div>

            {/* PAGINATION ALWAYS VISIBLE */}
            <div className="sticky bottom-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-t border-gray-200 dark:border-gray-800">
                <ProductPagination
                    page={page}
                    totalPages={totalPages}
                    loading={loading}
                    onPageChange={setPage}
                />
            </div>

            <ProductDrawer
                open={selectedProduct !== null}
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};