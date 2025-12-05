import api from "./api";

export async function fetchUsers() {
  const res = await api.get("/users");
  return res.data;
}

export async function updateUserRole(userId, role) {
  const res = await api.put(`/users/${userId}/role`, { role });
  return res.data;
}
