import React from "react";
import NavbarA from "../components/NavbarA"

const Addfriend=()=>{
    function handleClick(e){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwOTE1MWUzMTE5MTI3ZDg2MDM3ZTQiLCJpYXQiOjE2ODYyMTMwNzgsImV4cCI6MTY4NjY0NTA3OH0.sRekGbsNbsgDsgVesLj0Slays69t31nK_N8bdUrQzng'},
            body: JSON.stringify({ username:"sai2"})
        };
        fetch('http://localhost:1000/api/users/friends', requestOptions)
        .then(response=>response.json())
        .then(data=>console.log(data))
    }
    
    return (
        <div className="container">
                <NavbarA/>
                    <div className="row height d-flex justify-content-center align-items-center">

                      <div className="col-md-8" style={{"padding-top":"10%"}}>

                        <div className="search" >
                          <i className="fa fa-search"></i>
                          <input type="text" className="form-control" placeholder="Add friend"/>
                          <button onClick={handleClick} className="btn btn-dark">Search</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button onClick={handleClick} className="btn btn-dark">+</button>
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