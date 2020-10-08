import middlewares from "../middlewares";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Login"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/layouts/Layout"),
    meta: { middleware: middlewares.auth },
  },
];

export default routes;
