import React, { useState } from "react";
import { Box, Paper, Stack, Button, styled } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TabelaTransacao from "../../components/Table/tabelaTransacao";
import ModalTransacaoCriar from "../../components/Modal/modalTransacaoCriar";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    padding: '15px 15px 15px 15px',
}));

const Transacoes = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return(
        <Box>
            <Stack sx={{width: '1500px'}} spacing={2}>
                <Item>
                    <Box sx={{fontSize: '2em', display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
                        Transações
                        {open === 'false' ? null : <ModalTransacaoCriar open={open} handleClose={handleClose} />}
                        <Button onClick={handleOpen} variant="contained" endIcon={<AddShoppingCartIcon />}>Carrinho</Button>
                    </Box>
                </Item>
                <Item>
                    <TabelaTransacao /> 
                </Item>
            </Stack>
        </Box>
    )
}

export default Transacoes;