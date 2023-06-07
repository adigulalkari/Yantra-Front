import React from "react";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import LeftSide from "../components/Leftside";
import Menu from "../components/Menu";
import RightSide from "../components/Rightside";
import Navbar from "../components/Navbar"

const Intro=()=>{
    return (
        <div classNameName="header-wraper">
            <Navbar/>
    {/* <section classNameName="button-section">
        
            <div classNameName="req-order">
                <button className="button-3">  
                    <Link to="/order">
                        <img src={bhai}/>
                        <p>Request Order Pickup</p>
                    </Link>
                </button>
            </div>
        
        
        <div className="add-my-act">
            <button className="button-1">
                <img src={Group31}/>
                <p>My Activity</p>
            </button>
            
            <button className="button-2">
                <Link to="/postmyact1">
                    <img src={Group30}/>
                    <p>Order History</p>
                </Link>
            </button>
            
        </div>
    </section> */}
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </div>
    );
}

export default Intro