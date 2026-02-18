import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'; // Asegúrate de que apunte al nuevo nombre del archivo
import Categories from './pages/Categories';
import Alerts from './pages/Alerts';

function App() {
  return (
    <Router>
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl overflow-hidden font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/categories" element={<Categories />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;