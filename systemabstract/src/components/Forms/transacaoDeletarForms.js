import React from "react";
import { 
  Box,
  Button,
  TextField,
  FormControl } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchemaTransacaoDeletar } from "../../errors/FormTransacao/validationSchemaTransacaoDeletar";

const TransacaoDeletarForms = ({handleClose, transacao}) => {

    const formik = useFormik({
        initialValues:{
            value: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values) + " validação: " + validar(JSON.stringify(values.value))); // COLOCAR AQUI AUTENTICAÇÃO DA API
            handleClose(false);
        },
        validationSchema: validationSchemaTransacaoDeletar
    })

    function validar(nome){
        var novoTexto = "";
        for (var i = 0; i < nome.length; i++) if (nome[i] !== "\"") novoTexto += nome[i];
        console.log(novoTexto)
        if(novoTexto === transacao.toString()) return true;
        else return false;
    }

    return(
        <Box component='form' onSubmit={formik.handleSubmit}>
            <FormControl>
                <TextField
                    id="value"
                    label="Valor da transação"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{marginBottom: '20px', width: '500px'}}
                    value={formik.values.value}
                    onChange={formik.handleChange}
                    error={formik.touched.value && Boolean(formik.errors.value)}
                    helperText={formik.touched.value && formik.errors.value}        
                />
                <Button type="submit" variant="contained" color="error">
                    Deletar
                </Button>
            </FormControl>
        </Box>
    )
}

export default TransacaoDeletarForms;