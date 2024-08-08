import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex flex-col w-full">
        <Header />
        <div className="p-5">
          <Card
            title="Personagem 1"
            description="Esta é a descrição do Card 3."
            imageUrl="https://via.placeholder.com/150"
            buttonText="Ver Mais"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
