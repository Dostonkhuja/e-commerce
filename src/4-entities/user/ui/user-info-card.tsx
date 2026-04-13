import type {User} from "@/4-entities/user";

type Props = {
    user: User;
};

export const UserInfoCard = ({ user }: Props) => {
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
        </div>
    )
}