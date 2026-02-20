import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllContainers, emptyContainer } from "../services/containerService";

const categoryConfig = {
  PAPER: { name: "Papel", icon: "📄", color: "bg-blue-500" },
  PLASTIC: { name: "Plástico/Metales", icon: "🧴", color: "bg-yellow-400" },
  GLASS: { name: "Vidrio", icon: "🍾", color: "bg-green-500" },
  ORGANIC: { name: "Orgánico", icon: "🍎", color: "bg-orange-400" },
  GENERAL: { name: "General", icon: "🗑️", color: "bg-gray-400" },
  HAZARDOUS: { name: "Peligrosos", icon: "⚠️", color: "bg-red-500" },
};

const defaultContainers = Object.keys(categoryConfig).map((key, idx) => ({
  id: idx + 1,
  category: key,
  percentFull: 0,
}));

const Categories = () => {
  const navigate = useNavigate();
  const [containers, setContainers] = useState(defaultContainers);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    getAllContainers()
      .then((data) => {
        if (data && data.length > 0) setContainers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleEmpty = async () => {
    try {
      await emptyContainer(confirmId);
      setContainers((prev) => prev.map((c) => (c.id === confirmId ? { ...c, percentFull: 0 } : c)));
    } catch (err) {
      // Si falla la API → actualiza igual el frontend para la demo
      setContainers((prev) => prev.map((c) => (c.id === confirmId ? { ...c, percentFull: 0 } : c)));
      console.error(err);
    } finally {
      setConfirmId(null);
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate("/")} className="text-gray-600 text-xl">
            ‹
          </button>
          <span className="text-xs font-bold text-[#1eb2a6]">AULAVERDE</span>
          <div className="w-6"></div>
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Categorías</h1>
        <p className="text-gray-400 text-xs">Monitoreo de residuos en tiempo real</p>
      </header>

      <div className="relative mb-8">
        <input type="text" placeholder="Buscar categoría..." className="w-full bg-gray-100 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#1eb2a6] outline-none" />
        <span className="absolute left-3 top-3 text-gray-400">🔍</span>
      </div>

      <div className="space-y-6">
        {containers.map((container) => {
          const config = categoryConfig[container.category] || {};
          const percent = container.percentFull ?? 0;
          return (
            <div key={container.id} className="flex items-center space-x-4">
              <div className="text-2xl w-8 text-center">{config.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 items-end">
                  <span className="text-sm font-semibold text-gray-700">{config.name}</span>
                  <span className="text-xs font-bold text-gray-500">{percent}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className={`${config.color} h-2 rounded-full transition-all duration-500`} style={{ width: `${percent}%` }} />
                </div>
              </div>
              <button onClick={() => setConfirmId(container.id)} className="text-gray-300 text-lg hover:text-red-400 transition-colors">
                🗑
              </button>
            </div>
          );
        })}
      </div>

      {confirmId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-2xl p-6 w-full shadow-xl space-y-4">
            <h3 className="font-bold text-lg text-slate-800 text-center">🗑 ¿Vaciar contenedor?</h3>
            <p className="text-sm text-gray-500 text-center">El contador volverá a 0%.</p>
            <div className="flex gap-3 pt-2">
              <button onClick={() => setConfirmId(null)} className="flex-1 border border-gray-300 text-gray-600 py-3 rounded-xl font-semibold">
                NO
              </button>
              <button onClick={handleEmpty} className="flex-1 bg-[#1eb2a6] text-white py-3 rounded-xl font-semibold">
                SÍ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
