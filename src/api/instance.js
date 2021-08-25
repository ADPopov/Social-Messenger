import axios from "axios";

export default axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "8387d609-a73e-4ba7-ac83-e6c7f073aabf",
  },
});
