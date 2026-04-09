type Props = {
    name: string;
    isActive: boolean;
    onClick: (name: string) => void;
};

export const CategoryButton = ({ name, isActive, onClick }: Props) => {
    return (
        <button
            onClick={() => onClick(name)}
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
            {name}
        </button>
    );
};