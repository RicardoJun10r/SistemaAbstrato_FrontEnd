import React from "react";
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
    Button } from "@mui/material";
import { red } from '@mui/material/colors'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LOGO from '../../assets/Logotipo.png'

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

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
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
                    <FormControl sx={{ m: 1, width: '500px' }}>
                        <InputLabel htmlFor="outlined-adornment-amount">E-mail</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            endAdornment={<InputAdornment position="start"></InputAdornment>}
                            label="email"
                            placeholder="Digite seu e-mail"
                            autoComplete="on"
                        />
                    </FormControl>
                </Item>
                <Item>
                    <FormControl sx={{ m: 1, width: '500px' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
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
                                label="senha"
                            />
                    </FormControl>
                </Item>
                <Item>
                    <Box onClick={linkButton}>
                        <Link sx={{color: 'red', fontSize: '1.4em'}} href="#" underline="hover">
                            {'Esqueci a senha'}
                        </Link>
                    </Box>
                </Item>
                <Item>
                    <Box>
                        <ColorButton variant="contained">Entrar</ColorButton>
                    </Box>
                </Item>
                <Item>
                    <Box>
                        <Typography variant="h6">
                            Não tem uma conta ?
                        </Typography>
                        <Link sx={{color: 'red', fontSize: '1.4em'}} href="#" underline="hover">
                            {'Registre-se'}
                        </Link>
                    </Box>
                </Item>
            </Stack>
        </Box>
    )
}

export default LoginForms;