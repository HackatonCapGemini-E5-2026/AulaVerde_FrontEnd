import React from 'react';

const RegisterWasteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#1eb2a6] w-full flex items-center p-5 rounded-[2rem] text-white shadow-lg transition-transform active:scale-95"
    >
      <div className="bg-white/20 p-3 rounded-2xl mr-4 text-xl">♻️</div>
      <div className="flex-1 text-left">
        <h3 className="font-bold text-lg leading-tight">Registrar Residuos</h3>
        <p className="text-xs opacity-80">Añade nuevos registros diarios</p>
      </div>
      <div className="text-xl font-light ml-2">›</div>
    </button>
  );
};

export default RegisterWasteButton;
