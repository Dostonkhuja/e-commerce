import { useState } from "react";

export const useAuthController = () => {
    const [open, setOpen] = useState(false);

    const [isAuth, setIsAuth] = useState(() => {
        return !!localStorage.getItem("token");
    });

    return {
        open,
        setOpen,
        isAuth,
        setIsAuth,
    };
};