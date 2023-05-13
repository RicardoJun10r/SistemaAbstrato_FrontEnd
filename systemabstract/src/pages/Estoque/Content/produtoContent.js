import React from "react";
import { 
    Box, 
    Typography, 
    Paper, 
    Divider, 
    Stack,
    Grid,
    Button } from "@mui/material";
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
            <Stack container spacing={1} rowSpacing={2}>
                <Grid item xs={12}>
                    <Item>
                        
                        <Typography sx={{fontSize: '2.0em', fontFamily: 'roboto'}}>
                            Visão Geral
                        </Typography>
                        <Divider />
                        <br/>
                        <VisaoGeral props={inventario}/>
                    </Item>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Item sx={{textAlign: 'center'}}>
                        <Typography sx={{fontSize: '2.0em', fontFamily: 'roboto'}}>
                            Produtos
                        </Typography>
                        <Divider />
                        <br/>
                        <ListarProdutos props={inventario}/>
                        <Button onClick={() => setIndexContent(false)} variant="text" startIcon={<ArrowCircleLeftIcon />}>
                            Voltar
                        </Button>
                    </Item>
                </Grid>
            </Stack>
        </Box>
    )
}

export default ProdutoContent;