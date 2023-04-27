import React from "react";
import * as yup from 'yup';

export const validationSchemaCadastro = yup.object({
    nome: yup.string().required("Coloque seu nome"),
    email: yup.string().email("Coloque um e-mail válido").required("É preciso colocar o e-mail"),
    cpf: yup.string().required('Digite seu CPF'),
    senha: yup.string().required('Coloque a senha').min(8, 'Senha menor que 8 caracteres'),
    senhaConfirmada: yup.string().required('Repita a senha').oneOf([yup.ref('senha'), null], "Senhas devem serem iguais")
})