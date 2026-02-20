import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAlerts } from "../services/alertService";

const Alerts = () => {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getAllAlerts()
      .then((data) => setAlerts(data))
      .catch((err) => console.error(err));
  }, []);

  const getAlertStyle = (percent) => {
    if (percent >= 90)
      return {
        container: "bg-red-500",
        title: "🚨 NIVEL CRÍTICO",
        message: `El contenedor está casi lleno al ${percent}%. ¡Vacíalo pronto!`,
      };
    if (percent >= 75)
      return {
        container: "bg-[#1eb2a6]",
        title: "ℹ️ ATENCIÓN",
        message: `El contenedor está al ${percent}%. Próximo a llenarse.`,
      };
    return null;
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate("/")} className="text-2xl mr-4 text-gray-600">
          ‹
        </button>
        <h1 className="text-2xl font-bold text-slate-800">Alertas</h1>
      </header>

      {alerts.filter((a) => a.percentAlert >= 75).length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 space-y-3">
          <span className="text-5xl">✅</span>
          <p className="text-gray-400 text-sm font-medium">No hay alertas activas</p>
          <p className="text-gray-300 text-xs">Todo bajo control</p>
        </div>
      )}

      <div className="space-y-4">
        {alerts
          .filter((alert) => alert.percentAlert >= 75)
          .map((alert) => {
            const style = getAlertStyle(alert.percentAlert);
            if (!style) return null;
            return (
              <div key={alert.id} className={`${style.container} text-white p-5 rounded-2xl shadow-md`}>
                <h4 className="font-bold text-sm mb-2">{style.title}</h4>
                <p className="text-xs leading-relaxed">{alert.message || style.message}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Alerts;
