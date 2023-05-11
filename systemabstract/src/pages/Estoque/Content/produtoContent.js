import React from "react";
import { Box, Button } from "@mui/material";
import useEstoque from "../../../hooks/useEstoque";


const ProdutoContent = () => {

    const { setIndexContent } = useEstoque();

    return(
        <Box>
            <Button onClick={() => setIndexContent(false)} variant="contained">Clique</Button>
        </Box>
    )
}

export default ProdutoContent;