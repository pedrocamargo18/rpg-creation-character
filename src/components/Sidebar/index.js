import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaUsers,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("/home");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } bg-gray-950 h-screen p-4 transition-all duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1
          className={`text-white text-xl font-bold transition-opacity duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Grimorium
        </h1>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
      <ul className="flex flex-col space-y-4 flex-grow">
        <li
          className={`flex items-center text-white p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-200 ${
            activeItem === "/home" ? "bg-gray-800" : ""
          }`}
          onClick={() => handleNavigate("/home")}
        >
          <Tooltip title="Home" placement="right" arrow disableHoverListener={isOpen}>
            <FaHome />
          </Tooltip>
          <span
            className={`ml-4 text-sm font-semibold transition-opacity duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Home
          </span>
        </li>
        <li
          className={`flex items-center text-white p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-200 ${
            activeItem === "/aventuras" ? "bg-gray-800" : ""
          }`}
          onClick={() => handleNavigate("/aventuras")}
        >
          <Tooltip title="Aventuras" placement="right" arrow disableHoverListener={isOpen}>
            <FaUsers />
          </Tooltip>
          <span
            className={`ml-4 text-sm font-semibold transition-opacity duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Aventuras
          </span>
        </li>
        <li
          className={`flex items-center text-white p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-200 ${
            activeItem === "/my-sheets" ? "bg-gray-800" : ""
          }`}
          onClick={() => handleNavigate("/my-sheets")}
        >
          <Tooltip title="Minhas Fichas" placement="right" arrow disableHoverListener={isOpen}>
            <FaBookOpen />
          </Tooltip>
          <span
            className={`ml-4 text-sm font-semibold transition-opacity duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Minhas Fichas
          </span>
        </li>
        <li
          className={`flex items-center text-white p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-200 ${
            activeItem === "/configs" ? "bg-gray-800" : ""
          }`}
          onClick={() => handleNavigate("/configs")}
        >
          <Tooltip title="Configs" placement="right" arrow disableHoverListener={isOpen}>
            <FaCog />
          </Tooltip>
          <span
            className={`ml-4 text-sm font-semibold transition-opacity duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Configs
          </span>
        </li>
        <li
          className="flex items-center text-white p-2 rounded cursor-pointer hover:bg-red-600 transition-colors duration-200"
          onClick={() => handleNavigate("/logout")}
        >
          <Tooltip title="Logout" placement="right" arrow disableHoverListener={isOpen}>
            <FaSignOutAlt />
          </Tooltip>
          <span
            className={`ml-4 text-sm font-semibold transition-opacity duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Logout
          </span>
        </li>
      </ul>
      {isOpen && (
        <div className="mt-auto">
          <div className="flex items-center p-2 bg-indigo-800 rounded-full cursor-pointer ">
            <img
              alt="profile"
              className="w-8 h-8 rounded-full"
              src="https://via.placeholder.com/150"
            />
            <span onClick={() => handleNavigate("/perfil")} className="ml-4 text-white text-md font-semibold">Meu Perfil</span>
          </div>
          <div className="text-white text-xs text-center mt-2">
            <p>Versão 1.0.0</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
