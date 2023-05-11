import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [ usuario, setUsuario ] = useState();
    
    const [ erros, setErros ] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_bd");
    
        if (userToken && usersStorage) {
          const hasUser = JSON.parse(usersStorage)?.filter(
            (usuario) => usuario.email === JSON.parse(userToken).email
          );
    
          if (hasUser) setUsuario(hasUser[0]);
        }
      }, []);
    
      const autenticar = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    
        const hasUser = usersStorage?.filter((user) => user.email === email);
    
        if (hasUser?.length) {
          if (hasUser[0].email === email && hasUser[0].password === password) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("user_token", JSON.stringify({ email, token }));
            setUsuario({ email, password });
            return;
          } else {
            setErros("E-mail ou senha incorretos")
            return "E-mail ou senha incorretos";
          }
        } else {
          setErros("Usuário não cadastrado")
          return "Usuário não cadastrado";
        }
      };
    
      const registrar = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    
        const hasUser = usersStorage?.filter((user) => user.email === email);
    
        if (hasUser?.length) {
          setErros("Já tem uma conta com esse E-mail")
          return "Já tem uma conta com esse E-mail";
        }
    
        let newUser;
    
        if (usersStorage) {
          newUser = [...usersStorage, { email, password }];
        } else {
          newUser = [{ email, password }];
        }
    
        localStorage.setItem("users_bd", JSON.stringify(newUser));
    
        return;
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