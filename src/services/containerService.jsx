import api from "./api";

export const getAllContainers = async () => {
  const { data } = await api.get("/containers");
  return data;
};

export const emptyContainer = async (id) => {
  await api.put(`/containers/${id}/empty`);
};
