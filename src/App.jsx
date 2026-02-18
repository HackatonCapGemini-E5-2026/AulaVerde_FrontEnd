import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Registro from './pages/Registro';
import Categories from './pages/Categories';
function App() {
  return (
    <Router>
      {/* Contenedor principal que simula un móvil */}
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl overflow-hidden font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Cambiamos el <div> por el componente real */}
          <Route path="/registro" element={<Registro />} /> 
          
          <Route path="/categories" element={<Categories />} />
          <Route path="/alertas" element={<div className="p-8"><h2>Pantalla de Alertas</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;