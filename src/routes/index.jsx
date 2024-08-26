import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MySheets from "../pages/MySheets";
import DiceRoller from "../components/DiceRoller";
import CadastroFicha from "../pages/CadastroFicha";
import Perfil from "../pages/Perfil";


const AppRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
            <Route element = { <Login /> }  path="/" exact />
            <Route element = { <Home/> }  path="/home" exact />
            <Route element = { <MySheets/> }  path="/my-sheets" exact />
            <Route element = { <CadastroFicha /> }  path="/my-sheets/cadastro" exact />
            <Route element = { <Perfil /> }  path="/perfil" exact />
            </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;