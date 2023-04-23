import React, { useState } from "react";
import SideBar from "../../components/NavBar/sideBar";
import { homeStyle } from "./styleHome";
import DashBoard from "../DashBoard/dashboard";
import Estoque from "../Estoque/estoque";
import Clientes from "../Clientes/clientes";
import Transacoes from "../Transacoes/transacoes";
import { Container } from "@mui/material";

const Home = () => {

    const [index, setIndex] = useState(0);

    const handlePage = (index) => {
        switch (index) {
            case 0:
                return <DashBoard />;
            case 1:
                return <Estoque />;
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
            <React.Fragment>
                <SideBar setIndex={setIndex}/>
                <Container maxWidth="xl">
                    {handlePage(index)}
                </Container>
            </React.Fragment>
        </div>
    )
}

export default Home;