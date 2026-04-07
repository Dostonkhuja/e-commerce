import { useState } from "react";
import { useCategories } from "@/entitys/categories";
import {useProducts} from "@/features/products/hooks/useProducts.ts";

export const CategoriesList = () => {
    const { categories, loading } = useCategories();
    const { setCategory } = useProducts();
    const [active, setActive] = useState<string | null>(null);

    if (loading) {
        return (
            <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-9 w-24 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-2">
            {(categories ?? []).map((c) => {
                const isActive = active === c;

                return (
                    <button
                        key={c}
                        onClick={() => {
                            setActive(c);
                            setCategory(c);
                        }}
                        className={`
              px-4 py-2 rounded-full text-sm font-medium
              border transition-all duration-200
              ${
                            isActive
                                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:scale-[1.03]"
                        }
            `}
                    >
                        {c}
                    </button>
                );
            })}
        </div>
    );
};