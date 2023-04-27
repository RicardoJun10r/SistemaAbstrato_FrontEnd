import React, { useState } from "react";
import TabelaProdutos from "../Table/tabelaProdutos";
import { Box, IconButton, ButtonGroup, Grid } from "@mui/material";
import styled from "@emotion/styled";
import ModalVer from "../Modal/modalVer";
import PreviewIcon from '@mui/icons-material/Preview';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'end',
}));

const ListarProdutos = (props) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Box sx={{backgroundColor: '#FFFFFF'}}>
            <Grid item>
                <Grid item>
                    <Item>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <IconButton onClick={handleOpen}>
                                <PreviewIcon sx={{fontSize: '1.5em'}}/>
                            </IconButton>
                            <IconButton onClick={handleOpen}>
                                <AddBoxIcon sx={{fontSize: '1.5em'}}/>
                            </IconButton>
                            <IconButton onClick={handleOpen}>
                                <DeleteIcon sx={{fontSize: '1.5em'}}/>
                            </IconButton>
                        </ButtonGroup>
                    </Item>
                </Grid>
                {open === false ? null : <ModalVer open={open} handleClose={handleClose} produto={props[0]}/>}
                <Grid item>
                    <Item>
                        <TabelaProdutos props={props} />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ListarProdutos;