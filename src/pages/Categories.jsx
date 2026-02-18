import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  // Datos de las categorías basados en tu diseño
  const categoriesData = [
    { name: 'Papel', progress: 100, color: 'bg-blue-500', icon: '📄' },
    { name: 'Plástico/Metales', progress: 85, color: 'bg-yellow-400', icon: '🧴' },
    { name: 'Vidrio', progress: 32, color: 'bg-green-500', icon: '🍾' },
    { name: 'Orgánico', progress: 28, color: 'bg-orange-400', icon: '🍎' },
    { name: 'General', progress: 14, color: 'bg-gray-400', icon: '🗑️' },
    { name: 'Peligrosos', progress: 2, color: 'bg-red-500', icon: '⚠️' },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Cabecera */}
      <header className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate('/')} className="text-gray-600 text-xl">‹</button>
          <span className="text-xs font-bold text-[#1eb2a6]">AULAVERDE</span>
          <div className="w-6"></div>
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Categorías</h1>
        <p className="text-gray-400 text-xs">Monitoreo de residuos en tiempo real</p>
      </header>

      {/* Buscador Simulado */}
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="Buscar categoría..." 
          className="w-full bg-gray-100 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#1eb2a6] outline-none"
        />
        <span className="absolute left-3 top-3 text-gray-400 italic">🔍</span>
      </div>

      {/* Listado de Progreso */}
      <div className="space-y-6">
        {categoriesData.map((cat, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <div className="text-2xl w-8 text-center">{cat.icon}</div>
            <div className="flex-1">
              <div className="flex justify-between mb-1 items-end">
                <span className="text-sm font-semibold text-gray-700">{cat.name}</span>
                <span className="text-xs font-bold text-gray-500">{cat.progress}%</span>
              </div>
              {/* Barra de progreso Tailwind v4 */}
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className={`${cat.color} h-2 rounded-full transition-all duration-500`} 
                  style={{ width: `${cat.progress}%` }}
                ></div>
              </div>
            </div>
            <span className="text-gray-300 text-lg">›</span>
          </div>
        ))}
      </div>

      {/* Alertas Recientes */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800 text-sm">Alertas Recientes</h3>
          <button onClick={() => navigate('/alerts')} className="text-[#1eb2a6] text-xs font-bold">Ver todo</button>
        </div>
        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-start space-x-3">
          <span className="text-red-500">⚠️</span>
          <p className="text-[11px] text-red-700 leading-tight">
            <strong>Papel:</strong> El contenedor está al 100% y necesita vaciado pronto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;