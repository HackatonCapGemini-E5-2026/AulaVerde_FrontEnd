import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterWasteButton from '../components/home/RegisterWasteButton';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white p-6">
      {/* Header con el Logo */}
      <div className="mt-10 mb-12">
        <div className="w-12 h-12 bg-[#1eb2a6] rounded-xl mb-6 flex items-center justify-center text-white font-bold text-2xl italic">
          A
        </div>
        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
          Bienvenido a <br />
          <span className="text-[#1eb2a6]">AulaVerde!</span>
        </h1>
        <p className="text-gray-400 mt-4 text-sm max-w-[200px]">
          Gestiona los residuos de tu colegio de forma sostenible.
        </p>
      </div>

      {/* Botones / Contenedores */}
      <div className="space-y-4">
        <RegisterWasteButton onClick={() => navigate('/register')} />

        <button
          onClick={() => navigate('/categories')}
          className="bg-[#43d39e] w-full flex items-center p-5 rounded-[2rem] text-white shadow-lg transition-transform active:scale-95"
        >
          <div className="bg-white/20 p-3 rounded-2xl mr-4 text-xl">📋</div>
          <div className="flex-1 text-left">
            <h3 className="font-bold text-lg leading-tight">Listado de Residuos</h3>
            <p className="text-xs opacity-80">Consulta tus registros entregados</p>
          </div>
          <div className="text-xl font-light ml-2">›</div>
        </button>

        <button
          onClick={() => navigate('/alerts')}
          className="bg-[#fbbd23] w-full flex items-center p-5 rounded-[2rem] text-white shadow-lg transition-transform active:scale-95"
        >
          <div className="bg-white/20 p-3 rounded-2xl mr-4 text-xl">🔔</div>
          <div className="flex-1 text-left">
            <h3 className="font-bold text-lg leading-tight">Alertas</h3>
            <p className="text-xs opacity-80">Notificaciones importantes</p>
          </div>
          <div className="text-xl font-light ml-2">›</div>
        </button>
      </div>
    </div>
  );
};

export default Home;
