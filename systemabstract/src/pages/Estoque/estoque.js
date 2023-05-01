import React, { useEffect, useState } from "react";
import { estoqueStyle } from "./estoqueStyle";
import { estoque, estoque_vazio } from "../../api/api";
import styled from "@emotion/styled";
import BotaoAdicionar from "../../components/Button/botaoAdicionar";
import { Paper, Stack, Box, Button } from "@mui/material";
import TabsEstoque from "../../components/Tabs/tabsEstoque";

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

    if(stock.length === 0){
        return(
            <BotaoAdicionar />
        )
    }

    return(
        <Box sx={estoqueStyle}>
            <Stack sx={{width: '1500px'}} spacing={2}>
                <Box sx={{display: 'inline', position: 'relative', justifyContent: 'space-between'}}>
                    Estoques
                    <Button variant="contained">Criar estoque</Button>
                </Box>
                <Item>
                    <TabsEstoque />
                </Item>
            </Stack>
        </Box>
    )
}

export default Estoque;