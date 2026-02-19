import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterWasteButton from '../components/home/RegisterWasteButton';
import ResidueListButton from '../components/home/ResidueListButton';
import AlertsButton from '../components/home/AlertsButton';

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
        <ResidueListButton onClick={() => navigate('/categories')} />
        <AlertsButton onClick={() => navigate('/alerts')} />
      </div>
    </div>
  );
};

export default Home;
