import { UserInfoCard } from "@/4-entities/user";
import { LoginButton, LoginModal, LogoutButton } from "@/3-features/auth";
import { OpenCartButton } from "@/3-features/cart";
import { SearchInput } from "@/3-features/products";
import { ThemeToggle } from "@/5-shared/ui";
import { useNavbarAuth } from "@/2-widgets/navbar/hooks/use-navbar-auth.ts";

export const Navbar = () => {
    const {
        isAuthenticated,
        isLoginModalOpen,
        setLoginModalOpen,
        user,
        handleLoginSuccess,
        handleLogout,
    } = useNavbarAuth();

    return (
        <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-6">
                <div className="font-semibold text-gray-900 dark:text-white">
                    E-commerce
                </div>

                <div className="hidden flex-1 justify-center md:flex">
                    <div className="w-full max-w-md">
                        <SearchInput />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <OpenCartButton />
                    <ThemeToggle />

                    {!isAuthenticated && (
                        <LoginButton onClick={() => setLoginModalOpen(true)} />
                    )}

                    {isAuthenticated && (
                        <div className="flex items-center gap-2">
                            {user && <UserInfoCard user={user} />}
                            <LogoutButton onLogout={handleLogout} />
                        </div>
                    )}
                </div>
            </div>

            <LoginModal
                open={isLoginModalOpen}
                setOpen={setLoginModalOpen}
                onSuccess={handleLoginSuccess}
            />
        </header>
    );
};
