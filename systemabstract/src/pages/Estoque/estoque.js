import { Typography, Paper, Divider, Grid, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { estoqueStyle } from "./estoqueStyle";
import { estoque, estoque_vazio } from "../../api/api";
import styled from "@emotion/styled";
import BotaoAdicionar from "../../components/Button/botaoAdicionar";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    padding: '15px 15px 15px 15px',
}));

const Estoque = () => {

    useEffect(()=>{
        console.log(stock.length)
    },[estoque])

    const stock = estoque_vazio;


    return(
        <Box sx={estoqueStyle}>
            {stock.length === 0 ? 
            <BotaoAdicionar /> : <Grid container spacing={1} rowSpacing={2}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12} md={12}>
                </Grid>
            </Grid>}
        </Box>
    )
}

export default Estoque;