import React from "react";
import CardBalanco from "../../components/Card/cardBalanco";
import { dashBoardStyle } from "./dashBoardStyle";
import { Grid } from "@mui/material";

const DashBoard = () => {
    return(
        <div style={dashBoardStyle}>
            <h1>
                DashBoard
            </h1>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            > 
                <CardBalanco />
                <CardBalanco />
                <CardBalanco />
            </Grid>

            <div>

            </div>
        </div>
    )
}

export default DashBoard;