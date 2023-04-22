import React from "react";
import CardBalanco from "../../components/Card/cardBalanco";
import { dashBoardStyle } from "./dashBoardStyle";
import { ButtonGroup, Grid, Button } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const DashBoard = () => {
    return(
        <div style={dashBoardStyle}>
            <h1 style={{
                font: 'roboto',
                color: 'gray',
                textAlign: 'start'
            }}>
                DashBoard
            </h1>
            <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            xs={12}
            > 
                <CardBalanco icon={<TrendingUpIcon/>} tipo={'Balanço diário'} valor={999.99} />
                <CardBalanco icon={<TrendingUpIcon/>} tipo={'Balanço Mensal'} valor={999.99}/>
                <CardBalanco icon={<AttachMoneyIcon/>} tipo={'Maior venda de hoje'} valor={99.99}/>
                <Grid alignItems='flex-start' direction='row' justifyContent='space-around'>
                    <ButtonGroup orientation="vertical">
                        <Button >Realizar Venda</Button>
                        <Button>Realizar Relatório</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    )
}

export default DashBoard;