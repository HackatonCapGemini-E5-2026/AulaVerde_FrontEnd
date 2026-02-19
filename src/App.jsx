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
        <div className="min-h-screen bg-slate-100 flex justify-center px-4 py-6 md:px-8 md:py-10">
          <div className="w-full max-w-6xl min-h-[85vh] bg-white shadow-2xl overflow-hidden font-sans relative rounded-2xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/alerts" element={<Alerts />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
