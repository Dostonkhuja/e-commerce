import { useState } from "react";
import { getUserFromStorage } from "@/3-features/auth";
import { clearCart } from "@/3-features/cart";
import { useAppDispatch } from "@/5-shared/lib/store/hooks.ts";

export const useNavbarAuth = () => {
    const dispatch = useAppDispatch();
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isAuthenticated, setAuthenticated] = useState(() =>
        Boolean(localStorage.getItem("token"))
    );
    const { user } = getUserFromStorage();

    const handleLoginSuccess = () => {
        setAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setAuthenticated(false);
        dispatch(clearCart());
    };

    return {
        handleLoginSuccess,
        handleLogout,
        isAuthenticated,
        isLoginModalOpen,
        setLoginModalOpen,
        user,
    };
};
