import React, { Fragment } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home/home";
import Login from "../pages/Login/loginPage";
import Cadastro from "../pages/Cadastro/cadastroPage";
import useAuth from "../hooks/useAuth";

const RotaPersonalizada = ({ Component }) => {

    const { logado } = useAuth();

    if(logado){
        return logado > 0 ? <Component /> : <Login />
    }
    
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