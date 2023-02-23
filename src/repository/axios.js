import Axios from "axios";

const http = Axios.create({
  baseURL: "http://localhost:4100/api",
  headers: {},
});

// Interceptors Axios to Insert Token for each request
http.interceptors.request.use(
  async (config) => {
    let token = localStorage.userToken ? localStorage.getItem("userToken") : "";
    config.headers = {
      authorization: token,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default http;
