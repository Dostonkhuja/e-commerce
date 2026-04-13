type Props = {
    page: number;
    totalPages: number;
    loading: boolean;
    onPageChange: (page: number) => void;
};

export const ProductPagination = ({
                                      page,
                                      totalPages,
                                      loading,
                                      onPageChange,
                                  }: Props) => {
    if (totalPages <= 1) return null;

    const canClick = !loading;

    const getPages = () => {
        const pages: number[] = [];

        const maxVisible = 3; // middle part only

        let start = Math.max(2, page - 1);
        let end = start + maxVisible - 1;

        if (end >= totalPages) {
            end = totalPages - 1;
            start = Math.max(2, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div className="w-full flex justify-center py-6">
            <div className="
                flex items-center gap-1
                px-2 py-2
                rounded-full
                border border-gray-200 dark:border-gray-800
                bg-white/70 dark:bg-gray-900/60
                backdrop-blur
                shadow-sm
            ">

                <button
                    disabled={page === 1 || !canClick}
                    onClick={() => onPageChange(page - 1)}
                    className="
                        px-3 py-1.5 text-sm rounded-full
                        text-gray-600 dark:text-gray-300
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        disabled:opacity-40
                    "
                >
                    Prev
                </button>

                {/* FIRST PAGE */}
                <button
                    onClick={() => onPageChange(1)}
                    className={`
                        w-9 h-9 rounded-full text-sm transition
                        ${
                        page === 1
                            ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                    `}
                >
                    1
                </button>

                {/* MIDDLE PAGES */}
                {getPages().map((p) => (
                    <button
                        key={p}
                        onClick={() => onPageChange(p)}
                        disabled={!canClick}
                        className={`
                            w-9 h-9 rounded-full text-sm transition
                            ${
                            p === page
                                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                        `}
                    >
                        {p}
                    </button>
                ))}

                {/* LAST PAGE */}
                <button
                    onClick={() => onPageChange(totalPages)}
                    className={`
                        w-9 h-9 rounded-full text-sm transition
                        ${
                        page === totalPages
                            ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                    `}
                >
                    {totalPages}
                </button>

                <button
                    disabled={page === totalPages || !canClick}
                    onClick={() => onPageChange(page + 1)}
                    className="
                        px-3 py-1.5 text-sm rounded-full
                        text-gray-600 dark:text-gray-300
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        disabled:opacity-40
                    "
                >
                    Next
                </button>
            </div>
        </div>
    );
};