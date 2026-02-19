import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';

const DocumentIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 13h6M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const BagIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 9h12l-1 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9V7a3 3 0 1 1 6 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const GlassIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M7 4h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 11v6m-3 3h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const LeafIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M19.5 4.5c-5.5 0-11.5 2-14 8.5 0 0 3 5.5 9 5.5 4.5 0 7.5-4 7.5-9 0-1.8-.6-3.5-2.5-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 14c2-2 4.5-3.5 7.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const WarningIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 3 2.5 19a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9v5m0 3h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const TrashIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0 1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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