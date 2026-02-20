import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllContainers } from "../services/containerService";
import { createWaste } from "../services/wasteService";

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

const categoryToEnum = {
  Papel: "PAPER",
  Plástico: "PLASTIC",
  Vidrio: "GLASS",
  Orgánico: "ORGANIC",
  Peligrosos: "HAZARDOUS",
  General: "GENERAL",
};

const Register = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [containers, setContainers] = useState([]);
  const [formData, setFormData] = useState({
    tipoResiduo: "",
    peso: "",
    fechaRegistro: today,
  });

  useEffect(() => {
    getAllContainers()
      .then((data) => setContainers(data))
      .catch((err) => console.error("Error cargando contenedores:", err));
  }, []);

  const categorias = [
    { name: "Papel", Icon: DocumentIcon, color: "text-blue-500", border: "border-blue-200" },
    { name: "Plástico/Metal", Icon: BagIcon, color: "text-yellow-500", border: "border-yellow-200" },
    { name: "Vidrio", Icon: GlassIcon, color: "text-green-500", border: "border-green-200" },
    { name: "Orgánico", Icon: LeafIcon, color: "text-orange-500", border: "border-orange-200" },
    { name: "Peligrosos", Icon: WarningIcon, color: "text-red-500", border: "border-red-200" },
    { name: "General", Icon: TrashIcon, color: "text-slate-400", border: "border-slate-200" },
  ];

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setFormData((prev) => ({ ...prev, tipoResiduo: categoryName }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = async () => {
    const enumCategory = categoryToEnum[formData.tipoResiduo];
    const container = containers.find((c) => c.category === enumCategory);

    if (!container) {
      alert("No se encontró el contenedor para esta categoría");
      return;
    }

    try {
      await createWaste(formData, container.id);
      setShowModal(false);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("❌ Error al registrar el residuo");
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate("/")} className="text-2xl mr-4">
          &#8249;
        </button>
        <h2 className="text-xl font-bold">Registrar Residuo</h2>
      </div>

      <p className="text-gray-500 text-sm mb-6 text-center">Selecciona el tipo de residuo recolectado hoy en el aula.</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {categorias.map((cat) => {
          const Icon = cat.Icon;
          return (
            <button key={cat.name} type="button" onClick={() => handleCategorySelect(cat.name)} className={`border ${cat.border} rounded-xl p-5 min-h-28 bg-white flex flex-col items-center justify-center shadow-sm hover:bg-gray-50 transition-colors ${selectedCategory === cat.name ? "ring-2 ring-[#1eb2a6]" : ""}`}>
              <Icon className={`w-8 h-8 mb-3 ${cat.color}`} />
              <span className="text-base font-semibold text-slate-800 leading-none text-center">{cat.name}</span>
            </button>
          );
        })}
      </div>

      <button type="button" onClick={() => setShowForm(true)} className="w-full bg-[#1eb2a6] text-white py-4 rounded-2xl font-bold shadow-lg mt-4">
        Selecciona categoria
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 border border-gray-200 rounded-2xl p-4 shadow-sm space-y-4">
          <h3 className="text-lg font-semibold">Formulario de registro</h3>

          <div>
            <label htmlFor="tipoResiduo" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de residuo
            </label>
            <select id="tipoResiduo" name="tipoResiduo" value={formData.tipoResiduo} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1eb2a6]">
              <option value="">Selecciona una opción</option>
              {categorias.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="peso" className="block text-sm font-medium text-gray-700 mb-1">
              Peso (kg)
            </label>
            <input id="peso" name="peso" type="number" min="0" step="0.01" value={formData.peso} onChange={handleInputChange} placeholder="Ej: 2.50" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1eb2a6]" />
          </div>

          <button type="submit" className="w-full bg-[#0f8f84] text-white py-3 rounded-xl font-semibold hover:opacity-95 transition-opacity">
            Guardar registro
          </button>
        </form>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-2xl p-6 w-full shadow-xl space-y-4">
            <h3 className="font-bold text-lg text-slate-800 text-center">¿Estás seguro de registrar este residuo?</h3>
            <p className="text-sm text-gray-500 text-center">
              <strong>{formData.peso} kg</strong> de <strong>{formData.tipoResiduo}</strong>
            </p>
            <div className="flex gap-3 pt-2">
              <button onClick={handleCancel} className="flex-1 border border-gray-300 text-gray-600 py-3 rounded-xl font-semibold">
                NO
              </button>
              <button onClick={handleConfirm} className="flex-1 bg-[#1eb2a6] text-white py-3 rounded-xl font-semibold">
                SÍ
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 px-6">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-2xl font-bold text-slate-800 text-center">Residuo registrado correctamente</h2>
          <p className="text-gray-400 text-sm mt-3 text-center">El residuo ha sido añadido al inventario</p>
        </div>
      )}
    </div>
  );
};

export default Register;
