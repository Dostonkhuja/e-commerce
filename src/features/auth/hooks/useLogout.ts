import { useAppDispatch } from "@/app/providers/store/hooks";
import { clearCart } from "@/entitys/cart/model/cartPersistSlice";

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