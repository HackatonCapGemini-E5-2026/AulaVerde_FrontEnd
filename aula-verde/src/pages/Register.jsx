import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';
import api from '../api/axios';

// Iconos
const DocumentIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const BagIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);
const GlassIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);
const LeafIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const WarningIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
const TrashIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const Register = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();
  const today = new Date().toISOString().split('T')[0];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fechaRegistro: today,
    tipoResiduo: '',
    peso: '',
  });

  const categorias = [
    { name: 'Papel', Icon: DocumentIcon, color: 'text-blue-500', border: dark ? 'border-blue-800' : 'border-blue-200' },
    { name: 'Plástico/Metal', Icon: BagIcon, color: 'text-yellow-500', border: dark ? 'border-yellow-800' : 'border-yellow-200' },
    { name: 'Vidrio', Icon: GlassIcon, color: 'text-green-500', border: dark ? 'border-green-800' : 'border-green-200' },
    { name: 'Orgánico', Icon: LeafIcon, color: 'text-orange-500', border: dark ? 'border-orange-800' : 'border-orange-200' },
    { name: 'Peligrosos', Icon: WarningIcon, color: 'text-red-500', border: dark ? 'border-red-800' : 'border-red-200' },
    { name: 'General', Icon: TrashIcon, color: 'text-slate-400', border: dark ? 'border-slate-700' : 'border-slate-200' },
  ];

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setFormData((prev) => ({ ...prev, tipoResiduo: categoryName }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Actualizado al endpoint '/wastes' confirmado por Marie-Charlotte
      const response = await api.post('/wastes', {
        fecha: formData.fechaRegistro,
        categoria: formData.tipoResiduo,
        cantidad: parseFloat(formData.peso), // Convertimos a número para la DB
      });

      console.log('Registro exitoso:', response.data);
      alert('¡Residuo registrado con éxito!');
      
      setFormData({ fechaRegistro: today, tipoResiduo: '', peso: '' });
      setSelectedCategory('');
      setShowForm(false);
    } catch (error) {
      console.error('Error al guardar el registro:', error);
      alert('Error al conectar con el servidor. Verifica que el backend esté activo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`p-6 min-h-screen transition-colors duration-300 ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate(-1)} className="text-sm font-bold flex items-center gap-1">
          ‹ Volver
        </button>
        <DarkToggle />
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-bold">Registro</h1>
        <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          Selecciona una categoría de residuo para pesar
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat.name}
            onClick={() => handleCategorySelect(cat.name)}
            className={`p-4 rounded-3xl border-2 flex flex-col items-center gap-3 transition-all ${
              selectedCategory === cat.name 
                ? 'bg-[#1eb2a6] border-[#1eb2a6] text-white shadow-lg scale-105' 
                : `${cat.border} ${dark ? 'bg-slate-800' : 'bg-white'}`
            }`}
          >
            <cat.Icon className={`w-8 h-8 ${selectedCategory === cat.name ? 'text-white' : cat.color}`} />
            <span className="text-xs font-bold">{cat.name}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="w-full bg-[#1eb2a6] text-white py-4 rounded-2xl font-bold shadow-lg disabled:opacity-50"
        disabled={!selectedCategory}
      >
        {selectedCategory ? `Configurar ${selectedCategory}` : 'Selecciona una categoría'}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className={`mt-6 border rounded-2xl p-6 shadow-sm space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300 ${
            dark ? 'border-slate-700 bg-slate-800' : 'border-gray-200 bg-white'
          }`}
        >
          <div>
            <label className="block text-[10px] font-bold uppercase mb-1 opacity-60">Fecha del Registro</label>
            <input
              type="date"
              name="fechaRegistro"
              value={formData.fechaRegistro}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-xl border text-sm ${
                dark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-200'
              }`}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase mb-1 opacity-60">Categoría Seleccionada</label>
            <input
              type="text"
              readOnly
              value={formData.tipoResiduo}
              className={`w-full p-3 rounded-xl border text-sm font-bold ${
                dark ? 'bg-slate-900 border-slate-600' : 'bg-gray-100 border-gray-200'
              }`}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase mb-1 opacity-60">Peso del Residuo (kg)</label>
            <input
              type="number"
              step="0.01"
              name="peso"
              required
              placeholder="Ej: 3.5"
              value={formData.peso}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-xl border text-sm ${
                dark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-200'
              }`}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#0f8f84] text-white py-4 rounded-xl font-bold hover:opacity-95 transition-all disabled:bg-slate-500"
          >
            {loading ? 'Sincronizando...' : 'Guardar en Base de Datos'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Register;