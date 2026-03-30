import {ThemeToggle} from "../../../shared/ui";
import {AuthController} from "../../../features/auth";

export const Navbar = () => {
    return (
        <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">

                {/* Left */}
                <div className="font-semibold text-gray-900 dark:text-white">
                    E-commerce
                </div>

                {/* Center */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">
                        Home
                    </a>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">
                        Features
                    </a>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">
                        About
                    </a>
                </nav>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <ThemeToggle/>
                    <AuthController/>
                </div>

            </div>
        </header>
    )
}