import { Box, Typography } from "@mui/material";
import React from "react";
import { estoqueStyle } from "./estoqueStyle";
import { inventario } from "../../api/api";

const Estoque = () => {
    return(
        <Box sx={estoqueStyle}>
            {inventario?.map((produto, index) => {
                return(
                    <Typography>
                        {produto.nome}
                    </Typography>
                )
            })}
        </Box>
    )
}

export default Estoque;