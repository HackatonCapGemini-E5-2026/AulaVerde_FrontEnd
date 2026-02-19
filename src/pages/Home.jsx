import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';
import RegisterWasteButton from '../components/home/RegisterWasteButton';
import ResidueListButton from '../components/home/ResidueListButton';

const Home = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();

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
          Gestiona los residuos de tu colegio de forma sostenible.
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <RegisterWasteButton onClick={() => navigate('/register')} />
        <ResidueListButton onClick={() => navigate('/categories')} />

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
