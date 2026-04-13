import type { CartProduct } from "@/4-entities/cart";
import { axiosInstance } from "@/5-shared/api/axios-instance.ts";

export const syncCart = async (userId: number, products: CartProduct[]) => {
    const response = await axiosInstance.post("/carts/add", {
        userId,
        products: products.map((product) => ({
            id: product.id,
            quantity: product.quantity,
        })),
    });

    return response.data;
};
