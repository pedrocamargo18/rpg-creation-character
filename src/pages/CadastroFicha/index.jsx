import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
// import DiceRoller from "../../components/DiceRoller";


//campos estaticos, ideia é puxar do bd
const CadastroFicha = () => {
  const campos = [
    "Personagem",
    "Antecedente",
    "Raça",
    "Tendencia",
    "Nome do Jogador",
    "Classe Armadura",
    "Iniciativa",
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="justify-center m-10 bg-white ">
        <div className="m-5 text-black font-bold text-3xl">Nova Ficha</div>
        {/* <DiceRoller /> */}
        <div className="m-2 flex flex-row shadow-lg">
          {campos &&
            campos.map((x) => (
              <div className="m-2 " key={x.campo}>
                <label className=" font-semibold mt-1">{x}</label>
                <input
                className=" font-sans text-xl"
                  maxLength={40}
                  value={x.campo}
                  placeholder={`Digite ${x} ...`} 
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CadastroFicha;
