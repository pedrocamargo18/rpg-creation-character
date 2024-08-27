import React, { useState, useRef, useEffect } from "react";
import Button from "../Button";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const frases = [
    "Encontre grandes aventuras, faça amizades e aproveite o melhor de DnD.",
    "Fique de olhos abertos com bardos e ladinos",
    '"O melhor musculo é o Cerebro." O barbaro discorda.',
  ];

  const [currentPhrase, setCurrentPhrase] = useState(frases[0]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

  // Fechar o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800 py-10 w-full">
      <div className="relative flex items-center justify-end mr-10 space-x-4">
        <div className="flex-col">
          <div
            className="bg-purple-700 px-4 py-1 rounded-lg shadow-lg flex items-center space-x-2 cursor-pointer hover:bg-purple-600"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            <img
              alt="tania andrew"
              className="border border-gray-700 w-10 h-10 rounded-full cursor-pointer"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <button className="text-white">Meu Perfil</button>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
              ref={dropdownRef}
            >
              <ul className="py-2 text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Perfil
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Configurações
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sair
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto text-center mt-8">
        <img className="mx-auto w-24 h-24" src={Logo} alt="Logo" />
        <h2 className="text-4xl font-bold mb-4 text-white transition-transform transform hover:scale-110">
          Bem-vindo Viajante!
        </h2>
        <p className="text-xl mb-8 text-white transition-all duration-500 transform hover:-translate-x-4"> {currentPhrase}</p>
        <Button />
      </div>
    </header>
  );
};

export default Header;
