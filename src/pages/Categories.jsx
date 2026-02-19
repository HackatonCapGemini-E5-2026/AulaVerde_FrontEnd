import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';

const Categories = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();

  const categoriesData = [
    { name: 'Papel', progress: 100, color: 'bg-blue-500', icon: '📄' },
    { name: 'Plástico/Metales', progress: 85, color: 'bg-yellow-400', icon: '🧴' },
    { name: 'Vidrio', progress: 32, color: 'bg-green-500', icon: '🍾' },
    { name: 'Orgánico', progress: 28, color: 'bg-orange-400', icon: '🍎' },
    { name: 'General', progress: 14, color: 'bg-gray-400', icon: '🗑️' },
    { name: 'Peligrosos', progress: 2, color: 'bg-red-500', icon: '⚠️' },
  ];

  return (
    <div className={`p-6 min-h-screen transition-colors duration-300 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      <header className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate('/')} className={`text-xl ${dark ? 'text-slate-300' : 'text-gray-600'}`}>‹</button>
          <span className="text-xs font-bold text-[#1eb2a6]">AULAVERDE</span>
          <DarkToggle />
        </div>
        <h1 className={`text-2xl font-bold transition-colors duration-300 ${dark ? 'text-white' : 'text-slate-800'}`}>Categorías</h1>
        <p className={`text-xs ${dark ? 'text-slate-400' : 'text-gray-400'}`}>Monitoreo de residuos en tiempo real</p>
      </header>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Buscar categoría..."
          className={`w-full border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#1eb2a6] outline-none transition-colors duration-300
            ${dark ? 'bg-slate-800 text-white placeholder-slate-500' : 'bg-gray-100 text-gray-800'}`}
        />
        <span className="absolute left-3 top-3 text-gray-400">🔍</span>
      </div>

      <div className="space-y-6">
        {categoriesData.map((cat, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <div className="text-2xl w-8 text-center">{cat.icon}</div>
            <div className="flex-1">
              <div className="flex justify-between mb-1 items-end">
                <span className={`text-sm font-semibold ${dark ? 'text-slate-200' : 'text-gray-700'}`}>{cat.name}</span>
                <span className={`text-xs font-bold ${dark ? 'text-slate-400' : 'text-gray-500'}`}>{cat.progress}%</span>
              </div>
              <div className={`w-full rounded-full h-2 ${dark ? 'bg-slate-700' : 'bg-gray-100'}`}>
                <div
                  className={`${cat.color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${cat.progress}%` }}
                ></div>
              </div>
            </div>
            <span className={`text-lg ${dark ? 'text-slate-600' : 'text-gray-300'}`}>›</span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className={`font-bold text-sm ${dark ? 'text-slate-200' : 'text-gray-800'}`}>Alertas Recientes</h3>
          <button onClick={() => navigate('/alerts')} className="text-[#1eb2a6] text-xs font-bold">Ver todo</button>
        </div>
        <div className={`border p-4 rounded-2xl flex items-start space-x-3 ${dark ? 'bg-red-950 border-red-900' : 'bg-red-50 border-red-100'}`}>
          <span className="text-red-500">⚠️</span>
          <p className={`text-[11px] leading-tight ${dark ? 'text-red-300' : 'text-red-700'}`}>
            <strong>Papel:</strong> El contenedor está al 100% y necesita vaciado pronto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;