import React, { useState, useEffect } from "react";
import { 
    styled,
    Box,
    Stack,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Link,
    Button,
    FormHelperText,
    TextField } from "@mui/material";
import { red } from '@mui/material/colors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LOGO from '../../assets/Logotipo.png'
import { useFormik } from 'formik';
import { validationSchemaLogin } from '../../errors/FormLogin/mensagensErro';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ColorButton = styled(Button)(({ theme }) => ({
color: theme.palette.getContrastText(red[500]),
backgroundColor: red[500],
width: '500px',
height: '50px',
'&:hover': {
    backgroundColor: red[700],
},
}));

const LoginForms = () => {

    const formik = useFormik({
        initialValues:{
            login: "",
            password: ""
        },
        onSubmit: (values) => {
            handleLogin(values)
        },
        validationSchema: validationSchemaLogin
    })

    const { autenticar, usuario } = useAuth();

    const { erros } = useAuth();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleLogin = (values) => {

        const res = autenticar(values.login, values.password);
    
        if (!res) {
          console.log("res: " + res);
          console.log("usuario: " + usuario.login);
          return;
        }
        navigate("/home");
      };

    const linkButton = (event) => {
        event.preventDefault();
    }

    return(
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Item>
                    <Box>
                        <img src={LOGO} width='500px' height='100px'/>
                        <Typography variant="h3" gutterBottom>
                            Entre na sua conta
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Bem vindo, digite suas credenciais
                        </Typography>
                    </Box>
                    <Typography>
                            {erros != null ? <h2>{erros}</h2> : null}
                    </Typography>
                </Item>
                <Item>
                    <Box component='form' sx={{display: 'grid', justifyContent: 'center'}} onSubmit={formik.handleSubmit}>
                        <FormControl sx={{ m: 1, width: '500px'}}>
                            <TextField 
                                id="login" 
                                label="E-mail" 
                                type="email" 
                                value={formik.values.login}
                                onChange={formik.handleChange}
                                error={formik.touched.login && Boolean(formik.errors.login)}
                                helperText={formik.touched.login && formik.errors.login}
                                placeholder="Digite seu e-mail"/>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '500px'}}>
                            <InputLabel htmlFor="senha">Senha</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="senha"
                                placeholder="Digite sua senha"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                            />
                            <FormHelperText id="senha-ajuda">{formik.touched.password && formik.errors.password}</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <Box sx={{marginBottom: '20px'}} onClick={linkButton}>
                                <Link sx={{color: 'red', fontSize: '1.4em'}} href="#" underline="hover">
                                    {'Esqueci a senha'}
                                </Link>
                            </Box>
                            <Box sx={{marginBottom: '20px'}}>
                                <ColorButton type="submit" variant="contained">Entrar</ColorButton>
                            </Box>
                            <Box>
                                <Typography variant="h6">
                                    Não tem uma conta ?
                                </Typography>
                                <Link sx={{color: 'red', fontSize: '1.4em'}} href="/cadastro" underline="hover">
                                    {'Registre-se'}
                                </Link>
                            </Box>
                        </FormControl>
                    </Box>
                </Item>
            </Stack>
        </Box>
    )
}

export default LoginForms;