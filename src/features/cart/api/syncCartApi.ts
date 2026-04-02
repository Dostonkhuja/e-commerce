import { axiosInstance } from "@/shared/api/axiosInstance";
import type {CartProduct} from "@/entitys/cart/model/types.ts";

export const syncCartApi = async (userId: number,products: CartProduct[]) => {
    const res = await axiosInstance.post(`/carts/add`, {
        userId:userId,
        products: products.map(p => ({
            id: p.id,
            quantity: p.quantity,
        })),
    });

    return res.data;
};