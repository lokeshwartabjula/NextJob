/*
Author: Jeet Mehta
Banner ID: B00945900
Email ID: jt429386@dal.ca
*/
// Author: Aayush Dakwala
// Banner: B00945308
// Email:  ay383119@dal.ca

import axios, { AxiosError } from "axios";
import { BASE_URL } from "./routes";
import { message } from "antd";
import { getToken, removeUserData } from "@/app/(context)/LocatStorageManager";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (config.headers && token) config.headers.set("Authorization", token);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof AxiosError && error.response?.status === 401) {
      if (window.location.pathname !== "/auth/login") {
        message.error("Unauthorized! Please login again.");
        redirectToLogin();
      }
    }
    return Promise.reject(error);
  }
);

const redirectToLogin = () => {
  removeUserData();
  window.location.replace("/auth/login");
};

export const isAuthenticatedUser = () => {
  const token = getToken();
  if (token) return true;
  redirectToLogin();
  return false;
};
