export default function auth(next, store) {
  if (!localStorage.getItem("wk_token")) {
    return next({ name: "Login" });
  }
  let wk_token = JSON.parse(atob(localStorage.getItem("wk_token")));

  store.commit("auth/SAVE_TOKEN_USER", wk_token);

  return next();
}
