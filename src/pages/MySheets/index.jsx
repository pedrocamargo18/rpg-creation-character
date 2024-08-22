import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";

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
      <div className="flex flex-col w-full justify-center">
        <div className="flex flex-wrap justify-center">
          <div className="p-5">
            <Card
              key={"0"}
              title={"‎"}
              imageUrl={
                "https://firebasestorage.googleapis.com/v0/b/grimorium-a0683.appspot.com/o/plusIcon.png?alt=media&token=069f298b-ce23-48e6-8015-d2158514bdec"
              }
              buttonText="Nova ficha"
            />
          </div>
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default MySheets;
