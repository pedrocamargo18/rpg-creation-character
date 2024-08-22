import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:15000",
});

export default api;