import React from "react";
import * as yup from 'yup';

export const validationSchemaEstoqueModal = yup.object({
    nome: yup.string().required("É preciso colocar o nome do estoque"),
    localizacao: yup.string().required('Coloque a localização do estoque.'), 
    tipo: yup.string().required("Coloque o tipo do produto que será estocado.")
})