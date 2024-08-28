import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";

const Header = () => {

  const frases = [
    "Encontre grandes aventuras, faça amizades e aproveite o melhor de DnD.",
    "Fique de olhos abertos com bardos e ladinos",
    '"O melhor musculo é o Cerebro." O barbaro discorda.',
  ];

  const [currentPhrase, setCurrentPhrase] = useState(frases[0]);

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    return frases[randomIndex];
  };


    // Troca a frase com transição
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPhrase(getRandomPhrase());
      }, 5000); // Troca a frase a cada 5 segundos
      return () => clearInterval(interval);
    }, []);


  return (
    <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800 py-5 h-64 w-full">
      <div className="relative flex items-center justify-end mr-10 space-x-4">
        <div className="flex-col">
        
        </div>
      </div>

      <div className="text-center ">
        <img className="mx-auto w-24 h-24" src={Logo} alt="Logo" />
        <h2 className="text-4xl font-bold mb-4 text-white transition-transform transform hover:scale-90">
          Bem-vindo Viajante!
        </h2>
        <p className="text-xl mb-8 text-white transition-all duration-500 transform hover:-translate-x-4"> {currentPhrase}</p>
      </div>
    </div>
  );
};

export default Header;
