import React from "react";
import { 
  Box,
  Button,
  TextField,
  FormControl } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchemaFornecedorDeletar } from "../../errors/FormFornecedor/validationSchemaFornecedorDeletar";
import useFornecedor from "../../hooks/useFornecedor";


const FornecedorDeletarForms = ({handleClose}) => {

    const { fornecedorObj } = useFornecedor();

    const formik = useFormik({
        initialValues:{
            name: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values) + " validação: " + validar(JSON.stringify(values.name))); // COLOCAR AQUI AUTENTICAÇÃO DA API
            handleClose(false);
        },
        validationSchema: validationSchemaFornecedorDeletar
    })

    function validar(nome){
        var novoTexto = "";
        for (var i = 0; i < nome.length; i++) if (nome[i] !== "\"") novoTexto += nome[i];
        console.log(novoTexto)
        if(novoTexto === fornecedorObj) return true;
        else return false;
    }

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
                <Button type="submit" variant="contained" color="error">
                    Deletar
                </Button>
            </FormControl>
        </Box>
    )
}

export default FornecedorDeletarForms;