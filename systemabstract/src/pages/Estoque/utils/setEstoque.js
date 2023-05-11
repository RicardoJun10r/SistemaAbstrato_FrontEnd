import React from "react";
import { EstoqueProvider } from "../../../context/estoqueContext";
import Estoque from "../estoque";

const SetEstoque = () => {
    return(
        <EstoqueProvider>
            <Estoque />
        </EstoqueProvider>
    )
}

export default SetEstoque;