import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

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
      <header className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate('/')} className="text-gray-600 text-xl">‹</button>
          <span className="text-xs font-bold text-[#1eb2a6]">AULAVERDE</span>
          <div className="w-6"></div>
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Categorías</h1>
        <p className="text-gray-400 text-xs">Monitoreo de residuos en tiempo real</p>
      </header>
      {/* ... resto del código con etiquetas en castellano ... */}
    </div>
  );
};

export default Categories;