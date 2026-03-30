import { useEffect, useState } from "react";
import type {Product} from "../index";
import {getProducts} from "../index";

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);

                const data = await getProducts();
                setProducts(data);
            } catch {
                setError("Products yuklanmadi");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return { products, loading, error };
};