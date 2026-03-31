import {useProductDrawer} from "../hooks/useProductDrawer";
import {ProductDrawerHeader} from "../index";
import {ProductDrawerGallery} from "../index";
import {ProductDrawerPrice} from "../index";
import {ProductDrawerSpecs} from "../index";
import {ProductDrawerReviews} from "../index";

import type {Product} from "@/entitys/products";
import {AddToCartButton} from "@/features/cart";

type Props = {
    open: boolean;
    onClose: () => void;
    product: Product | null;
};

export function ProductDrawer({open, onClose, product}: Props) {
    useProductDrawer({open, onClose});

    if (!open) return null;


    return (
        <div className="fixed inset-0 z-50">

            {/* Overlay */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/60 dark:bg-black/80"
            />

            {/* Drawer */}
            <div
                className={`
                fixed top-0 right-0
                h-full w-full max-w-4xl

                bg-white dark:bg-zinc-900
                shadow-xl

                 flex flex-col

                    transition-transform duration-300 ease-in-out

                 ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {product && (
                    <>
                        <ProductDrawerHeader product={product} onClose={onClose}/>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            <ProductDrawerGallery product={product}/>
                            <ProductDrawerPrice product={product}/>

                            <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                {product.description}
                            </p>

                            <div className="border-t pt-4 border-zinc-200 dark:border-zinc-800">
                                <ProductDrawerSpecs product={product}/>
                            </div>

                            <div className="border-t pt-4 border-zinc-200 dark:border-zinc-800">
                                <ProductDrawerReviews product={product}/>
                            </div>
                        </div>

                        <div className="border-t border-zinc-200 dark:border-zinc-800">
                            <AddToCartButton product={product}/>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}