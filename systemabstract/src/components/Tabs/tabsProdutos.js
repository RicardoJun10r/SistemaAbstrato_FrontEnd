import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Grid, styled, TextField } from '@mui/material';
import TextFieldDetalheFornecedor from '../TextField/textFieldDetalheFornecedor';
import ProdutoAtualizarForms from '../Forms/produtoAtualizarForms';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  textAlign: 'start',
  padding: '15px 15px 15px 15px',
}));

export default function TabsProdutos({produto}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Geral" {...a11yProps(0)} />
          <Tab label="Histórico" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container>
          <ProdutoAtualizarForms />
          <Item>
            Detalhes do fornecedor
          </Item>
          <TextFieldDetalheFornecedor />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}