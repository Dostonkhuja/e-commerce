export const CategoriesSkeleton = () => {
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
};