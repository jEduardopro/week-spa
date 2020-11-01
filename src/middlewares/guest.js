export default function guest(next, store) {
  if (localStorage.getItem("wk_token")) {
    return next({ name: "Home" });
  }

  return next();
}
