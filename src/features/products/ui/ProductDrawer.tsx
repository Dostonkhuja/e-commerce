import { useProductDrawer } from "../index.ts";
import { ProductDrawerHeader } from "../index.ts";
import { ProductDrawerGallery } from "../index.ts";
import { ProductDrawerPrice } from "../index.ts";
import { ProductDrawerSpecs } from "../index.ts";
import { ProductDrawerReviews } from "../index.ts";
import { ProductDrawerFooter } from "../index.ts";

import type {Product} from "@/entitys/products";

type Props = {
    open: boolean;
    onClose: () => void;
    product: Product | null;
};

export function ProductDrawer({ open, onClose, product }: Props) {
    useProductDrawer({ open, onClose });

    if (!open || !product) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div
                className="absolute inset-0 bg-black/60 dark:bg-black/80"
                onClick={onClose}
            />

            <div className="absolute right-0 top-0 h-full w-full max-w-4xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 flex flex-col shadow-xl">

                <ProductDrawerHeader product={product} onClose={onClose} />

                <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-zinc-400 dark:scrollbar-thumb-zinc-700">
                    <ProductDrawerGallery product={product} />

                    <ProductDrawerPrice product={product} />

                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {product.description}
                    </p>

                    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                        <ProductDrawerSpecs product={product} />
                    </div>

                    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                        <ProductDrawerReviews product={product} />
                    </div>
                </div>

                <div className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <ProductDrawerFooter />
                </div>
            </div>
        </div>
    );
}