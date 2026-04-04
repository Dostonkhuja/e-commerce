import {UserInfoCard} from "@/entitys/auth";
import {getUserFromStorage, useLogout} from "@/features/auth";
import {LogoutButton} from "@/features/auth/ui/LogoutButton.tsx";

type Props = {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserInfo = ({ setIsAuth }: Props) => {

   const {logout} = useLogout(setIsAuth)
   const {user} = getUserFromStorage()

    if (!user) return null

    return (
        <div className="flex items-center gap-2">
            <UserInfoCard user={user}/>
            <LogoutButton onLogout={logout}/>
        </div>
    )
}