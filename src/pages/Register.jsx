import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';

const DocumentIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 13h6M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const BagIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 9h12l-1 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9V7a3 3 0 1 1 6 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const GlassIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M7 4h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 11v6m-3 3h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const LeafIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M19.5 4.5c-5.5 0-11.5 2-14 8.5 0 0 3 5.5 9 5.5 4.5 0 7.5-4 7.5-9 0-1.8-.6-3.5-2.5-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 14c2-2 4.5-3.5 7.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const WarningIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 3 2.5 19a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9v5m0 3h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const TrashIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0 1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Register = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Residuo registrado:', formData);
    setFormData({ tipoResiduo: selectedCategory || '', peso: '' });
  };

  return (
    <div className={`p-6 min-h-screen transition-colors duration-300 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button onClick={() => navigate('/')} className={`text-2xl mr-4 ${dark ? 'text-slate-300' : 'text-gray-600'}`}>
            &#8249;
          </button>
          <h2 className={`text-xl font-bold ${dark ? 'text-white' : 'text-slate-800'}`}>Registrar Residuo</h2>
        </div>
        <DarkToggle />
      </div>

      <p className={`text-sm mb-6 text-center ${dark ? 'text-slate-400' : 'text-gray-500'}`}>
        Selecciona el tipo de residuo recolectado hoy en el aula.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {categorias.map((cat) => {
          const Icon = cat.Icon;
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => handleCategorySelect(cat.name)}
              className={`border ${cat.border} rounded-xl p-5 min-h-28 flex flex-col items-center justify-center shadow-sm transition-colors ${
                dark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-gray-50'
              } ${selectedCategory === cat.name ? 'ring-2 ring-[#1eb2a6]' : ''}`}
            >
              <Icon className={`w-8 h-8 mb-3 ${cat.color}`} />
              <span className={`text-base font-semibold leading-none text-center ${dark ? 'text-slate-100' : 'text-slate-800'}`}>
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="w-full bg-[#1eb2a6] text-white py-4 rounded-2xl font-bold shadow-lg mt-4"
      >
        Registrar Residuo
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className={`mt-6 border rounded-2xl p-4 shadow-sm space-y-4 ${dark ? 'border-slate-700 bg-slate-800' : 'border-gray-200 bg-white'}`}
        >
          <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-slate-800'}`}>Formulario de registro</h3>

          <div>
            <label htmlFor="tipoResiduo" className={`block text-sm font-medium mb-1 ${dark ? 'text-slate-200' : 'text-gray-700'}`}>
              Tipo de residuo
            </label>
            <select
              id="tipoResiduo"
              name="tipoResiduo"
              value={formData.tipoResiduo}
              onChange={handleInputChange}
              required
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1eb2a6] ${
                dark ? 'border-slate-600 bg-slate-900 text-white' : 'border-gray-300 bg-white text-slate-800'
              }`}
            >
              <option value="">Selecciona una opción</option>
              {categorias.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="peso" className={`block text-sm font-medium mb-1 ${dark ? 'text-slate-200' : 'text-gray-700'}`}>
              Peso (kg)
            </label>
            <input
              id="peso"
              name="peso"
              type="number"
              min="0"
              step="0.01"
              value={formData.peso}
              onChange={handleInputChange}
              placeholder="Ej: 2.50"
              required
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1eb2a6] ${
                dark ? 'border-slate-600 bg-slate-900 text-white placeholder:text-slate-400' : 'border-gray-300 bg-white text-slate-800'
              }`}
            />
          </div>

          <button type="submit" className="w-full bg-[#0f8f84] text-white py-3 rounded-xl font-semibold hover:opacity-95 transition-opacity">
            Guardar registro
          </button>
        </form>
      )}
    </div>
  );
};

export default Register;
