import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./sass/app.scss";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "./components",
  true,
  /[A-Z]\w+\.(vue)$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

let app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  beforeCreate() {
    document.title = this.$route.meta.title || process.env.VUE_APP_NAME;
  },
  watch: {
    $route(to, from) {
      if (to.meta.hasOwnProperty("title")) {
        document.title =
          to.meta.title + " - " + process.env.VUE_APP_NAME ||
          process.env.VUE_APP_NAME;
      } else {
        document.title = process.env.VUE_APP_NAME;
      }
    },
  },
}).$mount("#app");

global.vm = app;
