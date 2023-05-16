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
    Button, 
    Link,
    FormHelperText } from "@mui/material";
import { red } from '@mui/material/colors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LOGO from '../../assets/Logotipo.png';
import { useFormik } from 'formik';
import { validationSchemaCadastro } from '../../errors/FormCadastro/mensagensErro';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { Cadastrar } from "../../api/api";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: 'inherit',
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

const CadastroForms = () => {

    const formik = useFormik({
        initialValues:{
            name: "",
            login: "",
            password: "",
            senhaConfirmada: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            handleSignUp()
        },
        validationSchema: validationSchemaCadastro
    })

    const navigate = useNavigate();

    const { registrar } = useAuth();


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmedPassword = () => setShowConfirmedPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleMouseDownPasswordConfirmed = (event) => {
        event.preventDefault();
    };

    function handleSignUp(){
        const res = registrar(formik.values.name, formik.values.login, formik.values.password);
    
        if (!res) {
          console.log(res);
          return;
        }
    
        navigate("/login");
      }

    return(
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Item>
                    <Box>
                        <img src={LOGO} width='500px' height='100px'/>
                        <Typography variant="h3" gutterBottom>
                            Crie sua conta
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Bem vindo, Preencha o formulário abaixo
                        </Typography>
                    </Box>
                </Item>
                <Item>
                    <Box component='form' sx={{display: 'grid', justifyContent: 'center'}} onSubmit={formik.handleSubmit}>
                        <FormControl sx={{ m: 1, width: '500px' }}>
                            <InputLabel htmlFor="nome">Nome</InputLabel>
                            <OutlinedInput
                                id="name"
                                type="text"
                                endAdornment={<InputAdornment position="start"></InputAdornment>}
                                label="Nome"
                                value={formik.values.name}
                                placeholder="Digite seu nome"
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                            />
                            <FormHelperText id='nome-ajuda' >{formik.touched.name && formik.errors.name}</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '500px' }}>
                            <InputLabel htmlFor="email">E-mail</InputLabel>
                            <OutlinedInput
                                id="login"
                                type="email"
                                endAdornment={<InputAdornment position="start"></InputAdornment>}
                                label="E-mail"
                                placeholder="Digite seu e-mail"
                                autoComplete="on"
                                value={formik.values.login}
                                onChange={formik.handleChange}
                                error={formik.touched.login && Boolean(formik.errors.login)}
                            />
                            <FormHelperText id='email-ajuda' >{formik.touched.login && formik.errors.login}</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '500px' }} variant="outlined">
                            <InputLabel htmlFor="senha">Senha</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Digite sua senha"
                                    autoComplete="off"
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
                                    label="Senha"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                />
                            <FormHelperText id='senha-ajuda' >{formik.touched.password && formik.errors.password}</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '500px' }} variant="outlined">
                            <InputLabel htmlFor="senhaConfirmada">Confirme a senha</InputLabel>
                                <OutlinedInput
                                    id="senhaConfirmada"
                                    type={showConfirmedPassword ? 'text' : 'password'}
                                    placeholder="Digite sua senha novamente"
                                    autoComplete="off"
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmedPassword}
                                        onMouseDown={handleMouseDownPasswordConfirmed}
                                        edge="end"
                                        >
                                        {showConfirmedPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Confirme a senha"
                                    value={formik.values.senhaConfirmada}
                                    onChange={formik.handleChange}
                                    error={formik.touched.senhaConfirmada && Boolean(formik.errors.senhaConfirmada)}
                                />
                            <FormHelperText id='senha-ajuda' >{formik.touched.senhaConfirmada && formik.errors.senhaConfirmada}</FormHelperText>
                        </FormControl>
                        <Box sx={{display: 'grid', justifyContent: 'center', alignSelf: 'center'}}>
                            <ColorButton type="submit" variant="contained">Registrar</ColorButton>
                            <Link sx={{color: 'red', fontSize: '1.4em', marginTop: '10px'}} href="/login" underline="hover">
                                    {'Voltar'}
                            </Link>
                        </Box>
                    </Box>
                </Item>
            </Stack>
        </Box>
    )
}

export default CadastroForms;