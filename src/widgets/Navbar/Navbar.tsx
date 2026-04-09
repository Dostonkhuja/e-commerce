import {ThemeToggle} from "@/shared/ui";

import {OpenCartButton} from "@/features/cart";
import {AuthController} from "@/widgets/AuthController";
import {SearchInput} from "@/features/products";

export const Navbar = () => {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">

                {/* Left */}
                <div className="font-semibold text-gray-900 dark:text-white">
                    E-commerce
                </div>

                {/* Center */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="w-full max-w-md">
                        <SearchInput/>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <OpenCartButton/>
                    <ThemeToggle/>
                    <AuthController/>
                </div>

            </div>
        </header>
    )
}