import React from "react";
import Navbar from "../components/Navbar"
import distresslogo from "../images/distress-logo.png"

const Header=()=>{
    return (
        <div className="header-wraper" >
            <img src={{distresslogo}} style={{"display":"flex","justify-content":"center","align-items":"center"}}/>
        </div>
    );
}

export default Header