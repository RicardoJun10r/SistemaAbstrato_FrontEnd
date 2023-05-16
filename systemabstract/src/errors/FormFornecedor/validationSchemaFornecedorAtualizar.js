import React from "react";
import * as yup from 'yup';

export const validationSchemaFornecedorAtualizar = yup.object({
    name: yup.string("Digite outro nome"),
    address: yup.string("Digite outra localização"),
    email: yup.string().email("Digite outro e-mal"),
    phone: yup.string("Digite outro telefone")
})