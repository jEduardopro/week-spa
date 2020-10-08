export const state = {
  user: null,
  token: null,
  formLogin: {
    email: null,
    password: null,
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
  LOGOUT(state) {
    state.user = null;
    state.token = null;
    localStorage.removeItem("wk_token");
  },
};

export const actions = {
  login({ state, commit, dispatch }) {
    dispatch(
      "request",
      {
        method: "post",
        url: "auth/login",
        data: state.formLogin,
      },
      { root: true }
    )
      .then((resp) => {
        commit("SAVE_TOKEN_USER", {
          user: resp.data.user,
          token: `Bearer ${resp.data.access_token}`,
        });
        vm.$router.replace({ name: "Home" });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  logout({ commit, dispatch }) {
    commit("LOGOUT");
    vm.$router.replace({ name: "Login" });
    dispatch(
      "request",
      {
        method: "post",
        url: "auth/logout",
      },
      { root: true }
    )
      .then((resp) => {})
      .catch((err) => {
        console.log(err);
      });
  },
};
