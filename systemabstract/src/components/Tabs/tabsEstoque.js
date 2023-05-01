import React, { useState } from "react";
import EstoqueFisico from "../Estoque/estoqueFisico";
import { Box, Tab, styled, Paper } from "@mui/material";
import TabContext from "@mui/lab/TabContext/TabContext";
import TabPanel from "@mui/lab/TabPanel/TabPanel";
import TabList from "@mui/lab/TabList/TabList";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    padding: '15px 15px 15px 15px',
}));

const TabsEstoque = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    return(
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Estoque físico" value="1" />
                    <Tab disabled label="Estoque digital" value="2" />
                    <Tab disabled label="Estoque intelectual" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <Item>
                        <EstoqueFisico />
                    </Item>
                </TabPanel>
                <TabPanel value="2">
                    <Item>
                        busca
                    </Item>
                    <Item> 
                        tabela
                    </Item>
                </TabPanel>
                <TabPanel value="3">
                    <Item>
                        busca
                    </Item>
                    <Item> 
                        tabela
                    </Item>
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default TabsEstoque;