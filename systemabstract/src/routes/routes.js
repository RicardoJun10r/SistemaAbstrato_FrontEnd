import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;