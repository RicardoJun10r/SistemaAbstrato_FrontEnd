import React, { createContext, useState, useEffect } from "react";


export const ModalContext = createContext({});

export const ModalProvider = ({children}) => {

    const [ estoque, setEstoque ] = useState();

    useEffect(()=>{
        const estoque = localStorage.getItem("estoque")

        if(estoque){
            const hasEstoque = JSON.parse(estoque)?.filter(
                (estoque) => usuario.
            )
        }
    },[])

    return(
        <ModalContext.Provider
            value={{estoque}}
        >
            { children }
        </ModalContext.Provider>
    )
}