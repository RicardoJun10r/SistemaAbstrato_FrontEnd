import React from "react";
import { 
  Box,
  Button,
  TextField,
  FormControl } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchemaProdutoAtualizar } from "../../errors/FormEstoque/validationSchemaProdutoAtualizar"; 

const ProdutoAtualizarForms = ({handleClose}) => {

    const formik = useFormik({
        initialValues:{
            nome: "",
            descricao: "",
            custo: "",
            preco: "",
            quantidade: "",
            marca: "",
            categoria: "",
            subCategoria: "",
            criadoEm: "",
            comprimento: "",
            largura: "",
            altura: "",
            imagem: "",

        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values)); // COLOCAR AQUI AUTENTICAÇÃO DA API
            handleClose(false);
        },
        validationSchema: validationSchemaProdutoAtualizar
    })

    return(
        <Box component='form' onSubmit={formik.handleSubmit}>
            <FormControl>
                <TextField
                    id="nome"
                    label="Nome"
                    placeholder="Camisa"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px', width: '200px'}}
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                    error={formik.touched.nome && Boolean(formik.errors.nome)}
                    helperText={formik.touched.nome && formik.errors.nome}        
                />
                <TextField
                    id="descricao"
                    label="Descrição"
                    placeholder="Camisa do time Vasco da Gama"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.descricao}
                    onChange={formik.handleChange}
                    error={formik.touched.descricao && Boolean(formik.errors.descricao)}
                    helperText={formik.touched.descricao && formik.errors.descricao}
                />
                <TextField
                    id="custo"
                    label="Custo"
                    placeholder="R$ 50,23"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.custo}
                    onChange={formik.handleChange}
                    error={formik.touched.custo && Boolean(formik.errors.custo)}
                    helperText={formik.touched.custo && formik.errors.custo}
                />
                <TextField
                    id="preco"
                    label="Preço"
                    placeholder="R$ 300,50"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.preco}
                    onChange={formik.handleChange}
                    error={formik.touched.preco && Boolean(formik.errors.preco)}
                    helperText={formik.touched.preco && formik.errors.preco}
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
                    id="marca"
                    label="Marca"
                    placeholder="Balenciaga"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.marca}
                    onChange={formik.handleChange}
                    error={formik.touched.marca && Boolean(formik.errors.marca)}
                    helperText={formik.touched.marca && formik.errors.marca}
                />
                <TextField
                    id="categoria"
                    label="Categoria"
                    placeholder="Roupa"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.categoria}
                    onChange={formik.handleChange}
                    error={formik.touched.categoria && Boolean(formik.errors.categoria)}
                    helperText={formik.touched.categoria && formik.errors.categoria}
                />
                <TextField
                    id="subCategoria"
                    label="Sub-categoria"
                    placeholder="Camisa"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.subCategoria}
                    onChange={formik.handleChange}
                    error={formik.touched.subCategoria && Boolean(formik.errors.subCategoria)}
                    helperText={formik.touched.subCategoria && formik.errors.subCategoria}
                />
                <TextField
                    id="criadoEm"
                    label="Data de criação"
                    placeholder="25/12/2012"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.criadoEm}
                    onChange={formik.handleChange}
                    error={formik.touched.criadoEm && Boolean(formik.errors.criadoEm)}
                    helperText={formik.touched.criadoEm && formik.errors.criadoEm}
                />
                <TextField
                    id="atualizadoEm"
                    label="Data de atualização"
                    placeholder="20/02/2013"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    disabled
                />
                <TextField
                    id="comprimento"
                    label="Comprimento"
                    placeholder="80cm"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.comprimento}
                    onChange={formik.handleChange}
                    error={formik.touched.comprimento && Boolean(formik.errors.comprimento)}
                    helperText={formik.touched.comprimento && formik.errors.comprimento}
                />
                <TextField
                    id="largura"
                    label="Largura"
                    placeholder="50cm"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.largura}
                    onChange={formik.handleChange}
                    error={formik.touched.largura && Boolean(formik.errors.largura)}
                    helperText={formik.touched.largura && formik.errors.largura}
                />
                <TextField
                    id="altura"
                    label="Altura"
                    placeholder="70cm"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.altura}
                    onChange={formik.handleChange}
                    error={formik.touched.altura && Boolean(formik.errors.altura)}
                    helperText={formik.touched.altura && formik.errors.altura}
                />
                <TextField
                    id="imagem"
                    label="Imagem url"
                    placeholder="https://google.com"
                    multiline
                    maxRows={4}
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    sx={{marginBottom: '20px'}}
                    value={formik.values.imagem}
                    onChange={formik.handleChange}
                    error={formik.touched.imagem && Boolean(formik.errors.imagem)}
                    helperText={formik.touched.imagem && formik.errors.imagem}
                />
                <TextField
                    id="status"
                    label="Status do produto"
                    placeholder="A venda"
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

export default ProdutoAtualizarForms;