import React from "react";
import Button from "../Button";

const Header = () => {
  return (
    <div className="bg-gray-900 py-10 w-full">
      <div className="flex justify-end mr-10 ">
        <img
          alt="tania andrew"
          className="border  flex-end border-gray-900 p-0.5 w-16 h-16 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
        <h1 className="text-white text-center">Meu Perfil</h1>
      </div>
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4 ">Bem-vindo à Nossa Página</h2>
        <p className="text-xl mb-8">Crie seu personagem.</p>
        <Button />
      </div>
    </div>
  );
};

export default Header;
