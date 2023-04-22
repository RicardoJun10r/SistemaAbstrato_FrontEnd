import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '10px'
  }));

const tratarDados = {
    total_categorias: 0,
    total_Produtos: 0,
    total_estoque_baixo: 0,
    produto_maio_estoque: '',
    produto_estoque_critico: ''
}

const VisaoGeral = ({props}) => {   

    const [produtos, setProdutos] = useState(props);

    const [dados, setDados] = useState(tratarDados);

    // const contarCategorias = (produtos) => {
    //     let cont
    //     for(let i = 0; i < produtos.length; i++){
    //         let produto_vez = produtos[i]
    //         for(let j = 0; j < produtos.length; j++){

    //         }
    //     }

    // }

    useEffect(() => {

    }, [produtos])
    

    return(
        <Box>
            <Stack direction='row'>
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