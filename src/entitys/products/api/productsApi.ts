import { axiosInstance } from "../../../shared/api/index";
import type {Product, ProductResponse} from '../index'

export const getProducts = async (): Promise<Product[]> => {
    const { data } = await axiosInstance.get<ProductResponse>("/products")
    return data.products
}