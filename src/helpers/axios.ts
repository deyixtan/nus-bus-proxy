import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const generateAxiosInstance = () => {
  const { PROXY_BASE_URL, PROXY_USER_AGENT, PROXY_AUTH_TOKEN } = process.env;

  const axiosConfig: AxiosRequestConfig = {
    baseURL: PROXY_BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": PROXY_USER_AGENT!,
      Authorization: "Basic " + PROXY_AUTH_TOKEN!,
    },
  };

  const axiosInstance: AxiosInstance = axios.create(axiosConfig);
  return axiosInstance;
};
