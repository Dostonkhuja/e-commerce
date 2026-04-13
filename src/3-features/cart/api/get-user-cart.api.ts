import { axiosInstance } from "@/5-shared/api/axios-instance.ts";

export const getUserCart = async (userId: number) => {
    const res = await axiosInstance.get(`/carts/user/${userId}`);
    return res.data;
};