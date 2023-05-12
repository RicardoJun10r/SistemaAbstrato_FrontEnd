import React from "react";
import * as yup from 'yup';

export const validationSchemaProdutoAtualizar = yup.object({
    nome: yup.string("Digite outro nome"),
    descricao: yup.string("Digite outra descrição"),
    custo: yup.number("Digite o custo"),
    preco: yup.number("Digite o preço"),
    quantidade: yup.number("Digite a quantidade"),
    marca: yup.string("Digite outra marca"),
    categoria: yup.string("Digite outra categoria"),
    subCategoria: yup.string("Digite outra sub-categoria"),
    criadoEm: yup.string("Digite outra data"),
    comprimento: yup.number("Digite outro comprimento"),
    largura: yup.number("Digite outra largura"),
    altura: yup.number("Digite outra altura"),
    imagem: yup.string("Digite outra url"),
})