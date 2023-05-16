import React, { createContext, useState } from "react";

export const FornecedorContext = createContext({});

export const FornecedorProvider = ({children}) => {

    const [ fornecedores, setFornecedores ] = useState([]);

    const [ fornecedorObj, setFornecedorObj ] = useState([]);

    const [ indexContent, setIndexContent ] = useState(false);

    const adicionarFornecedor = () => {
        const novoCaba = `anan`;
        setFornecedores([...fornecedores, novoCaba]);
    }

    return(
        <FornecedorContext.Provider
            value={{ indexContent, setIndexContent, fornecedorObj, setFornecedorObj, fornecedores, setFornecedores, adicionarFornecedor }} >
            { children }
        </FornecedorContext.Provider>
    )
};