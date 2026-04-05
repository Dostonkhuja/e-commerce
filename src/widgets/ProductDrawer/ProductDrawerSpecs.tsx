import type { Product } from "@/entitys/products";

import { SpecsGrid } from "./ProductDrawerSpecs/index";
import { DimensionsGrid } from "./ProductDrawerSpecs/index";
import { TagsSection } from "./ProductDrawerSpecs/index";
import { ShippingInfo } from "./ProductDrawerSpecs/index";

type Props = {
    product: Product;
};

export function ProductDrawerSpecs({ product }: Props) {
    return (
        <div className="space-y-6">
            <SpecsGrid product={product} />
            <DimensionsGrid product={product} />
            <TagsSection product={product} />
            <ShippingInfo product={product} />
        </div>
    );
}