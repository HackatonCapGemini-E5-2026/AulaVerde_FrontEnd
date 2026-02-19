function App() {
  return (
    <Router>
      {/* Contenedor EXTERIOR: Ocupa toda la pantalla y centra el contenido */}
      <div className="min-h-screen bg-slate-100 flex justify-center items-start sm:items-center">
        
        {/* Contenedor INTERIOR (El "Móvil"): Ancho máximo limitado */}
        <div className="w-full max-w-md min-h-screen sm:min-h-[85vh] bg-white shadow-2xl overflow-hidden font-sans relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/categories" element={<Categories />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;