import React from "react";
import * as yup from 'yup';

export const validationSchemaProdutoAtualizar = yup.object({
    nome: yup.string("Digite outro nome"),
    descricao: yup.string("Digite outra descrição"),
    custo: yup.number("Digite o custo"),
    preco: yup.number("Digite o preço"),
    quantidade: yup.number("Digite a quantidade"),
    brand: yup.string("Digite outra marca"),
    category: yup.string("Digite outra categoria"),
    subCategory: yup.string("Digite outra sub-categoria"),
    criatedAt: yup.string("Digite outra data"),
    weight: yup.number("Digite outro peso"),
    width: yup.number("Digite outra largura"),
    height: yup.number("Digite outra altura"),
    image: yup.string("Digite outra url"),
})