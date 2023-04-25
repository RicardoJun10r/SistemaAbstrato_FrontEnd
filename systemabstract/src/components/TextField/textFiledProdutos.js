import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldProdutos({produto}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0.8, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          disabled
          id="standard-disabled"
          label="Nome"
          defaultValue="Camisa"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Descrição"
          defaultValue="Camisa do time Vasco da Gama"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Status"
          defaultValue="Em estoque"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Marca"
          defaultValue="Vasco"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Categoria"
          defaultValue="Camisa"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Sub-categoria"
          defaultValue="Camisa de time"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Adicionado em"
          defaultValue="20/05/2022"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Comprimento"
          defaultValue="80cm"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Largura"
          defaultValue="50cm"
          variant="standard"
        />
      </div>
    </Box>
  );
}