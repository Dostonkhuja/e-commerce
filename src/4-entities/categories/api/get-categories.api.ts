import { axiosInstance } from "@/5-shared/api";

export const getCategories = async (): Promise<string[]> => {
    const { data } = await axiosInstance.get<string[]>("/products/category-list");

    return data;
};
