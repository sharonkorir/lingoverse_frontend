import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/auth/";

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get("login/refresh/");
  return response.data;
};
// TODO: check response msg for unauthenticaed
authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message;
    if (errMessage.includes("not authenticated") && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return authApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const signUpUserFn = async (user) => {
  const response = await authApi.post("register/", user);
  return response.data;
};

export const loginUserFn = async (user) => {
  const response = await authApi.post("login/", user);
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await authApi.get("logout/");
  return response.data;
};

export const getProfileFn = async () => {
  const response = await authApi.get("profile/");
  return response.data;
};
