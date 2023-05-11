import React, { useEffect } from "react";
import { estoqueStyle } from "./estoqueStyle";
import { estoque, estoque_vazio } from "../../api/api";
import BotaoAdicionar from "../../components/Button/botaoAdicionar";
import { Box } from "@mui/material";
import EstoqueContent from "./Content/estoqueContent";
import ProdutoContent from "./Content/produtoContent";
import useEstoque from "../../hooks/useEstoque";

const Estoque = () => {

    const stock = estoque_vazio;

    const { indexContent } = useEstoque();

    useEffect(()=>{
        // console.log(stock.length)
    },[estoque])

    if(stock.length === 0){
        return <BotaoAdicionar />;
    }

    return(
        <Box sx={estoqueStyle}>
            { indexContent === false ? <EstoqueContent /> : <ProdutoContent /> }
        </Box>
    )
}

export default Estoque;