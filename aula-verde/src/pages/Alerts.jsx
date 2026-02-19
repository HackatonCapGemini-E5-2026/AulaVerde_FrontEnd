import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';
import api from '../api/axios'; 

const Alerts = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();
  
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlerts = async () => {
    try {
      setLoading(true);
      
      const response = await api.get('/alerts');
      setAlerts(response.data);
    } catch (error) {
      console.error("Error fetching alerts:", error);
     
      setAlerts([
        { id: 1, name: 'Papel', progress: 98, time: 'Ahora' },
        { id: 2, name: 'Plásticos', progress: 85, time: '12:45' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  const handleEmptyContainer = async (containerId) => {
    try {
      
      await api.patch(`/container/${containerId}`, {
        capacidad: 0
      });
      
      alert('¡Contenedor vaciado con éxito!');
      
      fetchAlerts();
    } catch (error) {
      console.error('Error al vaciar el contenedor:', error);
      alert('No se pudo procesar el vaciado en el servidor.');
    }
  };

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
        {loading ? (
          <p className="text-center text-gray-500 text-sm italic">Sincronizando con los sensores...</p>
        ) : alerts.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">No hay alertas activas en este momento. ✨</p>
        ) : (
          alerts.map((alert, idx) => {
            const isCritical = alert.progress >= 95;
            
            return (
              <div 
                key={alert.id || idx}
                className={`border-l-4 p-4 rounded-r-xl shadow-sm transition-all ${
                  isCritical 
                    ? `border-red-500 ${dark ? 'bg-red-950' : 'bg-red-50'}` 
                    : `border-orange-400 ${dark ? 'bg-orange-950' : 'bg-orange-50'}`
                }`}
              >
                <div className="flex justify-between items-start">
                  <h4 className={`font-bold text-sm ${
                    isCritical 
                      ? (dark ? 'text-red-300' : 'text-red-800') 
                      : (dark ? 'text-orange-300' : 'text-orange-800')
                  }`}>
                    {isCritical ? 'Vaciado Urgente' : 'Nivel Alto'}
                  </h4>
                  <span className={`text-[10px] font-bold uppercase ${
                    isCritical 
                      ? (dark ? 'text-red-500' : 'text-red-400') 
                      : (dark ? 'text-orange-500' : 'text-orange-400')
                  }`}>
                    {alert.time || 'Ahora'}
                  </span>
                </div>
                
                <p className={`text-xs mt-1 ${
                  isCritical 
                    ? (dark ? 'text-red-400' : 'text-red-700') 
                    : (dark ? 'text-orange-400' : 'text-orange-700')
                }`}>
                  El contenedor de <strong>{alert.name}</strong> está al {alert.progress}%. {isCritical ? 'Requiere atención inmediata.' : 'Se recomienda revisar pronto.'}
                </p>
                
                {/}
                <button 
                  onClick={() => handleEmptyContainer(alert.id)}
                  className={`mt-3 text-white text-[10px] px-3 py-1 rounded-lg font-bold transition-all hover:opacity-90 ${
                    isCritical ? 'bg-red-500' : 'bg-orange-500'
                  }`}
                >
                  VACIAR AHORA
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Alerts;