import React from "react";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import land1 from "../images/land1.png"
import land2 from "../images/land2.png"
import land3 from "../images/land3.png"
import Navbar from "../components/Navbar"

const Intro=()=>{
    return (
        <div classNameNameName="header-wraper">
            <Navbar/>
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
    <div className="card-control">
            <div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={land1} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Group Making</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={land2} alt="Card image cap" style={{"height":"23.5rem"}}/>
  <div className="card-body">
    <h5 className="card-title">Distress Call</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={land3} alt="Card image cap"  style={{"height":"23.2rem"}}/>
  <div className="card-body">
    <h5 className="card-title">AI ChatBOT</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    

        </div>
    );
}

export default Intro