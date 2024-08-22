import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MySheets from "../pages/MySheets";


const AppRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
            <Route element = { <MySheets/> }  path="/my-sheets" exact />
            <Route element = { <Home/> }  path="/home" exact />
            <Route element = { <Login /> }  path="/" exact />
            </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;