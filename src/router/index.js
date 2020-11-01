import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta.middleware)) {
    const middleware = to.matched[0].meta.middleware;

    //TODO: add protection when already permissions
    // if(to.matched.some((r) => r.meta.permission)){
    //   permission = to.matched[0].meta.permission;
    // }
    return middleware(next, store);
  }
  return next();
});

export default router;
