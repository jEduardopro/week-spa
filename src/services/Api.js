import axios from "axios";

const baseURL = process.env.VUE_APP_API_URL;

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

const options = {
  headers,
  baseURL,
};

const Axios = axios.create(options);

Axios.interceptors.request.use(
  (resp) => {
    if (localStorage.getItem("wk_token")) {
      const wk_token = JSON.parse(atob(localStorage.getItem("wk_token")));

      if (wk_token) {
        resp.headers.Accept = "application/json";
        resp.headers.Authorization = wk_token.token;
      }
    }
    return resp;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
