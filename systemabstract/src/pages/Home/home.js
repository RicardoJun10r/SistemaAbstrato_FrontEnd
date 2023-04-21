import React, { useState } from "react";
import SideBar from "../../components/NavBar/sideBar";
import { homeStyle } from "./styleHome";
import DashBoard from "../DashBoard/dashboard";
import Produtos from "../Produtos/produtos";
import Clientes from "../Clientes/clientes";
import Transacoes from "../Transacoes/transacoes";

const Home = () => {

    const [index, setIndex] = useState(0);

    const handlePage = (index) => {
        switch (index) {
            case 0:
                return <DashBoard />;
            case 1:
                return <Produtos />;
            case 2:
                return <Clientes />;
            case 3:
                return <Transacoes />;
            default:
                return <DashBoard />;
        }
      }

    return(
        <div style={homeStyle}>
            <header>
                <SideBar index={setIndex}/>
            </header>
            <body>
                {handlePage(index)}
            </body>
        </div>
    )
}

export default Home;