import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://sandbox.mockerito.com/ecommerce/api",
});
