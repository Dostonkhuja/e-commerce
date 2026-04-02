import { axiosInstance } from "@/shared/api/axiosInstance";

export const getUserCart = async (userId: number) => {
    const res = await axiosInstance.get(`/carts/user/${userId}`);
    return res.data;
};