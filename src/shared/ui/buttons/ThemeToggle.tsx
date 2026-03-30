import { useTheme } from "../index"

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="
                w-9 h-9
                flex items-center justify-center
                rounded-lg
                border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-900
                text-gray-800 dark:text-gray-100

                hover:bg-gray-100 dark:hover:bg-gray-800
                active:scale-95

                transition
            "
            aria-label="Toggle theme"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    )
}