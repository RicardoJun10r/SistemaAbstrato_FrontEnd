import React from "react";
import { Box, Grid } from '@mui/material';
import LoginForms from "../../components/Forms/loginForms";
import { gridStyle, imageStyle, formStyle } from './loginStyles';

const Login = () => {
    return(
        <Box>
            <Grid container sx={gridStyle}>
                <Box sx={imageStyle}>
                    <h1>imagem</h1>
                </Box>
                <Box sx={formStyle}>
                    <LoginForms />
                </Box>
            </Grid>
        </Box>
    )
}

export default Login;