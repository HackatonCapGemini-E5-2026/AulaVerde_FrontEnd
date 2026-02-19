import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';

const Alerts = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();

  return (
    <div className={`p-6 min-h-screen transition-colors duration-300 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <button onClick={() => navigate('/')} className={`text-2xl mr-4 ${dark ? 'text-slate-300' : 'text-gray-600'}`}>‹</button>
          <h1 className={`text-2xl font-bold transition-colors duration-300 ${dark ? 'text-white' : 'text-slate-800'}`}>Alertas</h1>
        </div>
        <DarkToggle />
      </header>

      <div className="space-y-4">
        
        <div className={`border-l-4 border-red-500 p-4 rounded-r-xl shadow-sm ${dark ? 'bg-red-950' : 'bg-red-50'}`}>
          <div className="flex justify-between items-start">
            <h4 className={`font-bold text-sm ${dark ? 'text-red-300' : 'text-red-800'}`}>Vaciado Urgente</h4>
            <span className={`text-[10px] font-bold uppercase ${dark ? 'text-red-500' : 'text-red-400'}`}>Ahora</span>
          </div>
          <p className={`text-xs mt-1 ${dark ? 'text-red-400' : 'text-red-700'}`}>El contenedor de Papel ha llegado al 100% de su capacidad.</p>
          <button className="mt-3 bg-red-500 text-white text-[10px] px-3 py-1 rounded-lg font-bold">VACIAR AHORA</button>
        </div>

        
        <div className={`border-l-4 border-orange-400 p-4 rounded-r-xl shadow-sm ${dark ? 'bg-orange-950' : 'bg-orange-50'}`}>
          <h4 className={`font-bold text-sm ${dark ? 'text-orange-300' : 'text-orange-800'}`}>Nivel Alto</h4>
          <p className={`text-xs mt-1 ${dark ? 'text-orange-400' : 'text-orange-700'}`}>El contenedor de Plásticos está al 85%. Se recomienda revisar pronto.</p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;