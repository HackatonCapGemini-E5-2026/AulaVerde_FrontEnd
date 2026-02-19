import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterWasteButton from '../components/home/RegisterWasteButton';
import ResidueListButton from '../components/home/ResidueListButton';
import AlertsButton from '../components/home/AlertsButton';
import logo from '../logo/logo.png';
import api from '../api/axios';

const Home = () => {
  const navigate = useNavigate();

  // --- Lógica de Conexión con el Backend ---
  const [stats, setStats] = useState({ totalWeight: 0, activeAlerts: 0 });

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // En cuanto se ejecute esta línea, el import de 'api' se iluminará
        const response = await api.get('/stats'); 
        setStats(response.data);
      } catch (error) {
        // Si el backend aún no tiene el GET, usamos datos de prueba para no ver errores
        console.log("Esperando respuesta del servidor local...");
        setStats({ totalWeight: 0, activeAlerts: 0 });
      }
    };
    fetchHomeData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white p-6">
      <div className="mt-2 mb-12">
        <img src={logo} alt="Logo AulaVerde Recicla" className="w-20 h-20 object-contain mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
          Bienvenido a <br />
          <span className="text-[#1eb2a6]">AulaVerde!</span>
        </h1>
        <p className="text-gray-400 mt-4 text-sm max-w-[200px]">
          Gestiona los residuos de tu colegio de forma sostenible.
        </p>
      </div>

      {/* Aquí podrías mostrar stats.activeAlerts en el futuro si quisieras un contador */}
      <div className="space-y-4">
        <RegisterWasteButton onClick={() => navigate('/register')} />
        <ResidueListButton onClick={() => navigate('/categories')} />
        <AlertsButton onClick={() => navigate('/alerts')} />
      </div>
    </div>
  );
};

export default Home;