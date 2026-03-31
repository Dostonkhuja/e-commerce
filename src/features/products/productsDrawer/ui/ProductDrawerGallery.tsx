import type {Product} from "@/entitys/products";

type Props = {
    product: Product;
};

export function ProductDrawerGallery({ product }: Props) {
    return (
        <div className="w-full h-96 bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden">
            <img
                src={product.images?.[0] || product.thumbnail}
                className="w-full h-full object-contain"
            />
        </div>
    );
}