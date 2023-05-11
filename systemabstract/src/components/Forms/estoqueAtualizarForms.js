import React from "react";
import { 
  Box,
  Button,
  TextField,
  FormControl } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchemaEstoqueModalAtualizar } from "../../errors/FormEstoque/validationSchemaEstoqueModalAtualizar"; 

const EstoqueAtualizarForms = ({handleClose}) => {

    const formik = useFormik({
        initialValues:{
            nome: "",
            localizacao: "",
            quantidade: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values)); // COLOCAR AQUI AUTENTICAÇÃO DA API
            handleClose(false);
        },
        validationSchema: validationSchemaEstoqueModalAtualizar
    })

    return(
        <Box component='form' onSubmit={formik.handleSubmit}>
            <FormControl>
                <TextField
                    id="nome"
                    label="Nome"
                    placeholder="Jon"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px', width: '500px'}}
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                    error={formik.touched.nome && Boolean(formik.errors.nome)}
                    helperText={formik.touched.nome && formik.errors.nome}        
                />
                <TextField
                    id="localizacao"
                    label="Localização"
                    placeholder="R. Antonio Magalhães"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.localizacao}
                    onChange={formik.handleChange}
                    error={formik.touched.localizacao && Boolean(formik.errors.localizacao)}
                    helperText={formik.touched.localizacao && formik.errors.localizacao}
                />
                <TextField
                    id="quantidade"
                    label="Quantidade"
                    placeholder="25 produtos"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.quantidade}
                    onChange={formik.handleChange}
                    error={formik.touched.quantidade && Boolean(formik.errors.quantidade)}
                    helperText={formik.touched.quantidade && formik.errors.quantidade}
                />
                <TextField
                    id="tipo"
                    label="Tipo"
                    placeholder="Estoque de produto físico"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    disabled
                />
                <Button type="submit" variant="contained" color="info">
                    Editar
                </Button>
            </FormControl>
        </Box>
    )
}

export default EstoqueAtualizarForms;