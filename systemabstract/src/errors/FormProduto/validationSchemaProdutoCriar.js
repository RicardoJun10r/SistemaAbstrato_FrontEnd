import React from "react";
import * as yup from 'yup';

export const validationSchemaProdutoCriar = yup.object({
    nome: yup.string().required("Digite o nome"),
    descricao: yup.string("Coloque uma descrição"),
    custo: yup.number().required("Digite o custo"),
    preco: yup.number().required("Digite o preço"),
    brand: yup.string().required("Digite a marca"),
    category: yup.string().required("Digite a categoria"),
    subCategory: yup.string().required("Digite a sub-categoria"),
    weight: yup.number().required("Digite o peso"),
    width: yup.number().required("Digite a largura"),
    height: yup.number().required("Digite a altura"),
    image: yup.string("Digite a url da imagem"),
    quantidade: yup.number().required("Digite a quantidade do produto"),
})