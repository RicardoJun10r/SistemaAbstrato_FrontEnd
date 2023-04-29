import React, { Fragment } from "react";
import { Route, Routes, BrowserRouter, redirect } from "react-router-dom";

import Home from "../pages/Home/home";
import Login from "../pages/Login/loginPage";
import Cadastro from "../pages/Cadastro/cadastroPage";
import useAuth from "../hooks/useAuth";

const RotaPersonalizada = ({ Item }) => {

    const { logado } = useAuth();

    return logado > 0 ? <Item /> : <Login />
    
}

const Rotas = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route element={<Login />} path='/login'/>
                    <Route exact element={<RotaPersonalizada Component={Home}/>} path='/home'/>
                    <Route exact element={<Cadastro />} path='/cadastro'/>
                    <Route element={<Login />} path='*'/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default Rotas;