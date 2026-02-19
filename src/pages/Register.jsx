import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';

const Register = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();

  const categorias = [
    { name: 'Papel', icon: '📄', color: 'text-blue-500', border: dark ? 'border-blue-800' : 'border-blue-200' },
    { name: 'Plástico/Metal', icon: '🧴', color: 'text-yellow-500', border: dark ? 'border-yellow-800' : 'border-yellow-200' },
    { name: 'Vidrio', icon: '🍾', color: 'text-green-500', border: dark ? 'border-green-800' : 'border-green-200' },
    { name: 'Orgánico', icon: '🍎', color: 'text-orange-500', border: dark ? 'border-orange-800' : 'border-orange-200' },
    { name: 'Peligrosos', icon: '⚠️', color: 'text-red-500', border: dark ? 'border-red-800' : 'border-red-200' },
    { name: 'General', icon: '🗑️', color: 'text-gray-500', border: dark ? 'border-gray-600' : 'border-gray-200' },
  ];

  return (
    <div className={`p-6 min-h-screen transition-colors duration-300 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button onClick={() => navigate('/')} className={`text-2xl mr-4 ${dark ? 'text-slate-300' : 'text-gray-600'}`}>‹</button>
          <h2 className={`text-xl font-bold ${dark ? 'text-white' : 'text-slate-800'}`}>Registrar Residuo</h2>
        </div>
        <DarkToggle />
      </div>

      <p className={`text-sm mb-6 text-center ${dark ? 'text-slate-400' : 'text-gray-500'}`}>
        Selecciona el tipo de residuo recolectado hoy en el aula.
      </p>

      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {categorias.map((cat, idx) => (
          <div
            key={idx}
            className={`border ${cat.border} rounded-xl p-4 flex flex-col items-center justify-center shadow-sm cursor-pointer transition-colors
              ${dark ? 'bg-slate-800 hover:bg-slate-700' : 'hover:bg-gray-50'}`}
          >
            <span className="text-3xl mb-2">{cat.icon}</span>
            <span className={`text-xs font-semibold ${cat.color}`}>{cat.name}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-[#1eb2a6] text-white py-4 rounded-2xl font-bold shadow-lg mt-4">
        Registrar Residuo
      </button>
    </div>
  );
};

export default Register;