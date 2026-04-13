import {CategoryButton} from "@/3-features/categories";
import { useCategoryFilter } from "@/3-features/products";
import {CategoriesSkeleton} from "@/5-shared/ui";

export const CategoriesList = () => {
    const { categories, loading, handleCategoryChange, category } = useCategoryFilter();

    if (loading) return <CategoriesSkeleton />;


    return (
        <div className="flex flex-wrap gap-2">
            {(categories ?? []).map((c) => (
                <CategoryButton
                    key={c}
                    name={c}
                    isActive={category === c}
                    onClick={handleCategoryChange}
                />
            ))}
        </div>
    );
};
