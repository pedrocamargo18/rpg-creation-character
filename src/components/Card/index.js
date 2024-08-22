import React from "react";

const Card = ({ title, imageUrl, buttonText, typeClick }) => {
  return (
    <div className="w-72 h-auto rounded overflow-hidden shadow-lg bg-white">
      {imageUrl && <img className="w-full h-80" src={imageUrl} alt={title} />}
      <div className="px-6 py-4 w-full justify-center">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2 w-full flex justify-center">
        <button className="bg-violet-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
