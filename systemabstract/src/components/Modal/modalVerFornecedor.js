import * as React from 'react';
import { 
  Box,
  Typography,
  Modal,
  Stack,
  IconButton } from '@mui/material';
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import useEstoque from '../../hooks/useEstoque';
import EstoqueAtualizarForms from '../Forms/estoqueAtualizarForms';
import MapBoxGlJs from '../MapBoxGL/mapBox';
import useFornecedor from '../../hooks/useFornecedor';
import FornecedorAtualizarForms from '../Forms/fornecedorAtualizarForms';

const styleModalFornecedor = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '60%',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

const styleStackFornecedor = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '50vh'
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  textAlign: 'start',
  padding: '15px 15px 15px 15px',
}));

export default function ModalVisualizarFornecedor({open, handleClose}) {

    const { fornecedorObj } = useFornecedor();

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
              Informações sobre o estoque
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack sx={styleStackFornecedor} direction='row' spacing={2}>
            <Item>
              <FornecedorAtualizarForms handleClose={handleClose}/>
            </Item>
            <Item>
              <MapBoxGlJs />
            </Item>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}