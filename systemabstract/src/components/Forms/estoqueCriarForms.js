import React from "react";
import { 
  Box,
  Button,
  TextField,
  FormControl,
  FormHelperText, 
  Radio, 
  RadioGroup, 
  FormLabel,
  FormControlLabel, } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchemaEstoqueModal } from "../../errors/FormEstoque/validationSchemaEstoqueModal";
import { adicionar_estoque_vazio } from "../../api/api";
import useEstoque from "../../hooks/useEstoque";

const options = {
    ProdutoFisico: 'Produto Fisico',
    ProdutoDigital: 'Produto Digital',
    ProdutoIntelectual: 'Produto Intelectual'
}


const EstoqueCriarForms = ({handleClose}) => {

    const { adicionarStock } = useEstoque();

    const formik = useFormik({
        initialValues:{
            nome: "",
            localizacao: "",
            tipo: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values)); // COLOCAR AQUI AUTENTICAÇÃO DA API
            adicionar_estoque_vazio(values);
            adicionarStock();
            handleClose(false);
        },
        validationSchema: validationSchemaEstoqueModal
    })

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
                <TextField
                    id="localizacao"
                    label="Localização"
                    multiline
                    maxRows={4}
                    variant="standard"
                    sx={{marginBottom: '20px'}}
                    value={formik.values.localizacao}
                    onChange={formik.handleChange}
                    error={formik.touched.localizacao && Boolean(formik.errors.localizacao)}
                    helperText={formik.touched.localizacao && formik.errors.localizacao}
                />
                <FormControl>
                    <FormLabel id="tipoEstoque">Tipo de produto</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="tipoEstoque"
                        name="tipo"
                        value={formik.values.tipo}
                        onChange={formik.handleChange}
                    >
                        <FormControlLabel value={options.ProdutoFisico} control={<Radio />} label={options.ProdutoFisico} />
                        <FormControlLabel value={options.ProdutoDigital} control={<Radio />} label={options.ProdutoDigital} />
                        <FormControlLabel value={options.ProdutoIntelectual} control={<Radio />} label={options.ProdutoIntelectual} />
                    </RadioGroup>
                    <FormHelperText sx={{color: 'red'}}>{formik.touched.tipo && formik.errors.tipo}</FormHelperText>
                </FormControl>
                <Button type="submit" variant="contained" color="success">
                    Criar
                </Button>
            </FormControl>
        </Box>
    )
}

export default EstoqueCriarForms;