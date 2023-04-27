import { Typography, Paper, Divider, Grid } from "@mui/material";
import React from "react";
import { estoqueStyle } from "./estoqueStyle";
import { inventario } from "../../api/api";
import VisaoGeral from "../../components/VisaoGeral/visaoGeral";
import styled from "@emotion/styled";
import ListarProdutos from "../../components/ListarProdutos/listarProdutos";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    padding: '15px 15px 15px 15px',
}));

const Estoque = () => {
    return(
        <div style={estoqueStyle}>
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
        </div>
    )
}

export default Estoque;