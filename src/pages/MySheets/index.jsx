import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const MySheets = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    api
      .get("/sheets/list", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "ngrok-skip-browser-warning": true,
        },
      })
      .then((response) => {
        setCharacters(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();
  const handleNewSheet = () => {
    navigate("/my-sheets/cadastro");
  };

  const renderCards = () => {
    return characters.map((character) => {
      return (
        <div className="p-5">
          <Card
            key={character.id}
            title={character.name}
            imageUrl={character.image ?? "https://via.placeholder.com/150"}
            buttonText="Ver Mais"
          />
        </div>
      );
    });
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full mt-5">
        <div className=" flex flex-row pb-5 justify-between border-gray-600 border-b-2 m-6 items-end">
          <h1 className="text-3xl font-bold text-white mb-2">Minhas Fichas</h1>
        </div>
          <button
            className="text-2xl w-64 h-12 rounded-lg justify-between shadow-lg text-white bg-blue-900 p-2 mx-6 hover:bg-blue-600"
            onClick={handleNewSheet}
          >
            Nova Ficha
          </button>
        <div className="flex flex-wrap justify-center">
          <div className="p-5">
            <Card
              key={"0"}
              title={"‎"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/grimorium-a0683.appspot.com/o/plusIcon.png?alt=media&token=069f298b-ce23-48e6-8015-d2158514bdec"
              }
              buttonText="Nova ficha"
              typeClick="1"
            />
          </div>
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default MySheets;
