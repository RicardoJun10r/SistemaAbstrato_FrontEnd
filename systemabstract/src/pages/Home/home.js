import React from "react";
import SideBar from "../../components/NavBar/sideBar";
import { dashboardStyle } from "./style";

const Home = () => {
    return(
        <div style={dashboardStyle}>
            <header>
                <SideBar />
            </header>
            <h1>DashBoard</h1>
        </div>
    )
}

export default Home;