import React, { createContext, useState } from "react";

export const EstoqueContext = createContext({});

export const EstoqueProvider = ({children}) => {

    const [ produto, setProduto ] = useState([]);

    const [ indexContent, setIndexContent ] = useState(false);

    return(
        <EstoqueContext.Provider
            value={{ indexContent, setIndexContent, produto, setProduto }} >
            { children }
        </EstoqueContext.Provider>
    )
};