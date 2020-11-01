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
    const {
      config,
      response: { status, data },
    } = error;
    const originalReq = config;
    if (status == 401) {
      if (localStorage.getItem("wk_token")) {
        const wk_token = JSON.parse(atob(localStorage.getItem("wk_token")));
        console.log(originalReq);
        console.log(wk_token.user);
        refreshToken(wk_token.user, originalReq);
      } else {
        window.location.replace("/login");
      }
      return null;
    } else {
      return Promise.reject(error);
    }
  }
);

async function refreshToken(user, lastReq) {
  try {
    let resp = await axios.post(`${baseURL}auth/refresh/token`, {
      email: user.email,
    });
    store.commit(
      "auth/SAVE_TOKEN_USER",
      {
        user: resp.data.data.user,
        token: `Bearer ${resp.data.data.access_token}`,
      },
      { root: true }
    );
    lastReq.headers.Authorization = `Bearer ${resp.data.data.access_token}`;
    axios(lastReq);
  } catch (error) {
    console.log(error);
    localStorage.removeItem("wk_token");
    window.location.replace("/login");
  }
}

export default Axios;
