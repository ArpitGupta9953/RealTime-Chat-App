// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });

// In your frontend API calls
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.MODE === 'production' 
    ? 'https://realtime-chat-app-u9p6.onrender.com/api'
    : 'http://localhost:5001/api',
  withCredentials: true,
});

export default api;
