import { useProductSearch } from "@/features/products/hooks/useProductSearch";

export const SearchInput = () => {
    const { searchQuery, searchHandle } = useProductSearch();

    return (
        <div className="relative w-full">
            <input
                value={searchQuery}
                onChange={searchHandle}
                placeholder="Search products..."
                className="
                    w-full
                    pl-10 pr-3 py-2
                    rounded-xl
                    border border-gray-200 dark:border-gray-700
                    bg-white dark:bg-gray-900
                    text-sm text-gray-900 dark:text-gray-100
                    outline-none
                    transition-all duration-200
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    hover:border-gray-300 dark:hover:border-gray-600
                    focus:border-black dark:focus:border-white
                    focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10
                "
            />

            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-4.3-4.3m1.3-5.2a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
        </div>
    );
};