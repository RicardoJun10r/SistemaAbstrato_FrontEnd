import { Box, Typography } from "@mui/material";
import React from "react";
import { estoqueStyle } from "./estoqueStyle";



const Estoque = () => {
    return(
        <Box sx={estoqueStyle}>
            <Typography>
                Estoque
            </Typography>
        </Box>
    )
}

export default Estoque;