import { axiosInstance } from "../../../shared/api"

export type LoginRequest = {
    username: string
    password: string
    expiresInMins?: number
}

export type LoginResponse = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    accessToken: string,
    refreshToken: string
}

const DEFAULT_EXPIRES_MIN = 30

export const login = async (
    payload: LoginRequest
): Promise<LoginResponse> => {
    const { data } = await axiosInstance.post<LoginResponse>(
        "/auth/login",
        {
            username: payload.username,
            password: payload.password,
            expiresInMins: payload.expiresInMins ?? DEFAULT_EXPIRES_MIN
        }
    )

    return data
}