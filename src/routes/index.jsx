import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";


const AppRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
            <Route element = { <Home/> }  path="/" exact />
            </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;