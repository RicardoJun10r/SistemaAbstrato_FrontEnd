import React, { createContext, useState } from "react";

export const EstoqueContext = createContext({});

export const EstoqueProvider = ({children}) => {

    const [ estoque, setEstoque ] = useState([]);

    const [ produto, setProduto ] = useState([]);

    const [ stock, setStock ] = useState([]);

    const [ indexContent, setIndexContent ] = useState(false);

    const adicionarStock = () => {
        const novoStock = `anan`;
        setStock([...stock, novoStock]);
    }

    return(
        <EstoqueContext.Provider
            value={{ indexContent, setIndexContent, produto, setProduto, estoque, setEstoque, stock, adicionarStock }} >
            { children }
        </EstoqueContext.Provider>
    )
};