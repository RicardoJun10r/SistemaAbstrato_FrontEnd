import React from "react";
import { 
  Box,
  Button,
  TextField,
  FormControl, 
  Grid, 
  styled } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchemaProdutoCriar } from "../../errors/FormProduto/validationSchemaProdutoCriar";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    padding: '15px 15px 15px 15px',
}));

function RenderRow({ children }){
    return(
        <Grid>
            <Item>
                { children }
            </Item>
        </Grid>
    )
}

const ProdutoCriarForms = ({handleClose}) => {

    const formik = useFormik({
        initialValues:{
            nome: "",
            descricao: "",
            custo: "",
            preco: "",
            brand: "",
            category: "",
            subCategory: "",
            image: "",
            weight: "",
            height: "",
            width: "",
            quantidade: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values)); // COLOCAR AQUI AUTENTICAÇÃO DA API
            handleClose(false);
        },
        validationSchema: validationSchemaProdutoCriar
    })

    return(
        <Box component='form' onSubmit={formik.handleSubmit}>
            <FormControl>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} container spacing={2}>
                    <Grid>
                        <Item>
                            <RenderRow children={
                                <TextField
                                id="nome"
                                label="Nome"
                                placeholder="Digite o nome do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px', width: '200px'}}
                                value={formik.values.nome}
                                onChange={formik.handleChange}
                                error={formik.touched.nome && Boolean(formik.errors.nome)}
                                helperText={formik.touched.nome && formik.errors.nome}        
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="descricao"
                                label="Descrição"
                                placeholder="Descrição do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.descricao}
                                onChange={formik.handleChange}
                                error={formik.touched.descricao && Boolean(formik.errors.descricao)}
                                helperText={formik.touched.descricao && formik.errors.descricao}
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="custo"
                                label="Custo"
                                placeholder="Digite o custo do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.custo}
                                onChange={formik.handleChange}
                                error={formik.touched.custo && Boolean(formik.errors.custo)}
                                helperText={formik.touched.custo && formik.errors.custo}
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="preco"
                                label="Preço"
                                placeholder="Digite o preço do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.preco}
                                onChange={formik.handleChange}
                                error={formik.touched.preco && Boolean(formik.errors.preco)}
                                helperText={formik.touched.preco && formik.errors.preco}
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="quantidade"
                                label="Quantidade"
                                placeholder="Quantidade do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.quantidade}
                                onChange={formik.handleChange}
                                error={formik.touched.quantidade && Boolean(formik.errors.quantidade)}
                                helperText={formik.touched.quantidade && formik.errors.quantidade}
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="brand"
                                label="Marca"
                                placeholder="Digite a marca do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.brand}
                                onChange={formik.handleChange}
                                error={formik.touched.brand && Boolean(formik.errors.brand)}
                                helperText={formik.touched.brand && formik.errors.brand}
                                />
                            }/>
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            <RenderRow children={
                                <TextField
                                id="category"
                                label="Categoria"
                                placeholder="Categoria do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                error={formik.touched.category && Boolean(formik.errors.category)}
                                helperText={formik.touched.category && formik.errors.category}
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="subCategory"
                                label="Sub-categoria"
                                placeholder="Sub-categoria do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.subCategory}
                                onChange={formik.handleChange}
                                error={formik.touched.subCategory && Boolean(formik.errors.subCategory)}
                                helperText={formik.touched.subCategory && formik.errors.subCategory}
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="weight"
                                label="Peso"
                                placeholder="Digite o peso do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.weight}
                                onChange={formik.handleChange}
                                error={formik.touched.weight && Boolean(formik.errors.weight)}
                                helperText={formik.touched.weight && formik.errors.weight}
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="width"
                                label="Largura"
                                placeholder="Digite a largura do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.width}
                                onChange={formik.handleChange}
                                error={formik.touched.width && Boolean(formik.errors.width)}
                                helperText={formik.touched.width && formik.errors.width}
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="height"
                                label="Altura"
                                placeholder="Digite a altura do produto"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.height}
                                onChange={formik.handleChange}
                                error={formik.touched.height && Boolean(formik.errors.height)}
                                helperText={formik.touched.height && formik.errors.height}
                                />
                            }/>
                            <RenderRow children={
                                <TextField
                                id="image"
                                label="Imagem"
                                placeholder="URL da imagem"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{marginBottom: '20px'}}
                                value={formik.values.image}
                                onChange={formik.handleChange}
                                error={formik.touched.image && Boolean(formik.errors.image)}
                                helperText={formik.touched.image && formik.errors.image}
                                />
                            }/>
                        </Item>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="info">
                        Criar
                </Button>
            </FormControl>
        </Box>
    )
}

export default ProdutoCriarForms;