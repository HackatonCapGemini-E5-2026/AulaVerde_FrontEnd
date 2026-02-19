import React, { useState, useEffect } from 'react'; // Añadimos hooks
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; // Importamos la instancia de axios

const Categories = () => {
  const navigate = useNavigate();
  
  // 1. Estado para los datos de PostgreSQL
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Carga de datos real al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ajustar el endpoint según lo que hayan creado tus compañeros
        const response = await api.get('/categories/stats'); 
        setCategoriesData(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        // Fallback: datos por defecto si falla la conexión
        setCategoriesData([
          { name: 'Papel', progress: 0, color: 'bg-blue-500', icon: '📄' },
          { name: 'General', progress: 0, color: 'bg-gray-400', icon: '🗑️' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Cabecera idéntica a la tuya */}
      <header className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate('/')} className={`text-xl ${dark ? 'text-slate-300' : 'text-gray-600'}`}>‹</button>
          <span className="text-xs font-bold text-[#1eb2a6]">AULAVERDE</span>
          <DarkToggle />
        </div>
        <h1 className={`text-2xl font-bold transition-colors duration-300 ${dark ? 'text-white' : 'text-slate-800'}`}>Categorías</h1>
        <p className={`text-xs ${dark ? 'text-slate-400' : 'text-gray-400'}`}>Monitoreo de residuos en tiempo real</p>
      </header>

<<<<<<< HEAD
      {/* Listado de Progreso Dinámico */}
      <div className="space-y-6">
        {loading ? (
          <p className="text-center text-gray-500 text-sm italic">Cargando datos de la planta...</p>
        ) : (
          categoriesData.map((cat, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div className="text-2xl w-8 text-center">{cat.icon || '📦'}</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 items-end">
                  <span className="text-sm font-semibold text-gray-700">{cat.name}</span>
                  <span className="text-xs font-bold text-gray-500">{cat.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`${cat.color || 'bg-green-500'} h-2 rounded-full transition-all duration-700`} 
                    style={{ width: `${cat.progress}%` }}
                  ></div>
                </div>
=======
      
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Buscar categoría..."
          className={`w-full border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#1eb2a6] outline-none transition-colors duration-300
            ${dark ? 'bg-slate-800 text-white placeholder-slate-500' : 'bg-gray-100 text-gray-800'}`}
        />
        <span className="absolute left-3 top-3 text-gray-400 italic">🔍</span>
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
>>>>>>> 5ec22691ad0ceee5ffbeeae8a7c57bb51fdb6070
              </div>
              <span className="text-gray-300 text-lg">›</span>
            </div>
<<<<<<< HEAD
          ))
        )}
      </div>

      {/* Alertas Recientes (Aquí podrías hacer lo mismo para que la alerta sea real) */}
=======
            <span className={`text-lg ${dark ? 'text-slate-600' : 'text-gray-300'}`}>›</span>
          </div>
        ))}
      </div>

      
>>>>>>> 5ec22691ad0ceee5ffbeeae8a7c57bb51fdb6070
      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className={`font-bold text-sm ${dark ? 'text-slate-200' : 'text-gray-800'}`}>Alertas Recientes</h3>
          <button onClick={() => navigate('/alerts')} className="text-[#1eb2a6] text-xs font-bold">Ver todo</button>
        </div>
<<<<<<< HEAD
        {/* Solo mostrar si hay una categoría al 100% */}
        {categoriesData.some(c => c.progress >= 90) && (
          <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-start space-x-3">
            <span className="text-red-500">⚠️</span>
            <p className="text-[11px] text-red-700 leading-tight">
              <strong>Atención:</strong> Hay contenedores críticos que necesitan vaciado.
            </p>
          </div>
        )}
=======
        <div className={`border p-4 rounded-2xl flex items-start space-x-3 ${dark ? 'bg-red-950 border-red-900' : 'bg-red-50 border-red-100'}`}>
          <span className="text-red-500">⚠️</span>
          <p className={`text-[11px] leading-tight ${dark ? 'text-red-300' : 'text-red-700'}`}>
            <strong>Papel:</strong> El contenedor está al 100% y necesita vaciado pronto.
          </p>
        </div>
>>>>>>> 5ec22691ad0ceee5ffbeeae8a7c57bb51fdb6070
      </div>
    </div>
  );
};

export default Categories;