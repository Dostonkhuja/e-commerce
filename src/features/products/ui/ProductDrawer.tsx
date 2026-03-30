import type { Product } from "@/entitys/products";
import { useProductDrawer } from "../index";

type Props = {
    open: boolean;
    onClose: () => void;
    product: Product | null;
};

export function ProductDrawer({ open, onClose, product }: Props) {
    useProductDrawer({ open, onClose });

    if (!open || !product) return null;

    const inStock = product.availabilityStatus === "In Stock";

    return (
        <div className="fixed inset-0 z-50">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="
                absolute right-0 top-0 h-full
                w-full max-w-4xl
                bg-white dark:bg-gray-950
                shadow-2xl flex flex-col
                animate-slide-in
            ">

                {/* HEADER */}
                <div className="p-6 border-b dark:border-gray-800 flex items-start justify-between gap-4">

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {product.title}
                        </h2>

                        <p className="text-xs text-gray-500 mt-1">
                            SKU: {product.sku}
                        </p>

                        <div className="flex gap-2 mt-2 flex-wrap">
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                                {product.category}
                            </span>

                            <span className={`text-xs px-2 py-1 rounded-full ${
                                inStock ? "bg-green-500 text-white" : "bg-red-500 text-white"
                            }`}>
                                {product.availabilityStatus}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="px-3 py-1 rounded-lg text-sm bg-gray-100 dark:bg-gray-800"
                    >
                        ✕
                    </button>
                </div>

                {/* BODY */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">

                    {/* IMAGE */}
                    <div className="w-full h-96 bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden">
                        <img
                            src={product.images?.[0] || product.thumbnail}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* PRICE + DISCOUNT */}
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                ${product.price}
                            </p>

                            <p className="text-green-500 text-sm">
                                -{product.discountPercentage}% discount
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-sm text-gray-500">Rating</p>
                            <p className="font-semibold text-yellow-500">
                                ⭐ {product.rating}
                            </p>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {product.description}
                    </p>

                    {/* INFO GRID */}
                    <div className="grid grid-cols-2 gap-4 text-sm">

                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900">
                            <p className="text-gray-500">Brand</p>
                            <p className="font-semibold text-gray-900 dark:text-white">
                                {product.brand}
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900">
                            <p className="text-gray-500">Stock</p>
                            <p className="font-semibold">
                                {product.stock} pcs
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900">
                            <p className="text-gray-500">Weight</p>
                            <p className="font-semibold">
                                {product.weight} g
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900">
                            <p className="text-gray-500">Min Order</p>
                            <p className="font-semibold">
                                {product.minimumOrderQuantity}
                            </p>
                        </div>
                    </div>

                    {/* DIMENSIONS */}
                    <div>
                        <p className="font-semibold mb-2">Dimensions</p>

                        <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
                                W: {product.dimensions.width}
                            </div>
                            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
                                H: {product.dimensions.height}
                            </div>
                            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
                                D: {product.dimensions.depth}
                            </div>
                        </div>
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2">
                        {product.tags?.map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* SHIPPING + WARRANTY */}
                    <div className="space-y-2 text-sm">
                        <p className="text-gray-600 dark:text-gray-300">
                            🚚 {product.shippingInformation}
                        </p>

                        <p className="text-gray-600 dark:text-gray-300">
                            🛡 {product.warrantyInformation}
                        </p>

                        <p className="text-gray-500 text-xs">
                            Return: {product.returnPolicy}
                        </p>
                    </div>

                    {/* REVIEWS */}
                    <div>
                        <p className="font-semibold mb-3">Reviews</p>

                        <div className="space-y-3">
                            {product.reviews?.map((r, i) => (
                                <div
                                    key={i}
                                    className="p-3 border dark:border-gray-800 rounded-xl"
                                >
                                    <div className="flex justify-between">
                                        <p className="font-medium text-sm">
                                            {r.reviewerName}
                                        </p>
                                        <p className="text-yellow-500 text-xs">
                                            ⭐ {r.rating}
                                        </p>
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        {r.comment}
                                    </p>

                                    <p className="text-xs text-gray-500 mt-1">
                                        new Date(r.date).toLocaleDateString("uz-UZ")
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* META */}
                    <div className="text-xs text-gray-500 space-y-1">
                        <p>Barcode: {product.meta.barcode}</p>
                        <p>Created: {new Date(product.meta.createdAt).toLocaleDateString()}</p>
                        <p>Updated: {new Date(product.meta.updatedAt).toLocaleDateString()}</p>
                    </div>

                </div>

                {/* FOOTER */}
                <div className="p-6 border-t dark:border-gray-800">
                    <button className="w-full py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}