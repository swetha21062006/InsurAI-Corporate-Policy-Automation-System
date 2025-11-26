import api from "./api";

export const listAppointments = () =>
  api.get("/appointments").then((r) => r.data);
export const createAppointment = (payload) =>
  api.post("/appointments", payload).then((r) => r.data);
