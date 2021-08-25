import api from "./instance";

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 30) {
    return api.get(`users?page=${currentPage}&count=${pageSize}`);
  },

  setFollow(userId) {
    return api.post(`follow/${userId}`);
  },

  setUnfollow(userId) {
    return api.delete(`follow/${userId}`);
  },
};
