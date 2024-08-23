import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

const CadastroFicha = () => {
  const [ficha, setFicha] = useState({
    personagem: "",
    antecedente: "",
    raca: "",
    tendencia: "",
    nomeJogador: "",
    classeArmadura: "",
    iniciativa: "",
    nivel: "",
    classe: "",
    pontosVida: "",
    forca: "",
    destreza: "",
    constituicao: "",
    inteligencia: "",
    sabedoria: "",
    carisma: "",
  });

  const handleChange = (e) => {
    setFicha({ ...ficha, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ficha de RPG criada:", ficha);
    // Adicione aqui a lógica para salvar a ficha no banco de dados
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow m-10 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Nova Ficha de RPG</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campos de Texto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t-2">
            {[
              { label: "Personagem", name: "personagem" },
              { label: "Antecedente", name: "antecedente" },
              { label: "Raça", name: "raca" },
              { label: "Tendência", name: "tendencia" },
              { label: "Nome do Jogador", name: "nomeJogador" },
              { label: "Classe", name: "classe" },
            ].map((campo, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-lg font-semibold text-gray-700 mb-2">
                  {campo.label}
                </label>
                <input
                  type="text"
                  name={campo.name}
                  value={ficha[campo.name]}
                  onChange={handleChange}
                  maxLength={40}
                  placeholder={`Digite ${campo.label}...`}
                  className="p-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                />
              </div>
            ))}
          </div>

          {/* Campos Numéricos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2 border-t-2">
            {[
              { label: "Classe de Armadura", name: "classeArmadura" },
              { label: "Iniciativa", name: "iniciativa" },
              { label: "Nível", name: "nivel" },
              { label: "Pontos de Vida", name: "pontosVida" },
            ].map((campo, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-lg font-semibold text-gray-700 mb-2">
                  {campo.label}
                </label>
                <input
                  type="number"
                  name={campo.name}
                  value={ficha[campo.name]}
                  onChange={handleChange}
                  placeholder={`Digite ${campo.label}...`}
                  className="p-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                />
              </div>
            ))}
          </div>
          {/* Campos atributos */}
          <div className="grid grid-cols-1 md:grid-cols-6 pt-2 border-t-2 ali">
            {[
              { label: "Força", name: "forca" },
              { label: "Destreza", name: "destreza" },
              { label: "Constituição", name: "constituicao" },
              { label: "Inteligência", name: "inteligencia" },
              { label: "Sabedoria", name: "sabedoria" },
              { label: "Carisma", name: "carisma" },
            ].map((campo, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">
                  {campo.label}
                </label>
                <input
                  type="number"
                  name={campo.name}
                  value={ficha[campo.name]}
                  onChange={handleChange}
                  placeholder={`0`}
                  min="0"
                  max="25"
                  className="p-2 border h-10 w-16 text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                />
              </div>
            ))}
          </div>


          <div className="flex justify-end pt-2 border-t-2 mt-6">
            <button
              type="submit"
              className="bg-green-600  text-white py-1 px-6 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Salvar 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroFicha;
