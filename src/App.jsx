import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Categories from './pages/Categories';
import Alerts from './pages/Alerts';
import { ThemeProvider, useTheme } from './ThemeContext';

function AppShell() {
  const { dark } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('theme-dark', dark);
  }, [dark]);

  return (
    <Router>
      <div
        className={`max-w-md mx-auto min-h-screen shadow-2xl overflow-hidden font-sans ${
          dark ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
        }`}
      >
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

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

export default App;