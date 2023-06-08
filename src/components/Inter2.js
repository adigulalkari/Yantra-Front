import React from "react";
import NavbarA from "../components/NavbarA"
import chatbots from "../images/chatbots.png"
import exercise from "../images/exercise.png"
import {BrowserRouter, Route, Link } from "react-router-dom";

const Inter2=()=>{
    return (
        <div className="header-wraper" style={{"background": "radial-gradient(50% 50% at 50% 50%, #DAAC78 0%, rgba(218, 172, 120, 0) 100%)"}}>
        <NavbarA/>
        <div className="card-control" style={{"padding-top":"3rem"}}>
        <div className="card" style={{"width": "26rem"}}>
           
            <img className="card-img-top" src={exercise} alt="Card image cap" style={{"height":"40rem"}}/>
            
       
        </div>
        <div className="card" style={{"width": "26rem"}}>
        <Link to="/chatbot">
        <img className="card-img-top" src={chatbots} alt="Card image cap" style={{"height":"40rem"}}/>
        </Link>
        </div>
        </div>
    

        </div>
    );
}

export default Inter2