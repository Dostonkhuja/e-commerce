import { axiosInstance } from "@/5-shared/api";
import type { LoginRequest, LoginResponse } from "../model/types.ts";

const DEFAULT_EXPIRES_MIN = 30;

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
    const { data } = await axiosInstance.post<LoginResponse>("/auth/login", {
        username: payload.username,
        password: payload.password,
        expiresInMins: payload.expiresInMins ?? DEFAULT_EXPIRES_MIN,
    });

    return data;
};
