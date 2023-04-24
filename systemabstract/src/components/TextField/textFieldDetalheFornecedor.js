import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldDetalheFornecedor({produto}) {
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
          defaultValue="Roberto"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Número"
          defaultValue="(11) 9 9999-9999"
          variant="standard"
        />
      </div>
    </Box>
  );
}