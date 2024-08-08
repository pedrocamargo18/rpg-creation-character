import React from "react";
import Button from "../Button";

const Header = () => {
  return (
    <div className="bg-gray-900 py-20 w-full h-1/2">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4 ">Bem-vindo à Nossa Página</h2>
        <p className="text-xl mb-8">Crie seu personagem.</p>
        <Button />
      </div>
    </div>
  );
};

export default Header;
