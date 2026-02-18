import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* Contenedor principal que simula un móvil */}
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl overflow-hidden font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<div className="p-8"><h2>Pantalla de Registro</h2></div>} />
          <Route path="/consulta" element={<div className="p-8"><h2>Pantalla de Consulta</h2></div>} />
          <Route path="/alertas" element={<div className="p-8"><h2>Pantalla de Alertas</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;