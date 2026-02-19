import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';
import RegisterWasteButton from '../components/home/RegisterWasteButton';
import ResidueListButton from '../components/home/ResidueListButton';
import AlertsButton from '../components/home/AlertsButton';
import logo from '../logo/logo.png';

const Home = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen p-6 transition-colors duration-300 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="flex justify-end mb-4">
        <DarkToggle />
      </div>

      <div className="mt-2 mb-12">
        <img src={logo} alt="Logo AulaVerde Recicla" className="w-24 h-24 object-contain mb-4" />
        <h1 className={`text-3xl font-bold leading-tight transition-colors duration-300 ${dark ? 'text-white' : 'text-gray-800'}`}>
          Bienvenido a <br />
          <span className="text-[#1eb2a6]">AulaVerde!</span>
        </h1>
        <p className={`mt-4 text-sm max-w-[200px] transition-colors duration-300 ${dark ? 'text-slate-400' : 'text-gray-400'}`}>
          Gestiona los residuos de tu colegio de forma sostenible.
        </p>
      </div>
      <div className="space-y-4">
        <RegisterWasteButton onClick={() => navigate('/register')} />
        <ResidueListButton onClick={() => navigate('/categories')} />
        <AlertsButton onClick={() => navigate('/alerts')} />
      </div>
    </div>
  );
};

export default Home;
