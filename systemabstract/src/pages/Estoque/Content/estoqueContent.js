import React, { useState } from "react";
import styled from "@emotion/styled";
import { Paper, Stack, Box, Button } from "@mui/material";
import TabsEstoque from "../../../components/Tabs/tabsEstoque";
import ModalEstoque from "../../../components/Modal/modalEstoque";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    padding: '15px 15px 15px 15px',
}));

const EstoqueContent = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return(
        <Box>
            <Stack sx={{width: '1500px'}} spacing={2}>
                <Box sx={{fontSize: '2em', display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
                    Estoques
                    {open === 'false' ? null : <ModalEstoque open={open} handleClose={handleClose} />}
                    <Button onClick={handleOpen} variant="contained">Criar estoque</Button>
                </Box>
                <Item>
                    <TabsEstoque />
                </Item>
            </Stack>
        </Box>
    )
}

export default EstoqueContent;