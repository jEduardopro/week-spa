export const state = {
  user: null,
  token: null,
  creadentials: {
    token: null,
    email: null,
    password: null,
    password_confirmation: null,
    showPassword: false,
  },
};

export const getters = {};

export const mutations = {
  SAVE_TOKEN_USER(state, payload) {
    state.user = payload.user;
    state.token = payload.token;
    let wk_token_obj = {
      user: payload.user,
      token: payload.token,
    };
    let encryptedWkToken = btoa(JSON.stringify(wk_token_obj));
    localStorage.setItem("wk_token", encryptedWkToken);
  },
  CLEAR_FORM_LOGIN(state) {
    state.creadentials = {
      email: null,
      password: null,
      showPassword: false,
    };
  },
  LOGOUT(state) {
    state.user = null;
    state.token = null;
    localStorage.removeItem("wk_token");
  },
};

export const actions = {
  me({ dispatch }) {
    dispatch(
      "request",
      {
        method: "get",
        url: "user",
      },
      { root: true }
    )
      .then((resp) => {
        // console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  login({ state, commit, dispatch }) {
    dispatch(
      "request",
      {
        method: "post",
        url: "auth/login",
        data: state.creadentials,
      },
      { root: true }
    )
      .then((resp) => {
        commit("SAVE_TOKEN_USER", {
          user: resp.data.user,
          token: `Bearer ${resp.data.access_token}`,
        });
        commit("CLEAR_FORM_LOGIN");
        vm.$router.replace({ name: "Home" });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  requestReset({ state, commit, dispatch }) {
    dispatch(
      "request",
      {
        method: "post",
        url: "auth/password/email",
        data: { email: state.creadentials.email },
      },
      { root: true }
    )
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  reset({ state, commit, dispatch }) {
    dispatch(
      "request",
      {
        method: "post",
        url: "auth/password/reset",
        data: state.creadentials,
      },
      { root: true }
    )
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  logout({ commit, dispatch }) {
    vm.$router.replace({ name: "Login" });
    dispatch(
      "request",
      {
        method: "post",
        url: "auth/logout",
      },
      { root: true }
    )
      .then((resp) => {
        commit("LOGOUT");
      })
      .catch((err) => {
        commit("LOGOUT");
        console.log(err);
      });
  },
};
