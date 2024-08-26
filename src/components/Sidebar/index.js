import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } bg-gray-950 h-screen p-4  z-50`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1
          className={`text-white text-xl font-bold ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Grimorium
        </h1>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          {isOpen ? "◀" : "▶"}
        </button>
      </div>
      <ul className="flex flex-col space-y-4">
        <li
          className="flex items-center text-white hover:bg-gray-700 p-2 rounded cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <FaHome />
          <span
            className={`ml-4 text-sm font-semibold ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Home
          </span>
        </li>
        <li
          className="flex items-center text-white hover:bg-gray-700 p-2 rounded cursor-pointer"
          onClick={() => navigate("/perfil")}
        >
          <FaUser />
          <span
            className={`ml-4 text-sm font-semibold ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Perfil
          </span>
        </li>
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded cursor-pointer">
          <FaUsers />
          <span
            className={`ml-4 text-sm font-semibold ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Aventuras
          </span>
        </li>
        <li
          className="flex items-center  text-white hover:bg-gray-700 p-2 rounded cursor-pointer"
          onClick={() => navigate("/my-sheets")}
        >
          <FaBookOpen />
          <span
            className={`ml-4  text-sm font-semibold ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Minhas Fichas
          </span>
        </li>
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded cursor-pointer">
          <FaCog />
          <span
            className={`ml-4  text-sm font-semibold ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Configs
          </span>
        </li>
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded cursor-pointer">
          <FaSignOutAlt />
          <span
            className={`ml-4  text-sm font-semibold ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
