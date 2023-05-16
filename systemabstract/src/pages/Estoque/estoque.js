import React, { useEffect } from "react";
import { estoqueStyle } from "./estoqueStyle";
import { Box } from "@mui/material";
import EstoqueContent from "./Content/estoqueContent";
import ProdutoContent from "./Content/produtoContent";
import useEstoque from "../../hooks/useEstoque";
import BotaoAdicionarEstoque from "../../components/Button/botaoAdicionarEstoque";

const Estoque = () => {

    const { stock, indexContent } = useEstoque();

    useEffect(()=>{},[stock])

    if(stock.length === 0){
        return <BotaoAdicionarEstoque />;
    }

    return(
        <Box sx={estoqueStyle}>
            { indexContent === false ? <EstoqueContent /> : <ProdutoContent /> }
        </Box>
    )
}

export default Estoque;