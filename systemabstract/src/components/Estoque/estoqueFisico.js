import React from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TabelaEstoque from "../Table/tabelaEstoque";

const EstoqueFisico = () => {
    return(
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px' }}>
                <TextField id="input-with-sx" label="Buscar" variant="standard" />
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            </Box>
            <Box>
                <TabelaEstoque />
            </Box>
        </Box>
    )
}

export default EstoqueFisico;