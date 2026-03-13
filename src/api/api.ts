import axios, { AxiosError } from "axios";
import { HttpError } from "./httpError";
import { clearToken, getToken } from "../auth/authStore";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 30000,
});

API.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    const responseData = error.response?.data as
      | {
          detail?: string | { msg: string; input?: unknown; type?: string }[];
        }
      | undefined;

    if (status === 401) {
      clearToken();
    }

    let detailMessage = "Server error";

    if (responseData?.detail) {
      if (typeof responseData.detail === "string") {
        detailMessage = responseData.detail;
      } else if (Array.isArray(responseData.detail)) {
        detailMessage = responseData.detail[0]?.msg ?? "Validation error";
      }
    } else {
      detailMessage = error.message;
    }

    return Promise.reject(new HttpError(detailMessage, status, responseData));
  },
);

export default API;
