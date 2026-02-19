import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Categories from './pages/Categories';
import Alerts from './pages/Alerts';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="max-w-md mx-auto min-h-screen shadow-2xl overflow-hidden font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
    <Router>
      <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:items-center">
        <div className="w-full max-w-md min-h-screen sm:min-h-[85vh] bg-white shadow-2xl overflow-hidden font-sans relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/categories" element={<Categories />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;