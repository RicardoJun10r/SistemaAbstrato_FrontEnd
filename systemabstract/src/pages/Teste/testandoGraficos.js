import React from "react";
import { Box, Grid, styled } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    padding: '15px 15px 15px 15px',
  }));

const Testando = () => {
    return(
        <Box>
            <Grid container>
                <Grid>
                    <Item>Primeiro</Item>
                    <Item>Sexto</Item>
                </Grid>
                <Grid>
                    <Item>Segundo</Item>
                    <Item>Setimo</Item>
                </Grid>
                <Grid>
                    <Item>Quarto</Item>
                    <Item>Quinto</Item>
                </Grid>
            </Grid>
            <Grid>
                <Item>Terceiro</Item>
                <Item>Oitavo</Item>
            </Grid>
        </Box>
    )
}

export default Testando;