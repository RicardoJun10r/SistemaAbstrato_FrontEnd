import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Typography, Modal, Grid } from '@mui/material';
import TabelaProdutos from '../Table/tabelaProdutos';
import TabsProdutos from '../Tabs/tabsProdutos';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '85%',
  width: '85%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

export default function ModalVer({open, handleClose, produto}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-modal="modal-modal-grid"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={{justifyContent: 'space-around'}}>
            Produto: {produto?.nome}
          </Typography>
          <Grid id="modal-modal-grid">
            <Grid>
              <TabsProdutos produto={produto}/>
            </Grid>
            {/* <Grid>
              <h1>OPAA</h1>
            </Grid> */}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}