import React, { useState } from "react";
import { dashBoardStyle } from "./dashBoardStyle";
import { 
    Grid,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    Avatar,
    Stack,
    Box
    } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { styled } from '@mui/material/styles';
import SellIcon from '@mui/icons-material/Sell';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import InventoryIcon from '@mui/icons-material/Inventory';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import TabelaMaisVendidos from "../../components/Table/tabelaMaisVendidos";
import GraficoPedidos from "../../components/Graficos/graficoEmLinha";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'start',
    borderRadius: '10px',
    padding: '10px 10px 10px 10px'
  }));

const dados = {
    quantidade: 48,
    receita: 19000,
    lucro: 24000,
    custo: 10000
}

const DashBoard = () => {

    const [vendaDados, setVendaDados] = useState(dados);

    return(
        <div style={dashBoardStyle}>
            <Grid container justifyContent='space-between' spacing={4} > {/* VENDAS */}
                <Grid item xs={8}>
                    <Item>
                        <Typography sx={{fontFamily: 'roboto', fontSize: '1.5em', color: 'green'}}>
                            Vendas
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Item>
                                <SellIcon/>
                                <Typography>
                                    <strong>{vendaDados.quantidade}</strong> Qtd
                                </Typography>
                            </Item>
                            <Item>
                                <ReceiptIcon />
                                <Typography>
                                    R$ <strong>{vendaDados.receita}</strong> Receita
                                </Typography>
                            </Item>
                            <Item>
                                <TrendingUpIcon />
                                <Typography>
                                    R$ <strong>{vendaDados.lucro}</strong> Lucro
                                </Typography>
                            </Item>
                            <Item>
                                <PaymentIcon />
                                <Typography>
                                    R$ <strong>{vendaDados.custo}</strong> Custo
                                </Typography>
                            </Item>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={4}> {/* ESTOQUE */} 
                    <Item>
                        <Typography sx={{fontFamily: 'roboto', fontSize: '1.5em'}}>
                            Estoque
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Item>
                                <InventoryIcon/>
                                <Typography>
                                    {vendaDados.quantidade}<br/>Produtos em estoque
                                </Typography>
                            </Item>
                            <Item>
                                <FlightLandIcon />
                                <Typography>
                                    {vendaDados.receita} <br/>Produtos a receber
                                </Typography>
                            </Item>
                        </Stack>
                    </Item> 
                </Grid>
                <Grid item xs={8}> {/* COMPRAS */}
                    <Item>
                        <Typography sx={{fontFamily: 'roboto', fontSize: '1.5em', color: 'red'}}>
                            Compras
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Item>
                                <SellIcon/>
                                <Typography>
                                    {vendaDados.quantidade} Qtd
                                </Typography>
                            </Item>
                            <Item>
                                <ReceiptIcon />
                                <Typography>
                                    R$ {vendaDados.receita} Custo
                                </Typography>
                            </Item>
                            <Item>
                                <MonetizationOnIcon />
                                <Typography>
                                    R$ {vendaDados.lucro} Lucro
                                </Typography>
                            </Item>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={4}> {/* PRODUTOS */}
                    <Item>
                        <Typography sx={{fontFamily: 'roboto', fontSize: '1.5em'}}>
                            Produtos
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Item>
                                <AccountBoxIcon />
                                <Typography>
                                    {vendaDados.quantidade}<br/>Quantidade de fornecedores
                                </Typography>
                            </Item>
                            <Item>
                                <ChecklistRtlIcon />
                                <Typography>
                                    {vendaDados.receita}<br/>Quantidade de categorias
                                </Typography>
                            </Item>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={8}> { /* VENDAS / COMPRAS */ }
                    <Item>
                        <Typography sx={{fontFamily: 'roboto', fontSize: '1.5em'}}>
                            Vendas / Compras
                        </Typography>
                        grafico
                    </Item>
                </Grid>
                <Grid item xs={4}> {/* PEDIDOS */}
                    <Item>
                        <Typography sx={{fontFamily: 'roboto', fontSize: '1.5em'}}>
                            Pedidos
                        </Typography>
                        <GraficoPedidos />
                    </Item>
                </Grid>
                <Grid item xs={8}> {/* PRODUTOS MAIS VENDIDOS */}
                    <Item>
                        <Typography sx={{fontFamily: 'roboto', fontSize: '1.5em'}}>
                            Produtos mais vendidos
                        </Typography>
                        <TabelaMaisVendidos />
                    </Item>
                </Grid>
                <Grid item xs={4}> {/* ESTOQUE BAIXO */}
                    <Item>
                        <Typography sx={{fontFamily: 'roboto', fontSize: '1.5em'}}>
                            Estoque Baixo
                        </Typography>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Imagem" src="" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Tomate"
                                    secondary={
                                        <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Quantidade sobrando:
                                        </Typography>
                                        {vendaDados.quantidade} unidades
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default DashBoard;