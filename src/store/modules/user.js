import { getField, updateField } from "vuex-map-fields";
import { USER } from "@/store/types";

export const state = {
  users: [],
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  [USER.SET_USERS](state, users) {
    state.users = users;
  },
};

export const actions = {
  async getUsers({ commit, dispatch }) {
    try {
      commit("TOGGLE_WAIT_RESPONSE", "waitResource", { root: true });
      let response = await dispatch(
        "request",
        {
          method: "GET",
          url: "users",
        },
        { root: true }
      );
      commit(USER.SET_USERS, response.data);
    } catch (error) {
      dispatch("catchError", error, { root: true });
    } finally {
      commit("TOGGLE_WAIT_RESPONSE", "waitResource", { root: true });
    }
  },
};
