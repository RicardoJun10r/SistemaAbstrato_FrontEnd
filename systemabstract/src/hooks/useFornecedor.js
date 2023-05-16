import { useContext } from 'react';

import { FornecedorContext } from '../context/fornecedorContext';

const useFornecedor = () => {

    const context = useContext(FornecedorContext);

    return context;
    
}

export default useFornecedor;