import api from "./instance";

export const profileAPI = {
  getUserProfile(userId) {
    return api.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return api.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return api.put(`profile/status`, { status: status });
  },
};
