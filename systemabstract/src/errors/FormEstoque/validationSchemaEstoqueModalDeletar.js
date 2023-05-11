import * as yup from 'yup';

export const validationSchemaEstoqueModalDeletar = yup.object({
    nome: yup.string().required("É preciso colocar o nome do estoque"),
})