import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/Api";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

const requireContext = require.context("./modules", false, /.*\.js$/);

const modules = requireContext
  .keys()
  .map((file) => [file.replace(/(^.\/)|(\.js$)/g, ""), requireContext(file)])
  .reduce((modules, [name, module]) => {
    if (module.namespaced === undefined) {
      module.namespaced = true;
    }
    return { ...modules, [name]: module };
  }, {});

export default new Vuex.Store({
  state: {
    uploadPercentage: 0,
    drawerMenu: true,
    loaders: {
      waitResponse: false,
      waitResource: false,
      waitAction: false,
      loadingButton: false,
    },
    errors: {},
  },
  getters: {
    getField,
    waitResponse: (state) => state.loaders.waitResponse,
    waitResource: (state) => state.loaders.waitResource,
    waitAction: (state) => state.loaders.waitAction,
    loadingButton: (state) => state.loaders.loadingButton,
  },
  mutations: {
    updateField,
    TOGGLE_DRAWER(state) {
      state.drawerMenu = !state.drawerMenu;
    },
    TOGGLE_WAIT_RESPONSE(state, loader) {
      state.loaders[loader] = !state.loaders[loader];
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
  },
  actions: {
    request({ state }, { method, url, data, params }) {
      return Api.request({
        method,
        url,
        data,
        params,
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            state.uploadPercentage = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
          }
        },
      });
    },
    snackbar({}, payload) {
      payload.type = payload.type || "success";
      payload.options = payload.options || {};
      toastr[payload.type](payload.message, payload.title, payload.options);
    },
    toggleDrawer({ commit }) {
      commit("TOGGLE_DRAWER");
    },
    catchError({ commit, dispatch }, error) {
      const statusCode = error.response.status;
      if (error.response.data.hasOwnProperty("exception")) {
        dispatch("snackbar", {
          message: "Hubo un error inesperado, intenta de nuevo",
          type: "error",
        });
        return;
      }
      switch (statusCode) {
        case 417:
          dispatch("snackbar", {
            message: error.response.data.error,
            type: "error",
          });

          break;
        case 422:
          commit("SET_ERRORS", error.response.data.errors);
          break;
      }
    },
  },
  modules,
});
