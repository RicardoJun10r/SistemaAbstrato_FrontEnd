import React from "react";
import TabelaProdutos from "../Table/tabelaProdutos";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import styled from "@emotion/styled";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'end',
}));

const ListarProdutos = (props) => {

    return(
        <Box sx={{backgroundColor: '#FFFFFF'}}>
            <Grid item>
                <Grid item>
                    <Item>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button>Ver</Button>
                            <Button>Adicionar</Button>
                            <Button>Deletar</Button>
                        </ButtonGroup>
                    </Item>
                </Grid>
                <Grid item>
                    <Item>
                        <TabelaProdutos />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ListarProdutos;