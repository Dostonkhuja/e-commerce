import { axiosInstance } from "@/shared/api/axiosInstance";
import type { CartProduct } from "@/entitys/cart/model/types";

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