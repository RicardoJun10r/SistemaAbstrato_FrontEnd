import React, { useEffect } from "react";
import { estoqueStyle } from "./estoqueStyle";
import BotaoAdicionar from "../../components/Button/botaoAdicionar";
import { Box } from "@mui/material";
import EstoqueContent from "./Content/estoqueContent";
import ProdutoContent from "./Content/produtoContent";
import useEstoque from "../../hooks/useEstoque";

const Estoque = () => {

    const { stock } = useEstoque();

    const { indexContent } = useEstoque();

    useEffect(()=>{},[stock])

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