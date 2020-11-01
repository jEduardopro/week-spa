import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./sass/app.scss";

import PortalVue from "portal-vue";
Vue.use(PortalVue);

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
  // console.log(componentName);
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    addDrawer(component = null, props = null, width = null, classes = null) {
      var drawer = {
        component: component,
        props: props,
        width: width,
        classes: classes,
        show: true,
      };

      this.$store.commit("drawer/SET_CURRENT_DRAWER", drawer);
    },
  },
});

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
