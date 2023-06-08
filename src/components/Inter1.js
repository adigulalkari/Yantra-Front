import React from "react";
import Navbar from "../components/Navbar"
import addfriend from "../images/addfriend.png"
import creategrp from "../images/creategrp.png"
import NavbarA from "../components/NavbarA"

const Inter1=()=>{
    return (
        
        <div className="header-wraper" style={{"background": "radial-gradient(50% 50% at 50% 50%, #DAAC78 0%, rgba(218, 172, 120, 0) 100%)"}}>
        <NavbarA/>
        <div className="card-control" style={{"padding-top":"3rem"}}>
        <div className="card" style={{"width": "26rem"}}>
        <img className="card-img-top" src={addfriend} alt="Card image cap" style={{"height":"40rem"}}/>
        </div>
        <div className="card" style={{"width": "26rem"}}>
        <img className="card-img-top" src={creategrp} alt="Card image cap" style={{"height":"40rem"}}/>
        </div>
        </div>
    

        </div>
    );
}

export default Inter1