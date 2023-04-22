import { Box, Typography } from "@mui/material";
import React from "react";
import { estoqueStyle } from "./estoqueStyle";
import { inventario } from "../../api/api";

const Estoque = () => {
    return(
        <Box sx={estoqueStyle}>
            {inventario?.map((estoque, index) => {
                return(
                    <Typography>
                        {estoque.nome}
                    </Typography>
                )
            })}
        </Box>
    )
}

export default Estoque;