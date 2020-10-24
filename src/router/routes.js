import middlewares from "../middlewares";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/auth/Login"),
    meta: { middleware: middlewares.guest, title: "Iniciar sesion" },
  },
  {
    path: "/forgot/password",
    name: "ForgotPassword",
    component: () => import("@/pages/auth/Forgot"),
    meta: { middleware: middlewares.guest, title: "Restablecer contraseña" },
  },
  {
    path: "/reset/password/:token",
    name: "ResetPassword",
    component: () => import("@/pages/auth/Reset"),
    props: true,
    meta: { middleware: middlewares.guest, title: "Restablecer contraseña" },
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
        meta: { middleware: middlewares.auth, title: "Home" },
      },
      {
        path: "proyects",
        name: "Proyects",
        component: () => import("@/pages/proyects/index"),
        meta: { middleware: middlewares.auth, title: "Mis proyectos" },
      },
      {
        path: "proyects/:id",
        redirect: { name: "ProyectShowList" },
        component: () => import("@/pages/proyects/show"),
        meta: { middleware: middlewares.auth },
        props: true,
        children: [
          {
            path: "list",
            name: "ProyectShowList",
            component: () => import("@/pages/proyects/list"),
          },
          {
            path: "board",
            name: "ProyectShowBoard",
            component: () => import("@/pages/proyects/board"),
          },
        ],
      },
      {
        path: "tasks",
        name: "Tasks",
        component: () => import("@/pages/tasks/Task"),
        meta: { middleware: middlewares.auth, title: "Mis Tareas" },
      },
      {
        path: "activities",
        name: "Activities",
        component: () => import("@/pages/activities/Activity"),
        meta: { middleware: middlewares.auth, title: "Mis Actividades" },
      },
      {
        path: "tags/categories",
        name: "Categories",
        component: () => import("@/pages/tags/Category"),
        meta: { middleware: middlewares.auth, title: "Mis Categorias" },
      },
      {
        path: "tags/subcategories",
        name: "Subcategories",
        component: () => import("@/pages/tags/Subcategory"),
        meta: { middleware: middlewares.auth, title: "Mis Subcategorias" },
      },
      {
        path: "documents",
        name: "Documents",
        component: () => import("@/pages/documents/Document"),
        meta: { middleware: middlewares.auth, title: "Mis Documentos" },
      },
    ],
  },
];

export default routes;
