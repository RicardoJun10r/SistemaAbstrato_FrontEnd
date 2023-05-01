import React, { useState } from "react";
import { Typography, Box, Button, Divider, Stack } from "@mui/material";
import ModalEstoque from "../Modal/modalEstoque";

const BotaoAdicionar = () => {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return(
        <Box sx={{ position: 'relative', display: 'flex', left: '420px'}}>
            <Stack sx={{ justifyContent: 'center', alignItems: 'center' }} spacing={2}>
                <Typography fontFamily='roboto' variant="h3">
                    Sem estoque cadastrado<br/>Crie seu primeiro estoque
                </Typography>
                <Divider sx={{width: '700px'}} orientation="horizontal" variant="inset"/>
                <Button sx={{width: '250px'}} onClick={handleOpen} variant="contained">Adicionar</Button>
                {open === 'false' ? null : <ModalEstoque open={open} handleClose={handleClose} />}
            </Stack>
        </Box>
    )
}

export default BotaoAdicionar;