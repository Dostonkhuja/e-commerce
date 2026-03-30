import { useState } from "react"
import { LoginButton, LoginModal, UserInfo } from "../index.ts"

export const AuthController = () => {
    const [open, setOpen] = useState(false)
    const [isAuth, setIsAuth] = useState(() => {
        return !!localStorage.getItem("token")
    })

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
    )
}