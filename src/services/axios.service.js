import axios from "axios";

import baseURL from "../constants/base.url";
import MY_TOKEN from "../constants/token.api";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${MY_TOKEN}`
    }
});