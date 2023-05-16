import React, { createContext, useState, useEffect } from "react";
import { Logar, aplicacao } from "../api/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [ usuario, setUsuario ] = useState({});
    
    const [ erros, setErros ] = useState();

    useEffect(() => {
        const usersStorage = localStorage.getItem("users_bd");

        const user = usuario;
    
        if (usersStorage) {
          const hasUser = JSON.parse(usersStorage)?.filter(
            (usu) => usu.email === user.login
          );
    
          if (hasUser) setUsuario(hasUser[0]);
        }
      }, []);
    
    const autenticar = async (login, password) => {

      const user = await aplicacao.post('user/login',{
        login, password
      }).then(response =>{
        return response.data
      }).catch(error => console.log(error.message))


      if(user){
        console.log("user: " + user.login)

        localStorage.setItem("users_bd", user)

        setUsuario(user)
        return "Logado!!!";
      }

      // const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
  
      // const hasUser = usersStorage?.filter((user) => user.email === email);
  
      // if (hasUser?.length) {
      //   if (hasUser[0].email === email && hasUser[0].password === password) {
      //     const token = Math.random().toString(36).substring(2);
      //     localStorage.setItem("user_token", JSON.stringify({ email, token }));
      //     setUsuario({ email, password });
      //     return;
      //   } else {
      //     setErros("E-mail ou senha incorretos")
      //     return "E-mail ou senha incorretos";
      //   }
      // } else {
      //   setErros("Usuário não cadastrado")
      //   return "Usuário não cadastrado";
      // }
    };
    
    const registrar = async (name, login, password) => {

      await aplicacao.post('user',{
        name, login, password
      }).then(response =>{
        console.log(response.data)
        return response.data
      }).catch(error => console.log(error.message))

      return;

      // const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
  
      // const hasUser = usersStorage?.filter((user) => user.email === email);
  
      // if (hasUser?.length) {
      //   setErros("Já tem uma conta com esse E-mail")
      //   return "Já tem uma conta com esse E-mail";
      // }
  
      // let newUser;
  
      // if (usersStorage) {
      //   newUser = [...usersStorage, { email, password }];
      // } else {
      //   newUser = [{ email, password }];
      // }
  
      // localStorage.setItem("users_bd", JSON.stringify(newUser));
  
      // return;
    };
  
    const desautenticar = () => {
      setUsuario(null);
      localStorage.removeItem("user_token");
    };

    return(
      <AuthContext.Provider 
        value={{usuario, logado: !!usuario, autenticar, registrar, desautenticar, erros}}>
        { children }
      </AuthContext.Provider>
    )
}