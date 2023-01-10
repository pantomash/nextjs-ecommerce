import axios, {AxiosError} from "axios";

const baseUrl = "https://dummyjson.com";

export const api = axios.create({
    baseURL: baseUrl,
    timeout: 2000,
    headers: {
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use(
    (requestConfig) => {
        return requestConfig
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    },
)