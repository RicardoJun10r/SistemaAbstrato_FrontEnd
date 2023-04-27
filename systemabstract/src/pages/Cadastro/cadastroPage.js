import React from "react";
import { Box, Grid } from '@mui/material';
import { gridCadastroStyle, imageCadastroStyle, formCadastroStyle } from './cadastroStyle';
import CadastroForms from "../../components/Forms/cadastroForms";

const Cadastro = () => {
    return(
        <Box>
            <Grid container sx={gridCadastroStyle}>
                <Box sx={imageCadastroStyle}>
                    <h1>imagem</h1>
                </Box>
                <Box sx={formCadastroStyle}>
                    <CadastroForms />
                </Box>
            </Grid>
        </Box>
    )
}

export default Cadastro;