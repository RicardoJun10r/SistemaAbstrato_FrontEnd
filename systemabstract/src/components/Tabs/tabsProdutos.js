import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Grid, TextField } from '@mui/material';
import TextFieldProdutos from '../TextField/textFiledProdutos';
import TextFieldDetalheVenda from '../TextField/textFieldDetalheVenda';
import TextFieldDetalheFornecedor from '../TextField/textFieldDetalheFornecedor';

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
          <Tab label="Compras" {...a11yProps(1)} />
          <Tab label="Histórico" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4} columnSpacing={4}>
            <Grid item xs={2}>
                Detalhes do produto
                <TextFieldProdutos produto={produto}/>
            </Grid>
            <Grid item xs={2}>
                Detalhe de venda
                <TextFieldDetalheVenda />
            </Grid>
            <Grid item xs={4}>
                Detalhes do fornecedor
                <TextFieldDetalheFornecedor />
            </Grid>
            <Grid item xs={2}>
                <Box sx={{borderColor: 'black', border:'1px solid black', width: '302px', borderStyle: 'dotted'}}>
                    <img 
                        width={300}
                        height={350}
                        src='https://m.media-amazon.com/images/I/51LQHJqcf0L._AC_SL1200_.jpg'
                        loading='lazy'
                    />
                </Box>
            </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}