import axios from "axios";

const https = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
https.interceptors.request.use(
  (config) => {
    let newConfig = {
      ...config,
    };

    return newConfig;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    return err;
  }
);
export default https;
