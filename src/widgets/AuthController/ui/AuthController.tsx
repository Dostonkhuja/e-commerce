import { LoginButton, LoginModal } from "@/features/auth";
import { useAuthController } from "../index.ts";
import {UserInfo} from "@/widgets/UserInfo";

export const AuthController = () => {

    const {open, setOpen, isAuth, setIsAuth} = useAuthController();

    return (
        <div className="flex items-center gap-2">

            {!isAuth && (
                <LoginButton onClick={() => setOpen(true)} />
            )}

            {isAuth && (
                <UserInfo setIsAuth={setIsAuth} />
            )}

            <LoginModal
                open={open}
                setOpen={setOpen}
                setIsAuth={setIsAuth}
            />
        </div>
    );
};