import type {User} from "@/entitys/user";

export const getUserFromStorage = () => {
    const storedUser = localStorage.getItem("user")
    const user: User | null = storedUser ? JSON.parse(storedUser) : null
    return { user };
};