import React from 'react';
import { useNavigate } from 'react-router-dom';

const Alerts = () => { // El nombre debe ser Alerts
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate('/')} className="text-2xl mr-4 text-gray-600">‹</button>
        <h1 className="text-2xl font-bold text-slate-800">Alertas</h1>
      </header>

      <div className="space-y-4">
        {/* Alerta de Urgencia */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl shadow-sm">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-red-800 text-sm">Vaciado Urgente</h4>
            <span className="text-[10px] text-red-400 font-bold uppercase">Ahora</span>
          </div>
          <p className="text-xs text-red-700 mt-1">El contenedor de Papel ha llegado al 100% de su capacidad.</p>
          <button className="mt-3 bg-red-500 text-white text-[10px] px-3 py-1 rounded-lg font-bold">VACIAR AHORA</button>
        </div>

        {/* Alerta Preventiva */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-xl shadow-sm">
          <h4 className="font-bold text-orange-800 text-sm">Nivel Alto</h4>
          <p className="text-xs text-orange-700 mt-1">El contenedor de Plásticos está al 85%. Se recomienda revisar pronto.</p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;