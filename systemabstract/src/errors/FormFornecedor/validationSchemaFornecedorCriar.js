import * as yup from 'yup';

export const validationSchemaFornecedorCriar = yup.object({
    name: yup.string().required("Digite o nome"),
    address: yup.string("Coloque o endereço"),
    email: yup.string().email("Digite um e-mail válido").required("Digite o email"),
    phone: yup.string().required("Digite o telefone"),
})