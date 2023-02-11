import axios from "axios";

const api = axios.create({
    baseURL: "https://devducks-server.vercel.app/",
    timeout: 5000,
});

export default api;
