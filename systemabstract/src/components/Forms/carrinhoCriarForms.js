import React from "react";
import { 
  Box,
  Button,
  TextField,
  FormControl } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchemaCarrinhoVender } from "../../errors/FormCarrinho/validationSchemaCarrinhoVender";

const CarrinhoCriarForms = ({handleClose}) => {

    const formik = useFormik({
        initialValues:{
            name: "",
            quantidade: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values)); // COLOCAR AQUI AUTENTICAÇÃO DA API
            handleClose(false);
        },
        validationSchema: validationSchemaCarrinhoVender
    })

    return(
        <Box component='form' onSubmit={formik.handleSubmit}>
            <FormControl>
                <TextField
                    id="name"
                    label="Nome do produto"
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
                    id="quantidade"
                    label="Quantidade para vender"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{marginBottom: '20px'}}
                    value={formik.values.quantidade}
                    onChange={formik.handleChange}
                    error={formik.touched.quantidade && Boolean(formik.errors.quantidade)}
                    helperText={formik.touched.quantidade && formik.errors.quantidade}
                />
                <Button type="submit" variant="contained" color="success">
                    Vender
                </Button>
            </FormControl>
        </Box>
    )
}

export default CarrinhoCriarForms;