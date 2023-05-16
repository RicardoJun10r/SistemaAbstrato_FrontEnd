import * as yup from 'yup';

export const validationSchemaTransacaoDeletar = yup.object({
    value: yup.number().required("É preciso colocar o valor da transação"),
})