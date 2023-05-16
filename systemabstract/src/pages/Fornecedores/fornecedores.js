import React, { useEffect, useState } from "react";
import useFornecedor from "../../hooks/useFornecedor";
import BotaoAdicionarFornecedor from "../../components/Button/botaoAdicionarFornecedor";
import { Box, Paper, Stack, Button, styled } from "@mui/material";
import ModalFornecedorCriar from "../../components/Modal/modalFornecedorCriar";
import TabelaFornecedor from "../../components/Table/tabelaFornecedor";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    padding: '15px 15px 15px 15px',
}));

const Fornecedores = () => {

    const { fornecedores } = useFornecedor();

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    useEffect(()=>{},[fornecedores])

    if(fornecedores.length === 0){
        return <BotaoAdicionarFornecedor />;
    }

    return(
        <Box>
            <Stack sx={{width: '1500px'}} spacing={2}>
                <Item>
                    <Box sx={{fontSize: '2em', display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
                        Fornecedores
                        {open === 'false' ? null : <ModalFornecedorCriar open={open} handleClose={handleClose} />}
                        <Button onClick={handleOpen} variant="contained">Adicionar Fornecedor</Button>
                    </Box>
                </Item>
                <Item>
                    <TabelaFornecedor/> 
                </Item>
            </Stack>
        </Box>
    )
}

export default Fornecedores;