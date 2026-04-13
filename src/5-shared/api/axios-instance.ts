import axios from "axios";

const BASE_URL =
    import.meta.env.MODE === "development"
        ? "/api"
        : "https://dummyjson.com";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});


//  target: "https://dummyjson.com", vite config