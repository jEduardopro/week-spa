import { getField, updateField } from "vuex-map-fields";
import { PROYECT } from "@/store/types";
export const state = {
  showForm: false,
  proyects: [],
  proyect: {
    id: null,
    name: null,
    description: null,
    color: null,
  },
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
  [PROYECT.SET_PROYECT](state, proyect) {
    state.proyect = proyect;
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
  toggleProyectForm({ commit }, proyect = null) {
    if (proyect) {
      commit(PROYECT.SET_PROYECT, proyect);
    }
    commit(PROYECT.TOGGLE_FORM);
  },
};
