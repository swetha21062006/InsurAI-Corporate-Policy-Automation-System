import api from "./api";

export const getAvailability = () =>
  api.get("/agents/availability").then((r) => r.data);
