import { axiosInstance } from "@/5-shared/api/axios-instance.ts";
import type { CartProduct } from "@/4-entities/cart";

export const updateCartRequest = async (products: CartProduct[]) => {
    const res = await axiosInstance.put(`/carts/1`, {
        merge: true,
        products: products.map(p => ({
            id: p.id,
            quantity: p.quantity,
        })),
    });

    return res.data;
};
