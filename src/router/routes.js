import middlewares from "../middlewares";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/auth/Login"),
  },
  {
    path: "/forgot/password",
    name: "ForgotPassword",
    component: () => import("@/pages/auth/Forgot"),
  },
  {
    path: "/reset/password/:token",
    name: "ResetPassword",
    component: () => import("@/pages/auth/Reset"),
    props: true,
  },
  {
    path: "/",
    component: () => import("@/layouts/Layout"),
    meta: { middleware: middlewares.auth },
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/pages/Home"),
        meta: { middleware: middlewares.auth },
      },
      {
        path: "tasks",
        name: "Tasks",
        component: () => import("@/pages/tasks/Task"),
        meta: { middleware: middlewares.auth },
      },
      {
        path: "activities",
        name: "Activities",
        component: () => import("@/pages/activities/Activity"),
        meta: { middleware: middlewares.auth },
      },
      {
        path: "tags/categories",
        name: "Categories",
        component: () => import("@/pages/tags/Category"),
        meta: { middleware: middlewares.auth },
      },
      {
        path: "tags/subcategories",
        name: "Subcategories",
        component: () => import("@/pages/tags/Subcategory"),
        meta: { middleware: middlewares.auth },
      },
      {
        path: "documents",
        name: "Documents",
        component: () => import("@/pages/documents/Document"),
        meta: { middleware: middlewares.auth },
      },
    ],
  },
];

export default routes;
