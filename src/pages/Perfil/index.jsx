import React from "react";
import Sidebar from "../../components/Sidebar";

const Perfil = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full shadow-lg mb-4"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600 mb-4">john.doe@example.com</p>
            <p className="text-center text-gray-700">
              Full Stack Developer with a passion for creating modern web
              applications. Experienced in React, Node.js, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
