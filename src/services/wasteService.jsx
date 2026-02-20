import api from "./api";

export const createWaste = async (formData, containerId) => {
  const { data } = await api.post(`/wastes/${containerId}`, {
    weight: parseFloat(formData.peso),
    date: formData.fechaRegistro,
  });
  return data;
};
