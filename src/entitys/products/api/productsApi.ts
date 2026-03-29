import { axiosInstance } from "../../../shared/api/index";
import type  {Product} from '../index'

export const getProducts = async (): Promise<Product[]> => {
    const res = await axiosInstance.get<Product[]>("/products");
    return res.data;
};