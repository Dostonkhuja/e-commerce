type User = {
    firstName: string
    lastName: string
    image: string
}

type Props = {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserInfo = ({ setIsAuth }: Props) => {
    const storedUser = localStorage.getItem("user")
    const user: User | null = storedUser ? JSON.parse(storedUser) : null

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setIsAuth(false)
    }

    if (!user) return null

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">

                <img
                    src={user.image}
                    alt={user.firstName}
                    className="w-7 h-7 rounded-full object-cover"
                />

                <span className="text-xs text-gray-800 dark:text-gray-200">
                    {user.firstName}
                </span>
            </div>

            <button
                onClick={handleLogout}
                className="
                    px-3 py-1 text-xs
                    rounded-lg

                    bg-red-500 text-white
                    hover:bg-red-600

                    active:scale-95
                    transition
                "
            >
                Logout
            </button>
        </div>
    )
}