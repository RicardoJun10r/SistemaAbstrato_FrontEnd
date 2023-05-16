import * as React from 'react';
import { 
  Box,
  Typography,
  Modal,
  Stack,
  IconButton } from '@mui/material';
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import useFornecedor from '../../hooks/useFornecedor';
import FornecedorDeletarForms from '../Forms/fornecedorDeletarForms';
import TransacaoDeletarForms from '../Forms/transacaoDeletarForms';

const styleModalFornecedor = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '40%',
  width: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '12px',
  boxShadow: 24,
  p: 5,
};

const styleStackFornecedor = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '30vh',
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  textAlign: 'start',
  padding: '15px 15px 15px 15px',
}));

export default function ModalDeletarTransacao({open, handleClose, transacao}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-modal="modal-modal-grid"
      >
        <Box sx={styleModalFornecedor}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography id="modal-modal-title" variant="h5" >
              Escreva o nome deste fornecedor para deleta-lo [ {transacao} ]
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack sx={styleStackFornecedor}>
            <Item>
                <TransacaoDeletarForms handleClose={handleClose} transacao={transacao}/>
            </Item>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}