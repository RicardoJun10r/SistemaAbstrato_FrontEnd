import React, { useState } from "react";
import { Typography, Box, Button, Divider, Stack } from "@mui/material";
import ModalEstoque from "../Modal/modalEstoque";
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

const BotaoAdicionar = () => {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return(
        <Box>
            <Stack sx={{position: 'relative', alignItems: 'center'}} direction='row' divider={<Divider sx={{height: '350px'}} orientation="vertical" flexItem />} spacing={2}>
                <Item>
                    <Typography fontFamily='roboto' variant="h3">
                        Sem estoque cadastrado<br/>Crie seu primeiro estoque
                    </Typography>
                </Item>
                <Item>
                    <Button sx={{}} onClick={handleOpen} variant="contained">Adicionar</Button>
                    {open === 'false' ? null : <ModalEstoque open={open} handleClose={handleClose} />}
                </Item>
            </Stack>
        </Box>
    )
}

export default BotaoAdicionar;