import api from "./instance";

export const authAPI = {
  me() {
    return api.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return api.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return api.delete("auth/login");
  },
};
