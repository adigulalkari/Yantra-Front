import React from "react";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import land1 from "../images/land1.png"
import land22 from "../images/land22.png"
import land33 from "../images/land33.png"
import elderlink from "../images/elderlink-logo.png"
import Navbar from "../components/Navbar"
import {BrowserRouter, Route, Link } from "react-router-dom";

const Intro=()=>{
    return (
        <div className="header-wraper" style={{"background": "radial-gradient(50% 50% at 50% 50%, #DAAC78 0%, rgba(218, 172, 120, 0) 100%)"}}>

            {/* <Navbar/> */}
    {/* <section classNameNameName="button-section">
        
            <div classNameNameName="req-order">
                <button classNameName="button-3">  
                    <Link to="/order">
                        <img src={bhai}/>
                        <p>Request Order Pickup</p>
                    </Link>
                </button>
            </div>
        
        
        <div classNameName="add-my-act">
            <button classNameName="button-1">
                <img src={Group31}/>
                <p>My Activity</p>
            </button>
            
            <button classNameName="button-2">
                <Link to="/postmyact1">
                    <img src={Group30}/>
                    <p>Order History</p>
                </Link>
            </button>
            
        </div>
    </section> */}
    {/* <img src={{elderlink}}/> */}
    <div className="card-control" style={{"padding-top":"3rem"}}>
            <div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={land1} alt="Card image cap" style={{"height":"40rem"}}/>

</div>
<div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={land22} alt="Card image cap" style={{"height":"40rem"}}/>

</div>
<div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={land33} alt="Card image cap"  style={{"height":"40rem"}}/>

</div>
    </div>
    

        </div>
    );
}

export default Intro