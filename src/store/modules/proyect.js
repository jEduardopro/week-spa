import { getField, updateField } from "vuex-map-fields";
import { PROYECT } from "@/store/types";
export const state = {
  showForm: false,
};
export const getters = {
  getField,
  showForm: (state) => state.showForm,
};
export const mutations = {
  updateField,
  [PROYECT.TOGGLE_FORM](state) {
    state.showForm = !state.showForm;
  },
};
export const actions = {
  toggleProyectForm({ commit }) {
    commit(PROYECT.TOGGLE_FORM);
  },
};
