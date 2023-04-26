import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/loginPage";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
                <Route element={<Login />} path='/login'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;