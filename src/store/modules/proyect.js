import { getField, updateField } from "vuex-map-fields";
import { PROYECT } from "@/store/types";
import { hashTable } from "@/store/data/HashTable";
export const state = {
  showForm: false,
  deleteDialog: false,
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
  proyect: (state) => state.proyect,
  showForm: (state) => state.showForm,
};
export const mutations = {
  updateField,
  [PROYECT.TOGGLE_FORM](state) {
    state.showForm = !state.showForm;
  },
  [PROYECT.SET_PROYECTS](state, proyects) {
    proyects.forEach((proyect) => {
      hashTable.insert(proyect.id, proyect, "proyects");
    });
    state.proyects = hashTable.collection("proyects");
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
  [PROYECT.TOGGLE_DELETE_DIALOG](state) {
    state.deleteDialog = !state.deleteDialog;
  },
  [PROYECT.REMOVE_PROYECT](state, proyectId) {
    hashTable.remove(proyectId, "proyects");
    state.proyects = hashTable.collection("proyects");
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
  setColor({ dispatch }, { proyect, color }) {
    proyect.color = color;
    dispatch("update", { id: proyect.id, color });
  },
  showDeleteDialog({ commit }, proyect) {
    commit(PROYECT.SET_PROYECT, proyect);
    commit(PROYECT.TOGGLE_DELETE_DIALOG);
  },
  async remove({ state, commit, dispatch }) {
    try {
      commit(PROYECT.REMOVE_PROYECT, state.proyect.id);
      commit(PROYECT.TOGGLE_DELETE_DIALOG);
      await dispatch(
        "request",
        {
          method: "DELETE",
          url: `proyects/${state.proyect.id}`,
        },
        { root: true }
      );
      dispatch("snackbar", { message: "Proyecto eliminado" }, { root: true });
    } catch (error) {
      dispatch("catchError", error, { root: true });
    }
  },
  toggleProyectForm({ commit }, proyect = null) {
    commit(PROYECT.SET_PROYECT, proyect);
    commit(PROYECT.TOGGLE_FORM);
  },
};
