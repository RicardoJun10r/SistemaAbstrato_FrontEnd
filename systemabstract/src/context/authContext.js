import React, { createContext, useState, useEffect } from "react";
import { aplicacao } from "../api/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [ usuario, setUsuario ] = useState();
    
    const [ erros, setErros ] = useState();

    useEffect(() => {
        const usersStorage = localStorage.getItem("users_bd");

        if (usersStorage) {
          setUsuario(JSON.stringify(usersStorage));
        }
      }, []);
    
    const autenticar = async (login, password) => {

      const user = await aplicacao.post('user/login',{
        login, password
      }).then(response =>{
        return response.data
      }).catch(error => console.log(error.message))


      if(!!user){
        console.log("user: " + user.login)

        localStorage.setItem("users_bd", user)

        setUsuario(user)
        return "Logado!!!";
      }
    };
    
    const registrar = async (name, login, password) => {

      await aplicacao.post('user',{
        name, login, password
      }).then(response =>{
        console.log(response.data)
        return response.data
      }).catch(error => console.log(error.message))

      return;
    };
  
    const desautenticar = () => {
      setUsuario(null);
      localStorage.removeItem("users_bd");
    };

    return(
      <AuthContext.Provider 
        value={{usuario, logado: !!usuario, autenticar, registrar, desautenticar, erros}}>
        { children }
      </AuthContext.Provider>
    )
}