import type { Product } from "@/4-entities/products";

import { DimensionsGrid, ShippingInfo, SpecsGrid, TagsSection } from "./specs";

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
