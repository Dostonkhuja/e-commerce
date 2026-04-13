import type {User} from "@/4-entities/user";

export const getUserFromStorage = () => {
    const storedUser = localStorage.getItem("user")
    const user: User | null = storedUser ? JSON.parse(storedUser) : null
    return { user };
};