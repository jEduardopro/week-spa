import { getField, updateField } from "vuex-map-fields";
import { PROYECT } from "@/store/types";
export const state = {
  showForm: false,
  deleteDialog: false,
  proyects: [],
  currentProyect: {
    id: null,
    name: null,
    description: null,
    color: null,
    relationships: {},
    meta: {},
    dates: {},
  },
  form: {
    id: null,
    name: null,
    description: null,
    color: null,
  },
};
export const getters = {
  getField,
  proyects: (state) => state.proyects,
  currentProyect: (state) => state.currentProyect,
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
      state.currentProyect = proyect;
      return;
    }
    state.currentProyect = {
      id: null,
      name: null,
      description: null,
      color: null,
    };
  },
  [PROYECT.SET_FORM](state, proyect) {
    if (proyect) {
      state.form = proyect;
      return;
    }
    state.form = {
      id: null,
      name: null,
      description: null,
      color: null,
    };
  },
  [PROYECT.ADD_PROYECT](state, proyect) {
    state.proyects.unshift(proyect);
  },
  [PROYECT.TOGGLE_DELETE_DIALOG](state) {
    state.deleteDialog = !state.deleteDialog;
  },
  [PROYECT.REMOVE_PROYECT](state, proyectId) {
    let proyectIndex = state.proyects.find((p) => p.id == proyectId);
    state.proyects.splice(proyectIndex, 1);
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
  async getProyect({ state, commit, dispatch }, id) {
    const proyect = state.proyects.find((p) => p.id == id);
    if (!proyect) {
      await dispatch("getProyectResource", id);
      return;
    }
    commit(PROYECT.SET_PROYECT, proyect);
  },
  async getProyectResource({ commit, dispatch }, id) {
    try {
      let response = await dispatch(
        "request",
        {
          method: "GET",
          url: `proyects/${id}`,
        },
        { root: true }
      );
      commit(PROYECT.SET_PROYECT, response.data);
    } catch (error) {
      vm.$router.replace({ name: "Proyects" });
      dispatch("catchError", error, { root: true });
    }
  },
  showDialogToAddProyect({ commit }) {
    commit(PROYECT.SET_FORM, null);
    commit(PROYECT.TOGGLE_FORM);
  },
  save({ state, dispatch }) {
    const color = state.currentProyect.color;
    let { id, name, description } = state.form;
    if (id) {
      if (name.trim().length > 0) {
        dispatch("update", { id, name, description, color });
      } else {
        let proyectUpdated = {
          id,
          name: state.currentProyect.name.charAt(0),
          description,
          color,
        };
        dispatch("update", proyectUpdated);
      }
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
      commit(PROYECT.TOGGLE_FORM);
    }
  },
  setColor({ dispatch }, { proyect, color }) {
    proyect.color = color;
    dispatch("update", { id: proyect.id, color });
  },
  showDialogToEditProyect({ commit }, proyect) {
    commit(PROYECT.SET_FORM, proyect);
    commit(PROYECT.SET_PROYECT, { ...proyect });
    commit(PROYECT.TOGGLE_FORM);
  },
  async update({ commit, dispatch }, payload) {
    try {
      commit("TOGGLE_WAIT_RESPONSE", "loadingButton", { root: true });
      let proyectUpdated = await dispatch(
        "request",
        {
          method: "PUT",
          url: `proyects/${payload.id}`,
          data: payload,
        },
        { root: true }
      );
      commit(PROYECT.SET_PROYECT, proyectUpdated.data);
    } catch (error) {
      dispatch("catchError", error, { root: true });
    } finally {
      commit("TOGGLE_WAIT_RESPONSE", "loadingButton", { root: true });
    }
  },
  showDeleteDialog({ commit }, proyect) {
    commit(PROYECT.SET_PROYECT, proyect);
    commit(PROYECT.TOGGLE_DELETE_DIALOG);
  },
  async remove({ state, commit, dispatch }) {
    try {
      commit(PROYECT.REMOVE_PROYECT, state.currentProyect.id);
      commit(PROYECT.TOGGLE_DELETE_DIALOG);
      vm.$router.replace({ name: "Proyects" });
      await dispatch(
        "request",
        {
          method: "DELETE",
          url: `proyects/${state.currentProyect.id}`,
        },
        { root: true }
      );
      dispatch("snackbar", { message: "Proyecto eliminado" }, { root: true });
    } catch (error) {
      console.log(error);
      dispatch("catchError", error, { root: true });
    }
  },
};
