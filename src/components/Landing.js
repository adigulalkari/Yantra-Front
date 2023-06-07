import React from "react";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import LeftSide from "../components/Leftside";
import Menu from "../components/Menu";
import RightSide from "../components/Rightside";
import Navbar from "../components/Navbar"

const Intro=()=>{
    return (
        <div className="header-wraper">
            <Navbar/>
            <h1>landing page</h1>
        </div>
    );
}

export default Intro