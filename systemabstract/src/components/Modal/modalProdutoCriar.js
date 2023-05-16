import * as React from 'react';
import { 
  Box,
  Typography,
  Modal,
  Stack,
  IconButton } from '@mui/material';
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import ProdutoCriarForms from '../Forms/produtoCriarForms';

const styleModalEstoque = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '85%',
  width: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

const styleStackEstoque = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '75vh',
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  textAlign: 'start',
  padding: '15px 15px 15px 15px',
}));

export default function ModalProdutoCriar({open, handleClose}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-modal="modal-modal-grid"
      >
        <Box sx={styleModalEstoque}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography id="modal-modal-title" variant="h5" >
              Preencha os valores abaixo para criar o produto
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack sx={styleStackEstoque}>
            <Item>
              <ProdutoCriarForms handleClose={handleClose}/>
            </Item>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}