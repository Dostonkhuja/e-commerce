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

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>
    }

    if (loading) {
        return (
            <div className={gridClass}>
                {Array.from({ length: 6 }).map((_, i) => (
                    <ProductSkeleton key={i} />
                ))}
            </div>
        )
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