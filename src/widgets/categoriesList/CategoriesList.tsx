import { useCategories } from "@/entitys/categories";
import {CategoryButton} from "@/features/categories";
import {CategoriesSkeleton} from "@/shared/ui";

export const CategoriesList = () => {
    const { categories, loading, setCategoryHandle, category } = useCategories();

    if (loading) return <CategoriesSkeleton />;


    return (
        <div className="flex flex-wrap gap-2">
            {(categories ?? []).map((c) => (
                <CategoryButton
                    key={c}
                    name={c}
                    isActive={category === c}
                    onClick={setCategoryHandle}
                />
            ))}
        </div>
    );
};