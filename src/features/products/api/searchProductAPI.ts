import { axiosInstance } from "@/shared/api/axiosInstance";

export const searchProductsApi = async (query: string) => {
    const res = await axiosInstance.get(
        `/products/search?q=${query}`
    );

    return res.data;
};