import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ProductSkeleton = () => {
    return (
        <div className="border rounded-xl bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm p-4 flex flex-col transition-colors duration-300">
            <Skeleton
                height={180}
                className="mb-4"
                baseColor="#e5e7eb"
                highlightColor="#f3f4f6"
            />

            <Skeleton
                height={20}
                width="80%"
                className="mb-2"
                baseColor="#e5e7eb"
                highlightColor="#f3f4f6"
            />

            <Skeleton
                height={16}
                width="60%"
                className="mb-2"
                baseColor="#e5e7eb"
                highlightColor="#f3f4f6"
            />

            <Skeleton
                height={16}
                width="40%"
                className="mb-4"
                baseColor="#e5e7eb"
                highlightColor="#f3f4f6"
            />

            <Skeleton
                height={18}
                width="50%"
                className="mb-4"
                baseColor="#e5e7eb"
                highlightColor="#f3f4f6"
            />

            <Skeleton
                height={36}
                width="100%"
                baseColor="#e5e7eb"
                highlightColor="#f3f4f6"
            />
        </div>
    );
};