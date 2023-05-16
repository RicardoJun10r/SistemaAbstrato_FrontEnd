import React from "react";
import * as yup from 'yup';

export const validationSchemaCadastro = yup.object({
    name: yup.string().required("Coloque seu nome"),
    login: yup.string().email("Coloque um e-mail válido").required("É preciso colocar o e-mail"),
    password: yup.string().required('Coloque a senha').min(8, 'Senha menor que 8 caracteres'),
    senhaConfirmada: yup.string().required('Repita a senha').oneOf([yup.ref('password'), null], "Senhas devem serem iguais")
})