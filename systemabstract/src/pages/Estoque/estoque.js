import { Box, Typography } from "@mui/material";
import React from "react";
import { estoqueStyle } from "./estoqueStyle";
import { inventario } from "../../api/api";
import VisaoGeral from "../../components/VisaoGeral/visaoGeral";

const Estoque = () => {
    return(
        <Box sx={estoqueStyle}>
            <VisaoGeral props={inventario}/>
            {/* {inventario?.map((produto, index) => {
                return(
                    <Typography>
                        {produto.nome}
                    </Typography>
                )
            })} */}
        </Box>
    )
}

export default Estoque;