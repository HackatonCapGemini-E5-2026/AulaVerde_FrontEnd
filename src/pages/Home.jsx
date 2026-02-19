import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';
import RegisterWasteButton from '../components/home/RegisterWasteButton';
import ResidueListButton from '../components/home/ResidueListButton';
import AlertsButton from '../components/home/AlertsButton';

const Home = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();

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
    <div className={`flex flex-col min-h-screen p-6 transition-colors duration-300 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Dark mode toggle top right */}
      <div className="flex justify-end">
        <DarkToggle />
      </div>

      {/* Header */}
      <div className="mt-6 mb-12">
        <div className="w-12 h-12 bg-[#1eb2a6] rounded-xl mb-6 flex items-center justify-center text-white font-bold text-2xl italic">
          A
        </div>
        <h1 className={`text-3xl font-bold leading-tight transition-colors duration-300 ${dark ? 'text-white' : 'text-gray-800'}`}>
          ¡Bienvenido a <br />
          <span className="text-[#1eb2a6]">AulaVerde!</span>
        </h1>
        <p className={`mt-4 text-sm max-w-[200px] transition-colors duration-300 ${dark ? 'text-slate-400' : 'text-gray-400'}`}>
  return (
    <div className="flex flex-col min-h-screen bg-white p-6">
      <div className="mt-10 mb-12">
        <div className="w-12 h-12 bg-[#1eb2a6] rounded-xl mb-6 flex items-center justify-center text-white font-bold text-2xl italic shadow-lg">
          A
        </div>
        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
          Bienvenido a <br />
          <span className="text-[#1eb2a6]">AulaVerde!</span>
        </h1>
        <p className="text-gray-400 mt-4 text-sm max-w-[220px]">
          Gestiona los residuos de tu colegio de forma sostenible.
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <RegisterWasteButton onClick={() => navigate('/register')} />
        <ResidueListButton onClick={() => navigate('/categories')} />
        <AlertsButton onClick={() => navigate('/alerts')} />
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Home;
