import { useContext } from 'react';

import { EstoqueContext } from '../context/estoqueContext';

const useEstoque = () => {

    const context = useContext(EstoqueContext);

    return context;
    
}

export default useEstoque;