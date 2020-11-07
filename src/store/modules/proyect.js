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
    if (proyect) {
      state.proyect = proyect;
      return;
    }
    state.proyect = {
      id: null,
      name: null,
      description: null,
      color: null,
    };
  },
  [PROYECT.ADD_PROYECT](state, proyect) {
    state.proyects.unshift(proyect);
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
  save({ state, dispatch }) {
    let { id, name, description } = state.proyect;
    if (id) {
      dispatch("update", { id, name, description });
      return;
    }
    dispatch("create", { name, description });
  },
  async create({ commit, dispatch }, payload) {
    try {
      commit("TOGGLE_WAIT_RESPONSE", "loadingButton", {
        root: true,
      });
      let response = await dispatch(
        "request",
        {
          method: "POST",
          url: `proyects`,
          data: payload,
        },
        { root: true }
      );
      commit(PROYECT.ADD_PROYECT, response.data);
    } catch (error) {
      dispatch("catchError", error, { root: true });
    } finally {
      commit("TOGGLE_WAIT_RESPONSE", "loadingButton", { root: true });
      dispatch("toggleProyectForm");
    }
  },
  async update({ commit, dispatch }, payload) {
    try {
      commit("TOGGLE_WAIT_RESPONSE", "loadingButton", { root: true });
      await dispatch(
        "request",
        {
          method: "PUT",
          url: `proyects/${payload.id}`,
          data: payload,
        },
        { root: true }
      );
    } catch (error) {
      dispatch("catchError", error, { root: true });
    } finally {
      commit("TOGGLE_WAIT_RESPONSE", "loadingButton", { root: true });
    }
  },
  async delete({ commit, dispatch }, proyectId) {
    try {
      await dispatch(
        "request",
        {
          method: "DELETE",
          url: `proyects/${payload.id}`,
        },
        { root: true }
      );
    } catch (error) {
      dispatch("catchError", error, { root: true });
    }
  },
  setColor({ dispatch }, { proyect, color }) {
    proyect.color = color;
    dispatch("update", { id: proyect.id, color });
  },
  toggleProyectForm({ commit }, proyect = null) {
    commit(PROYECT.SET_PROYECT, proyect);
    commit(PROYECT.TOGGLE_FORM);
  },
};
