import React from "react";
import TabelaProdutos from "../Table/tabelaProdutos";
import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'end',
}));

const ListarProdutos = (props) => {

    return(
        <Box sx={{backgroundColor: '#FFFFFF'}}>
            <Grid item>
                <Item>
                    <TabelaProdutos />
                </Item>
            </Grid>
        </Box>
    )
}

export default ListarProdutos;