import * as yup from 'yup';

export const validationSchemaFornecedorDeletar = yup.object({
    name: yup.string().required("É preciso colocar o nome do estoque"),
})