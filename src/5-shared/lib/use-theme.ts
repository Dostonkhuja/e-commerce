import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            return saved === "light" ? "light" : "dark"; // DEFAULT: DARK
        }
        return "dark";
    });

    useEffect(() => {
        // HTMLga qo‘llash
        document.documentElement.classList.toggle("dark", theme === "dark");

        // LocalStoragega yozish
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
};