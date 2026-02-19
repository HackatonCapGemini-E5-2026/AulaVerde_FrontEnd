import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import DarkToggle from '../components/DarkToggle';
import api from '../api/axios'; //

// ... (Tus componentes de iconos DocumentIcon, BagIcon, etc. se mantienen igual)

const Register = () => {
  const navigate = useNavigate();
  const { dark } = useTheme();
  const today = new Date().toISOString().split('T')[0];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para feedback de carga
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

  // --- Lógica de envío al Backend ---
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Ajusta '/registros' al endpoint real que usen tus compañeros
      const response = await api.post('/registros', {
        fecha: formData.fechaRegistro,
        categoria: formData.tipoResiduo,
        cantidad: parseFloat(formData.peso),
      });

      console.log('Respuesta del servidor:', response.data);
      alert('¡Residuo registrado con éxito en la base de datos!');
      
      // Limpiar formulario tras éxito
      setFormData({ fechaRegistro: today, tipoResiduo: '', peso: '' });
      setSelectedCategory('');
      setShowForm(false);
    } catch (error) {
      console.error('Error al guardar el registro:', error);
      alert('Hubo un error al conectar con el servidor. Revisa la consola.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`p-6 min-h-screen transition-colors duration-300 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      {/* ... (Cabecera y Grid de categorías igual a tu código original) */}

      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="w-full bg-[#1eb2a6] text-white py-4 rounded-2xl font-bold shadow-lg mt-4 disabled:opacity-50"
        disabled={!selectedCategory}
      >
        {selectedCategory ? `Registrar ${selectedCategory}` : 'Selecciona una categoría'}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className={`mt-6 border rounded-2xl p-4 shadow-sm space-y-4 ${dark ? 'border-slate-700 bg-slate-800' : 'border-gray-200 bg-white'}`}
        >
          {/* ... (Inputs de fecha, tipo y peso igual a tu código) */}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#0f8f84] text-white py-3 rounded-xl font-semibold hover:opacity-95 transition-opacity disabled:bg-gray-400"
          >
            {loading ? 'Enviando...' : 'Guardar registro'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Register;