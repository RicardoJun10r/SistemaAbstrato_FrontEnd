import React, { useState } from "react";
import SideBar from "../../components/NavBar/sideBar";
import { homeStyle } from "./styleHome";
import DashBoard from "../DashBoard/dashboard";
import Transacoes from "../Transacoes/transacoes";
import { Box, CssBaseline} from "@mui/material";
import SetEstoque from "../Estoque/utils/setEstoque";
import SetFornecedor from "../Fornecedores/utils/setFornecedores";

const Home = () => {

    const [index, setIndex] = useState(0);

    function handlePage(index){
        switch (index) {
            case 0:
                return <DashBoard />;
            case 1:
                return <SetEstoque />;
            case 2:
                return <SetFornecedor />;
            case 3:
                return <Transacoes />;
            default:
                return <DashBoard />;
        }
      }

    return(
        <div style={homeStyle}>
            <React.Fragment>
                <CssBaseline />
                <SideBar setIndex={setIndex}/>
                <Box>
                    {handlePage(index)}
                </Box>
            </React.Fragment>
        </div>
    )
}

export default Home;