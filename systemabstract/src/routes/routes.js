import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/loginPage";
import Cadastro from "../pages/Cadastro/cadastroPage";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
                <Route element={<Login />} path='/login'/>
                <Route element={<Cadastro />} path='/cadastro'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;