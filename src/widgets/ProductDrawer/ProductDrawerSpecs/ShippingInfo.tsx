import type { Product } from "@/entitys/products";

type Props = {
    product: Product;
};

export function ShippingInfo({ product }: Props) {
    return (
        <div className="space-y-3">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-3 text-sm text-zinc-700 dark:text-zinc-300">
                🚚 {product.shippingInformation}
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-3 text-sm text-zinc-700 dark:text-zinc-300">
                🛡 {product.warrantyInformation}
            </div>

            <div className="text-xs text-zinc-500 dark:text-zinc-400 px-1">
                Return policy: {product.returnPolicy}
            </div>
        </div>
    );
}