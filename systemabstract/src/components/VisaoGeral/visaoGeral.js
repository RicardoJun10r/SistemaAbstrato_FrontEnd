import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    textAlign: 'center',
}));

const tratarDados = {
    total_categorias: 0,
    total_Produtos: 0,
    total_estoque_baixo: 0,
    produto_maior_estoque: 'vazio',
    produto_estoque_critico: 'vazio'
}

const VisaoGeral = ({props}) => {   

    const [produtos, setProdutos] = useState(props);

    const [dados, setDados] = useState(tratarDados);

    const contarCategorias = (produtos) => {
        const counts = {};
        produtos.forEach(function (x) { counts[x.categoria] = (counts[x.categoria] || 0) + 1; });
        let cont = Object.keys(counts).length;
        return cont;
    }

    const contarProdutos = (produtos) => {
        let cont = 0;
        for(let i = 0; i < produtos.length; i++){
            cont++;
        }
        return cont;
    }

    const contarQuantidadeBaixa = (produtos) => {
        let cont = 0;
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].quantidade < 10) {
                cont++;
            }
        }
        return cont;
    }

    const maiorEstoque = (produtos) => {
        let maior = produtos[0].quantidade;
        let index = 0;
        for(let i = 0; i < produtos.length; i++){
            if(maior < produtos[i].quantidade) {
                maior = produtos[i].quantidade;
                index = i;
            }
        }
        return produtos[index].nome;
    }

    const estoqueCritico = (produtos) => {
        let menor = produtos[0].quantidade;
        let index = 0;
        for(let i = 0; i < produtos.length; i++){
            if(menor > produtos[i].quantidade) {
                menor = produtos[i].quantidade;
                index = i;
            }
        }
        return produtos[index].nome;
    }

    useEffect(() => {
        dados.total_categorias = contarCategorias(produtos);
        dados.total_Produtos = contarProdutos(produtos);
        dados.total_estoque_baixo = contarQuantidadeBaixa(produtos);
        dados.produto_maior_estoque = maiorEstoque(produtos);
        dados.produto_estoque_critico = estoqueCritico(produtos);
    }, [produtos])
    

    return(
        <Stack sx={{alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFFFFF'}} item direction='row'>
            <Item sx={{fontSize: '1.5em'}}>
                <Typography sx={{fontSize: 'larger', color: '#3370E7', fontFamily: 'roboto'}}>
                    Tipos de Categorias
                </Typography>
                <strong>{dados.total_categorias}</strong>
            </Item>
            <Item sx={{fontSize: '1.5em'}}>
                <Typography sx={{fontSize: 'larger', color: '#E19133', fontFamily: 'roboto'}}>
                    Total de Produtos
                </Typography>
                <strong>{dados.total_Produtos}</strong>
            </Item>
            <Item sx={{fontSize: '1.5em'}}>
                <Typography sx={{fontSize: 'larger', color: '#E13333', fontFamily: 'roboto'}}>
                    Total de produtos em
                    baixo estoque
                </Typography>
                <strong>{dados.total_estoque_baixo}</strong>
            </Item>
            <Item sx={{fontSize: '1.5em'}}>
                <Typography sx={{fontSize: 'larger', color: '#9F33E1', fontFamily: 'roboto'}}>
                    Produto com maior estoque
                </Typography>
                <strong>{dados.produto_maior_estoque}</strong>
            </Item>
            <Item sx={{fontSize: '1.5em'}}>
                <Typography sx={{fontSize: 'larger', color: '#E13333', fontFamily: 'roboto'}}>
                    Produto de estoque crítico
                </Typography>
                <strong>{dados.produto_estoque_critico}</strong>
            </Item>
        </Stack>
    )
}

export default VisaoGeral;