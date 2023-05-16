import * as React from 'react';
import { 
  Box,
  Typography,
  Modal,
  Stack,
  IconButton } from '@mui/material';
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import CarrinhoCriarForms from '../Forms/carrinhoCriarForms';

const styleModalTransacao = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '50%',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

const styleStackTransacao = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  textAlign: 'start',
  padding: '15px 15px 15px 15px',
}));

export default function ModalTransacaoCriar({open, handleClose}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-modal="modal-modal-grid"
      >
        <Box sx={styleModalTransacao}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography id="modal-modal-title" variant="h5" >
              Adicione os produtos no carrinho
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack sx={styleStackTransacao}>
            <Item>
              <CarrinhoCriarForms />
            </Item>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}