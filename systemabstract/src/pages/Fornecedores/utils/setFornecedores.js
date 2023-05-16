import React from "react";
import Fornecedores from "../fornecedores";
import { FornecedorProvider } from "../../../context/fornecedorContext";

const SetFornecedor = () => {
    return(
        <FornecedorProvider>
            <Fornecedores />
        </FornecedorProvider>
    )
}

export default SetFornecedor;