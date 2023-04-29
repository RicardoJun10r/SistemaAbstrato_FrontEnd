import React, { useState } from "react";
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
            email: "",
            senha: ""
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values)); // COLOCAR AQUI AUTENTICAÇÃO DA API
            handleLogin()
        },
        validationSchema: validationSchemaLogin
    })

    const { autenticar } = useAuth();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleLogin = () => {
        const res = autenticar(formik.values.email, formik.values.senha);
    
        if (res) {
          console.log(res);
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
                </Item>
                <Item>
                    <Box component='form' sx={{display: 'grid', justifyContent: 'center'}} onSubmit={formik.handleSubmit}>
                        <FormControl sx={{ m: 1, width: '500px'}}>
                            <TextField 
                                id="email" 
                                label="E-mail" 
                                type="email" 
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                placeholder="Digite seu e-mail"/>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '500px'}}>
                            <InputLabel htmlFor="senha">Senha</InputLabel>
                            <OutlinedInput
                                id="senha"
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
                                value={formik.values.senha}
                                onChange={formik.handleChange}
                                error={formik.touched.senha && Boolean(formik.errors.senha)}
                            />
                            <FormHelperText id="senha-ajuda">{formik.touched.senha && formik.errors.senha}</FormHelperText>
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