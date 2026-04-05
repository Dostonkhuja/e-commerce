import { useEffect, useState } from "react";
import type { Product } from "../index";
import { getProducts } from "../index";

type Params = {
    page: number;
    limit: number;
};

export const useProductsQuery = ({ page, limit }: Params) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                setError("");

                const skip = (page - 1) * limit;

                const data = await getProducts({
                    limit,
                    skip,
                });

                setProducts(data.products);
                setTotal(data.total);
            } catch {
                setError("ProductList yuklanmadi");
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, [page, limit]);

    return {
        products,
        loading,
        error,
        total,
    };
};