import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Rutas actualizadas a inglés para coincidir con App.jsx
  const menuOptions = [
    { 
      title: 'Registrar Residuos', 
      desc: 'Añade nuevos registros diarios', 
      path: '/register', 
      color: 'bg-[#1eb2a6]', 
      icon: '♻️' 
    },
    { 
      title: 'Listado de Residuos', 
      desc: 'Consulta tus registros entregados', 
      path: '/categories', 
      color: 'bg-[#43d39e]', 
      icon: '📋' 
    },
    { 
      title: 'Alertas', 
      desc: 'Notificaciones importantes', 
      path: '/alerts', 
      color: 'bg-[#fbbd23]', 
      icon: '🔔' 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white p-6">
      {/* Header con el Logo */}
      <div className="mt-10 mb-12">
        <div className="w-12 h-12 bg-[#1eb2a6] rounded-xl mb-6 flex items-center justify-center text-white font-bold text-2xl italic shadow-lg">
          A
        </div>
        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
          ¡Bienvenido a <br />
          <span className="text-[#1eb2a6]">AulaVerde!</span>
        </h1>
        <p className="text-gray-400 mt-4 text-sm max-w-[220px]">
          Gestiona los residuos de tu colegio de forma sostenible.
        </p>
      </div>

      {/* Listado de Opciones con padding para responsive */}
      <div className="space-y-5 px-1">
        {menuOptions.map((option, idx) => (
          <button
            key={idx}
            onClick={() => navigate(option.path)}
            className={`${option.color} w-full flex items-center p-5 rounded-[2rem] text-white shadow-lg transition-all hover:brightness-105 active:scale-95`}
          >
            <div className="bg-white/20 p-3 rounded-2xl mr-4 text-xl backdrop-blur-sm">
              {option.icon}
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold text-lg leading-tight">{option.title}</h3>
              <p className="text-xs opacity-90">{option.desc}</p>
            </div>
            <div className="text-xl font-light ml-2 opacity-70">›</div>
          </button>
        ))}
      </div>

      {/* Espacio extra para que la futura Navbar no tape el contenido */}
      <div className="h-20"></div>
    </div>
  );
};

export default Home;