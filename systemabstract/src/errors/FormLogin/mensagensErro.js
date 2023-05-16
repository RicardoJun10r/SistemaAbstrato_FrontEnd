import React from "react";
import * as yup from 'yup';

export const validationSchemaLogin = yup.object({
    login: yup.string().email("Coloque um e-mail válido").required("É preciso colocar o e-mail"),
    password: yup.string().required('Coloque a senha') 
    .min(8, 'Senha menor que 8 caracteres')
})