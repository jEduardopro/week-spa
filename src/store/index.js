import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/Api";

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
  },
  modules,
});
