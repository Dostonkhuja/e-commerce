import { axiosInstance } from "@/shared/api/index";
import type { ProductResponse } from "../index";

type Params = {
    limit: number;
    skip: number;
};

export const getProducts = async ({
                                      limit,
                                      skip,
                                  }: Params): Promise<ProductResponse> => {
    const { data } = await axiosInstance.get<ProductResponse>(
        `/products?limit=${limit}&skip=${skip}`
    );

    return data;
};