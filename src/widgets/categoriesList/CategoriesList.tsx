import { useCategories } from "@/entitys/categories";
import {useProducts} from "@/features/products/hooks/useProducts.ts";
import {CategoryButton} from "@/features/categories";
import {CategoriesSkeleton} from "@/shared/ui";

export const CategoriesList = () => {
    const { categories, loading,activeCategory,setActiveCategory  } = useCategories();
    const { setCategory } = useProducts();

    if (loading) return <CategoriesSkeleton />;

    return (
        <div className="flex flex-wrap gap-2">
            {(categories ?? []).map((c) => {
                return (
                    <CategoryButton
                        key={c}
                        name={c}
                        isActive={activeCategory === c}
                        onClick={(name) => {
                            setActiveCategory(name);
                            setCategory(name);
                        }}
                    />
                );
            })}
        </div>
    );
};