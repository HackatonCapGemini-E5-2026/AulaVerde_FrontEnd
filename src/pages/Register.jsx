import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  const categorias = [
    { name: 'Papel', icon: '📄', color: 'text-blue-500', border: 'border-blue-200' },
    { name: 'Plástico/Metal', icon: '🧴', color: 'text-yellow-500', border: 'border-yellow-200' },
    { name: 'Vidrio', icon: '🍾', color: 'text-green-500', border: 'border-green-200' },
    { name: 'Orgánico', icon: '🍎', color: 'text-orange-500', border: 'border-orange-200' },
    { name: 'Peligrosos', icon: '⚠️', color: 'text-red-500', border: 'border-red-200' },
    { name: 'General', icon: '🗑️', color: 'text-gray-500', border: 'border-gray-200' },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/')} className="text-2xl mr-4">‹</button>
        <h2 className="text-xl font-bold">Registrar Residuo</h2>
      </div>

      <p className="text-gray-500 text-sm mb-6 text-center">
        Selecciona el tipo de residuo recolectado hoy en el aula.
      </p>

      {/* Grid de Categorías */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {categorias.map((cat, idx) => (
          <div key={idx} className={`border ${cat.border} rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:bg-gray-50 cursor-pointer transition-colors`}>
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