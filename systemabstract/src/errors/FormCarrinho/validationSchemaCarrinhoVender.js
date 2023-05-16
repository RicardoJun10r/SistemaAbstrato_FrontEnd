import * as yup from 'yup';

export const validationSchemaCarrinhoVender = yup.object({
    name: yup.string().required("Digite o nome"),
    quantidade: yup.number().required("Coloque a quantidade para vender"),
})