import React from "react";
import { 
    Box, 
    Button,
    Typography, 
    Paper, 
    Divider, 
    Grid,
    IconButton } from "@mui/material";
import useEstoque from "../../../hooks/useEstoque";
import VisaoGeral from "../../../components/VisaoGeral/visaoGeral";
import ListarProdutos from "../../../components/ListarProdutos/listarProdutos";
import { inventario } from "../../../api/api";
import styled from "@emotion/styled";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    padding: '15px 15px 15px 15px',
}));

const ProdutoContent = () => {

    const { setIndexContent } = useEstoque();

    return(
        <Box>
            <IconButton onClick={() => setIndexContent(false)} variant="contained"><ArrowCircleLeftIcon /></IconButton>
            <Grid container spacing={1} rowSpacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <Typography sx={{fontSize: '2.0em', fontFamily: 'roboto'}}>
                            Visão Geral
                        </Typography>
                        <Divider />
                        <VisaoGeral props={inventario}/>
                        <Divider />
                    </Item>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Item>
                        <Typography sx={{fontSize: '2.0em', fontFamily: 'roboto'}}>
                            Produtos
                        </Typography>
                        <ListarProdutos props={inventario}/>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProdutoContent;