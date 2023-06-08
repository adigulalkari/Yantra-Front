import React from "react";
import NavbarA from "../components/NavbarA"

const Respondrequest=()=>{
    return (
        <div className="container">
                <NavbarA/>
                    <div className="row height d-flex justify-content-center align-items-center">
                      <div className="col-md-8" style={{"padding-top":"10%"}}>
                        <h5>Pending Requests</h5>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">Accept</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">Accept</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">Accept</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">Accept</button>
                        </div>
                        
                      </div>
                      
                    </div>
                </div>
    );
}

export default Respondrequest