import { useTheme } from "@/5-shared/lib";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="
                flex h-9 w-9 items-center justify-center
                rounded-lg
                border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-900
                text-xs font-medium text-gray-800 dark:text-gray-100
                transition
                hover:bg-gray-100 dark:hover:bg-gray-800
                active:scale-95
            "
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
        </button>
    );
};
