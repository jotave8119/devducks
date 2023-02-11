import axios from "axios";

const api = axios.create({
    baseURL: "https://devducks-server.vercel.app/techs",
    timeout: 5000,
});

export default api;
