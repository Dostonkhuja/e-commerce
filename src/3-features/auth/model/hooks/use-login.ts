import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { AxiosError } from "axios";
import { login } from "@/3-features/auth/api/login.api.ts";
import type { LoginError } from "../types.ts";

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onSuccess: () => void;
};

export const useLogin = ({ open, setOpen, onSuccess }: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await login({ username, password });
            localStorage.setItem("token", response.accessToken);
            localStorage.setItem("user", JSON.stringify(response));
            onSuccess();
            setOpen(false);
        } catch (unknownError) {
            const axiosError = unknownError as AxiosError<LoginError>;
            setError(axiosError.response?.data?.message || "Login error");
        } finally {
            setLoading(false);
        }
    };

    return {
        error,
        handleSubmit,
        loading,
        onChangePassword,
        onChangeUsername,
        open,
        password,
        username,
    };
};
