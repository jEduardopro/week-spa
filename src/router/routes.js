import middlewares from "../middlewares";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Login"),
  },
  {
    path: "/forgot/password",
    name: "ForgotPassword",
    component: () => import("@/pages/Forgot"),
  },
  {
    path: "/reset/password/:token",
    name: "ResetPassword",
    component: () => import("@/pages/Reset"),
    props: true,
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/layouts/Layout"),
    meta: { middleware: middlewares.auth },
  },
];

export default routes;
