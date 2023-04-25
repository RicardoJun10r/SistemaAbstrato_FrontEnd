import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldDetalheVenda({produto}) {
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
          label="Custo"
          defaultValue="R$ 50,45"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Porcentagem de lucro"
          defaultValue="695,71%"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Preço"
          defaultValue="R$ 350,99"
          variant="standard"
        />
      </div>
    </Box>
  );
}