import { useAppDispatch } from "@/app/providers/store/hooks";
import { clearCart } from "@/features/cart/model/cartPersistSlice.ts";

export const useLogout = (setIsAuth: (v: boolean) => void) => {
    const dispatch = useAppDispatch();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setIsAuth(false);
        dispatch(clearCart());
    };

    return { logout };
};