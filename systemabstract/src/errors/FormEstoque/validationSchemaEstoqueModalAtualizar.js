import React from "react";
import * as yup from 'yup';

export const validationSchemaEstoqueModalAtualizar = yup.object({
    nome: yup.string("Digite outro nome"),
    localizacao: yup.string("Digite outra localização"),
    quantidade: yup.number("Digite uma quantidade")
})