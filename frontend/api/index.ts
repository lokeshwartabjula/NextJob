import axios from "axios";
import { BASE_URL } from "./routes";

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})