import {useTheme} from "../index";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="
                flex items-center gap-2
                px-4 py-2 rounded-lg border
                bg-white text-gray-800
                dark:bg-gray-900 dark:text-gray-100
                dark:border-gray-700
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition-colors duration-300
            "
        >
            {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
        </button>
    );
};