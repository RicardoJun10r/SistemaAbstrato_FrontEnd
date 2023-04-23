import { Box, Stack, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: '10px'
}));

const tratarDados = {
    total_categorias: 0,
    total_Produtos: 0,
    total_estoque_baixo: 0,
    produto_maior_estoque: '',
    produto_estoque_critico: ''
}

const VisaoGeral = ({props}) => {   

    const [produtos, setProdutos] = useState(props);

    const [dados, setDados] = useState(tratarDados);

    const contarCategorias = (produtos) => {
        const counts = {};
        let cont = 0;
        produtos.forEach(function (x) { counts[x.categoria] = (counts[x.categoria] || 0) + 1; cont++; });
        console.log(counts)
        console.log(cont)
    }

    useEffect(() => {
        contarCategorias(produtos)
    }, [produtos])
    

    return(
        <Box>
            <Stack item direction='row'>
                <Item>
                    <Typography>
                        Tipos de Categorias
                    </Typography>

                </Item>
                <Item>
                    <Typography>
                        Total de Produtos
                    </Typography>
                    
                </Item>
                <Item>
                    <Typography>
                        Total de produtos em
                        baixo estoque
                    </Typography>
                    
                </Item>
                <Item>
                    <Typography>
                        Produto com maior estoque
                    </Typography>
                    
                </Item>
                <Item>
                    <Typography>
                        Produto de estoque crítico
                    </Typography>
                    
                </Item>
            </Stack>
        </Box>
    )
}

export default VisaoGeral;