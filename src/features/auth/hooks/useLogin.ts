import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { loginAPI } from "../index";
import type { AxiosError } from "axios";
import {useAppDispatch, useAppSelector} from "@/app/providers/store/hooks";
import {selectCartProducts} from "@/features/cart/model/persistSelectors.ts";
import {updateCartThunk} from "@/features/cart";
import type {LoginError} from "@/features/auth/model/types.ts";

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useLogin({ open, setOpen, setIsAuth }: Props) {
    const dispatch = useAppDispatch();
    const products =  useAppSelector(selectCartProducts);


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const res = await loginAPI({ username, password });
            localStorage.setItem("token", res.accessToken);
            localStorage.setItem("user", JSON.stringify(res));

            setIsAuth(true);
            setOpen(false);

            dispatch(updateCartThunk(products));
        } catch (err: unknown) {
            const error = err as AxiosError<LoginError>;
            setError(error.response?.data?.message || "Login error");
        } finally {
            setLoading(false);
        }
    };

    const close = () => setOpen(false);

    return {
        username,
        password,
        loading,
        error,
        open,
        onChangeUsername,
        onChangePassword,
        handleSubmit,
        close,
    };
}