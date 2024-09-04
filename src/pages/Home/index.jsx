import React, { Suspense, useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import api from "../../services/api";
import DiceRoller from "../../components/DiceRoller";
import Loading from "../../components/Loading";

const Home = () => {
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
      });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
    <>
    {loading && <Loading />}
    <Suspense fallback={<Loading />}>
        <div className="flex ">
          <Sidebar />
          <div className=" flex flex-col w-full">
            <Header />
            <div className="bg-indigo-900 w-full h-full">
              <div className="flex justify-center items-center">
                <DiceRoller />
              </div>
              <h1 className="m-5 text-white font-semibold text-xl ">
                Meus Personagens
              </h1>
              <div className="grid grid-cols-4">{renderCards()}</div>
            </div>
          </div>
        </div>
    </Suspense>
    </>
  );
};

export default Home;
