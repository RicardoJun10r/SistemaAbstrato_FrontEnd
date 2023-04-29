import React, { useState } from "react";
import { Typography, Box, Button, Divider } from "@mui/material";

const BotaoAdicionar = () => {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return(
        <Box sx={{justifyContent: 'center', alignItems: 'center', position: 'relative', display: 'flex'}}>
            <Typography fontFamily='roboto' variant="h2">
                Sem estoque cadastrado<br/>Crie seu primeiro estoque
            </Typography>
            <Divider sx={{height: '300px'}} orientation="vertical" variant="inset" flexItem/>
            <Button variant="contained">Adicionar</Button>
        </Box>
    )
}

export default BotaoAdicionar;