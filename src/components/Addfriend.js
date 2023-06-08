import React from "react";
import NavbarA from "../components/NavbarA"

const Addfriend=()=>{
    return (
        <div className="container">
                <NavbarA/>
                    <div className="row height d-flex justify-content-center align-items-center">

                      <div className="col-md-8" style={{"padding-top":"10%"}}>

                        <div className="search" >
                          <i className="fa fa-search"></i>
                          <input type="text" className="form-control" placeholder="Add friend"/>
                          <button className="btn btn-dark">Search</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">+</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">+</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">+</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">+</button>
                        </div>
                        
                      </div>
                      
                    </div>
                </div>
    );
}

export default Addfriend