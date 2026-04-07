import { axiosInstance } from "@/shared/api/axiosInstance";

export const getCategoriesAPI = async (): Promise<string[]> => {
    const { data } = await axiosInstance.get<string[]>(
        "/products/category-list"
    );

    return data;
};