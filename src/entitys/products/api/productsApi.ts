import { axiosInstance } from "../../../shared/api/index";
import type  {Product} from '../index'

export interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export const getProducts = async (): Promise<Product[]> => {
    const { data } = await axiosInstance.get<ProductResponse>("/products")
    return data.products
}