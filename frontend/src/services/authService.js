import api from "./api";

export const login = (creds) =>
  api.post("/auth/login", creds).then((r) => r.data);
export const register = (payload) =>
  api.post("/auth/register", payload).then((r) => r.data);
