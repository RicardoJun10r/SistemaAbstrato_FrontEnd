import React from "react";
import { 
  Box,
  Button,
  TextField,
  FormControl } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchemaFornecedorCriar } from "../../errors/FormFornecedor/validationSchemaFornecedorCriar";
import useFornecedor from "../../hooks/useFornecedor";

const FornecedorCriarForms = ({handleClose}) => {

    const { adicionarFornecedor } = useFornecedor();

    const formik = useFormik({
        initialValues:{
            name: "",
            address: "",
            email: "",
            phone: ""
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values)); // COLOCAR AQUI AUTENTICAÇÃO DA API
            adicionarFornecedor();
            handleClose(false);
        },
        validationSchema: validationSchemaFornecedorCriar
    })

    return(
        <Box component='form' onSubmit={formik.handleSubmit}>
            <FormControl>
                <TextField
                    id="name"
                    label="Nome do fornecedor"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{marginBottom: '20px', width: '500px'}}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}        
                />
                <TextField
                    id="address"
                    label="Localização"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{marginBottom: '20px'}}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                />
                <TextField
                    id="email"
                    label="E-mail"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{marginBottom: '20px'}}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    id="phone"
                    label="Telefone"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{marginBottom: '20px'}}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                <Button type="submit" variant="contained" color="success">
                    Criar
                </Button>
            </FormControl>
        </Box>
    )
}

export default FornecedorCriarForms;