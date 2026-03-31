import {type Product, ProductCard} from "../index.ts";
import { ProductSkeleton } from "../../../shared/ui/index.ts";
import { useProducts } from "../index.ts";
import {useState} from "react";
import {ProductDrawer} from "@/features/products";

const gridClass =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white dark:bg-gray-950 min-h-screen";

export const Products = () => {
    const { products, loading, error } = useProducts()
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    if (loading) {
        return (
            <div className={gridClass}>
                {Array.from({ length: 6 }).map((_, i) => (
                    <ProductSkeleton key={i} />
                ))}
            </div>
        )
    }

    if (error) {
        return <div className="flex justify-center mt-3">
            <div className="bg-red-50 border border-red-300 text-red-600 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <span>⚠️</span>
                <p>{error}</p>
            </div>
        </div>
    }

    return (
        <>
            <div className={gridClass}>
                {products.map((p) => (
                    <div key={p.id} onClick={() => setSelectedProduct(p)}>
                        <ProductCard product={p}/>
                    </div>
                ))}

                <ProductDrawer
                    open={selectedProduct !== null}
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </>
    )
}