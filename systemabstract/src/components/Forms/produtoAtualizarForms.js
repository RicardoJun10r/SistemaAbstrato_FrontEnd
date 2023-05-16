import React from "react";
import { 
  Box,
  Button,
  Grid,
  TextField,
  Divider,
  styled,
  FormControl, 
  Typography} from '@mui/material';
import { useFormik } from 'formik';
import { validationSchemaProdutoAtualizar } from "../../errors/FormProduto/validationSchemaProdutoAtualizar"; 

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  textAlign: 'start',
  padding: '15px 15px 15px 15px',
}));

function RenderRow({ children }){
  return(
    <Item>
      { children }
    </Item>
  )
}

const ProdutoAtualizarForms = ({handleClose}) => {

    const formik = useFormik({
        initialValues:{
            nome: "",
            descricao: "",
            custo: "",
            preco: "",
            quantidade: "",
            brand: "",
            category: "",
            subCategory: "",
            createdAt: "",
            weight: "",
            width: "",
            height: "",
            image: "",

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
          <Grid container rowSpacing={2}>
            <Grid>
              <RenderRow children={<Typography>Detalhes do produto</Typography>}/>
              <Divider/>
              <RenderRow children={
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
              }/>
              <RenderRow children={
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
              }/>
              <RenderRow children={
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
              }/>
              <RenderRow children={
                <TextField
                  id="brand"
                  label="Marca"
                  placeholder="Balenciaga"
                  multiline
                  maxRows={4}
                  variant="standard"
                  InputLabelProps={{
                      shrink: true,
                    }}
                  sx={{marginBottom: '20px'}}
                  value={formik.values.brand}
                  onChange={formik.handleChange}
                  error={formik.touched.brand && Boolean(formik.errors.brand)}
                  helperText={formik.touched.brand && formik.errors.brand}
                />
              }/>
              <RenderRow children={
                <TextField
                  id="height"
                  label="Altura"
                  placeholder="70cm"
                  multiline
                  maxRows={4}
                  variant="standard"
                  InputLabelProps={{
                      shrink: true,
                    }}
                  sx={{marginBottom: '20px'}}
                  value={formik.values.height}
                  onChange={formik.handleChange}
                  error={formik.touched.height && Boolean(formik.errors.height)}
                  helperText={formik.touched.height && formik.errors.height}
                />
              }/>
              <RenderRow children={
                <TextField
                  id="category"
                  label="Categoria"
                  placeholder="Roupa"
                  multiline
                  maxRows={4}
                  variant="standard"
                  InputLabelProps={{
                      shrink: true,
                    }}
                  sx={{marginBottom: '20px'}}
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  error={formik.touched.category && Boolean(formik.errors.category)}
                  helperText={formik.touched.category && formik.errors.category}
                />
              }/>
            </Grid>
            <Grid>
              <RenderRow/>
              <br/>

              <Divider/>
              <RenderRow children={
                <TextField
                  id="subCategory"
                  label="Sub-categoria"
                  placeholder="Camisa"
                  multiline
                  maxRows={4}
                  variant="standard"
                  InputLabelProps={{
                      shrink: true,
                    }}
                  sx={{marginBottom: '20px'}}
                  value={formik.values.subCategory}
                  onChange={formik.handleChange}
                  error={formik.touched.subCategory && Boolean(formik.errors.subCategory)}
                  helperText={formik.touched.subCategory && formik.errors.subCategory}
                />
              }/>
              <RenderRow children={
                <TextField
                  id="createdAt"
                  label="Data de criação"
                  placeholder="25/12/2012"
                  multiline
                  maxRows={4}
                  variant="standard"
                  InputLabelProps={{
                      shrink: true,
                    }}
                  sx={{marginBottom: '20px'}}
                  value={formik.values.createdAt}
                  onChange={formik.handleChange}
                  error={formik.touched.createdAt && Boolean(formik.errors.createdAt)}
                  helperText={formik.touched.createdAt && formik.errors.createdAt}
                />
              }/>
              <RenderRow children={
                <TextField
                  id="updatedAt"
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
              }/>
              <RenderRow children={
                <TextField
                  id="weight"
                  label="Peso"
                  placeholder="80cm"
                  multiline
                  maxRows={4}
                  variant="standard"
                  InputLabelProps={{
                      shrink: true,
                    }}
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
                  placeholder="50cm"
                  multiline
                  maxRows={4}
                  variant="standard"
                  InputLabelProps={{
                      shrink: true,
                    }}
                  sx={{marginBottom: '20px'}}
                  value={formik.values.width}
                  onChange={formik.handleChange}
                  error={formik.touched.width && Boolean(formik.errors.width)}
                  helperText={formik.touched.width && formik.errors.width}
                />
              }/>
              <RenderRow children={
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
              }/>
            </Grid>
            <Grid>
            <RenderRow children={<Typography>Detalhes de custo</Typography>}/>
            <Divider/>
            <RenderRow children={
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
            }/>
            <RenderRow children={
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
            }/>
          </Grid>
          <Grid>
            <RenderRow children={<Typography>Imagem</Typography>}/>
            <Divider/>
            <RenderRow children={
              <TextField
                id="image"
                label="Imagem url"
                placeholder="https://google.com"
                multiline
                maxRows={4}
                variant="standard"
                InputLabelProps={{
                    shrink: true,
                  }}
                sx={{marginBottom: '20px'}}
                value={formik.values.image}
                onChange={formik.handleChange}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
              />
            }/>
            <RenderRow children={<img style={{border: '1px solid '}} width='300px' src="https://static.shopvasco.com.br/produtos/camisa-vasco-i-2122-sn-torcedor-kappa-masculina/06/D24-4238-006/D24-4238-006_zoom1.jpg?ts=1636481523" alt="camisa do vascao"/>}/>
          </Grid>
          </Grid>
          <Grid>
            <Item>
              <Button type="submit" variant="contained" color="info">
                  Editar
              </Button>
            </Item>
          </Grid>
        </FormControl>
      </Box>
    )
}

export default ProdutoAtualizarForms;