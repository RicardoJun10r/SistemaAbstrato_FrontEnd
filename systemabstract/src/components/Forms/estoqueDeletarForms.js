import React from "react";
import { 
  Box,
  Button,
  TextField,
  FormControl } from '@mui/material';
import { useFormik } from 'formik';
import useEstoque from "../../hooks/useEstoque";
import { validationSchemaEstoqueModalDeletar } from "../../errors/FormEstoque/validationSchemaEstoqueModalDeletar";


const EstoqueDeletarForms = ({handleClose}) => {

    const {produto} = useEstoque();

    const formik = useFormik({
        initialValues:{
            nome: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values) + " validação: " + validar(JSON.stringify(values.nome))); // COLOCAR AQUI AUTENTICAÇÃO DA API
            handleClose(false);
        },
        validationSchema: validationSchemaEstoqueModalDeletar
    })

    function validar(nome){
        var novoTexto = "";
        for (var i = 0; i < nome.length; i++) if (nome[i] !== "\"") novoTexto += nome[i];
        console.log(novoTexto)
        if(novoTexto === produto) return true;
        else return false;
    }

    return(
        <Box component='form' onSubmit={formik.handleSubmit}>
            <FormControl>
                <TextField
                    id="nome"
                    label="Nome do estoque"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{marginBottom: '20px', width: '500px'}}
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                    error={formik.touched.nome && Boolean(formik.errors.nome)}
                    helperText={formik.touched.nome && formik.errors.nome}        
                />
                <Button type="submit" variant="contained" color="error">
                    Deletar
                </Button>
            </FormControl>
        </Box>
    )
}

export default EstoqueDeletarForms;