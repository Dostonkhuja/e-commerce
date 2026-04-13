import { Drawer } from "@/5-shared/ui";

import {ProductDrawerHeader} from "./product-drawer-header.tsx";
import {ProductDrawerGallery} from "./product-drawer-gallery.tsx";
import {ProductDrawerPrice} from "./product-drawer-price.tsx";
import {ProductDrawerSpecs} from "./product-drawer-specs.tsx";
import {ProductDrawerReviews} from "./product-drawer-reviews.tsx";

import {AddToCartButton} from "@/3-features/cart";
import type {Product} from "@/4-entities/products";

type Props = {
    open: boolean;
    onClose: () => void;
    product: Product | null;
};

export function ProductDrawer({open, onClose, product}: Props) {

    return (
        <Drawer
            open={open}
            onClose={onClose}
            position="right"
            width="w-full max-w-4xl"
        >
            {product && (
                <>
                    <ProductDrawerHeader
                        product={product}
                        onClose={onClose}
                    />

                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        <ProductDrawerGallery product={product} />

                        <ProductDrawerPrice product={product} />

                        <p className="text-sm text-zinc-600 dark:text-zinc-300">
                            {product.description}
                        </p>

                        <div className="border-t pt-4 border-zinc-200 dark:border-zinc-800">
                            <ProductDrawerSpecs product={product} />
                        </div>

                        <div className="border-t pt-4 border-zinc-200 dark:border-zinc-800">
                            <ProductDrawerReviews product={product} />
                        </div>
                    </div>

                    <div className="border-t border-zinc-200 dark:border-zinc-800">
                        <AddToCartButton product={product} />
                    </div>
                </>
            )}
        </Drawer>
    );
}
