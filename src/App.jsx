import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Registro from './pages/Register';
import Categories from './pages/Categories';
import Alerts from './pages/Alerts';
function App() {
  return (
    <Router>
      {/* Contenedor principal que simula un móvil */}
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl overflow-hidden font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Cambiamos el <div> por el componente real */}
          <Route path="/registro" element={<Register />} /> 
          
          <Route path="/categories" element={<Categories />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;