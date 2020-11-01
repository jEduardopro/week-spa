import { getField, updateField } from "vuex-map-fields";

export const state = {
  currentDrawer: {
    component: null,
    props: null,
    width: null,
    classes: null,
    show: false,
  },
};

export const getters = {
  getField,
  currentDrawer: (state) => state.currentDrawer,
};

export const mutations = {
  updateField,
  SET_CURRENT_DRAWER(state, drawer) {
    state.currentDrawer = drawer;
  },
};

export const actions = {};
