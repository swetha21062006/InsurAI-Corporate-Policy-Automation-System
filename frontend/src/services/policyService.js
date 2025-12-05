import api from "./api";

export async function fetchPolicies() {
  const res = await api.get("/policies");
  return res.data;
}

export async function createPolicy(payload) {
  const res = await api.post("/policies", payload);
  return res.data;
}
