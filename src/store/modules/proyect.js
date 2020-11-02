import { getField, updateField } from "vuex-map-fields";
import { PROYECT } from "@/store/types";
export const state = {
  showForm: false,
  proyects: [],
};
export const getters = {
  getField,
  proyects: (state) => state.proyects,
  showForm: (state) => state.showForm,
};
export const mutations = {
  updateField,
  [PROYECT.TOGGLE_FORM](state) {
    state.showForm = !state.showForm;
  },
  [PROYECT.SET_PROYECTS](state, proyects) {
    state.proyects = proyects;
  },
};
export const actions = {
  async getProyects({ commit, dispatch }) {
    try {
      commit("TOGGLE_WAIT_RESPONSE", "waitResource", { root: true });
      let response = await dispatch(
        "request",
        {
          method: "GET",
          url: "proyects",
        },
        { root: true }
      );
      commit(PROYECT.SET_PROYECTS, response.data);
    } catch (error) {
      dispatch("catchError", error, { root: true });
    } finally {
      commit("TOGGLE_WAIT_RESPONSE", "waitResource", { root: true });
    }
  },
  toggleProyectForm({ commit }) {
    commit(PROYECT.TOGGLE_FORM);
  },
};
