import axios from "axios";
import store from "../store";

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

Axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Return any error which is not due to authentication back to the calling service
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (localStorage.getItem("wk_token")) {
      const wk_token = JSON.parse(atob(localStorage.getItem("wk_token")));
      return refreshToken(wk_token.user)
        .then((token) => {
          // New request with new token
          const config = error.config;
          config.headers["Authorization"] = `Bearer ${token}`;

          return new Promise((resolve, reject) => {
            axios
              .request(config)
              .then((response) => {
                resolve(response.data);
              })
              .catch((error) => {
                reject(error);
              });
          });
        })
        .catch((err) => {
          Promise.reject(err);
        });
    } else {
      localStorage.removeItem("wk_token");
      window.location.replace("/login");
      Promise.reject(error);
    }
  }
);

function refreshToken(user) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}auth/refresh/token`, {
        email: user.email,
      })
      .then((resp) => {
        store.commit(
          "auth/SAVE_TOKEN_USER",
          {
            user: resp.data.data.user,
            token: `Bearer ${resp.data.data.access_token}`,
          },
          { root: true }
        );
        resolve(resp.data.data.access_token);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("wk_token");
        window.location.replace("/login");
        reject(err);
      });
  });
}

export default Axios;
