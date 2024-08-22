import React, { useState } from "react";
import "./styles.css";

const DiceRoller = () => {
  const [isRolling, setIsRolling] = useState(false);
  const [currentFace, setCurrentFace] = useState(1);

  const rollDice = ({handleClick}) => {
    setIsRolling(true);
    const newFace = Math.floor(Math.random() * 20) + 1;

    setTimeout(() => {
      setCurrentFace(newFace);
      setIsRolling(false);
      if (handleClick) {
        handleClick(newFace);
      }
    }, 1000); // Tempo de rotação antes de exibir o resultado
  };

  // Lógica para determinar a rotação baseada no número sorteado
  const getRotation = (face) => {
    const rotations = [
      "rotateX(0deg) rotateY(0deg)",
      "rotateX(-90deg) rotateY(0deg)",
      "rotateX(90deg) rotateY(0deg)",
      "rotateX(0deg) rotateY(90deg)",
      "rotateX(0deg) rotateY(-90deg)",
      "rotateX(180deg) rotateY(0deg)",
    ];
    return rotations[face - 1] || "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Rolar D20</h2>
      <button
        onClick={rollDice}
        disabled={isRolling}
        style={{ marginTop: "10px" }}
      >
        {isRolling ? "Rolando..." : "Rolar"}
      </button>
      <div className="dice-container">
        <div className="dice" style={{ transform: getRotation(currentFace) }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`face face${i + 1}`}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiceRoller;
