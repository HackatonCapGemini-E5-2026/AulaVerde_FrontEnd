import api from "./api";

export const getAllAlerts = async () => {
  const { data } = await api.get("/alerts");
  return data;
};

export const getAlertById = async (id) => {
  const { data } = await api.get(`/alerts/${id}`);
  return data;
};

export const createAlert = async (alertData) => {
  const { data } = await api.post("/alerts", alertData);
  return data;
};
