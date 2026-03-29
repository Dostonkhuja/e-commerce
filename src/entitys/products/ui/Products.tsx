import { ProductCard } from "../index.ts";
import { ProductSkeleton } from "../../../shared/ui/index.ts";
import { useProducts } from "../index.ts";

const gridClass =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white dark:bg-gray-950 min-h-screen";

export const Products = () => {
    const { products, loading, error } = useProducts();

    if (error) {
        return (
            <p className="text-red-500 text-center dark:text-red-400">
                {error}
            </p>
        );
    }

    if (loading) {
        return (
            <div className={gridClass}>
                {Array.from({ length: 6 }).map((_, i) => (
                    <ProductSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className={gridClass}>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
};