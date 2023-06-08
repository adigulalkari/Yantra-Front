import React from "react";
import NavbarA from "../components/NavbarA"

const Respondrequest=()=>{
    function handleClick(e){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwOWM0NjkzOTMzMzFjMzIzNWU2MDEiLCJpYXQiOjE2ODYyMTM5ODMsImV4cCI6MTY4NjY0NTk4M30.64TfskhWI2S2jn1GFFhpzLo_98UrtbrIhVjjeE4zk_0'},
            body: JSON.stringify({ username:"saisreekar"})
        };
        fetch('http://localhost:1000/api/users/friends/accept', requestOptions)
        .then(response=>response.json())
        .then(data=>console.log(data))
    }

    // function handleReject(e){

    // }

    return (
        <div className="container">
                <NavbarA/>
                    <div className="row height d-flex justify-content-center align-items-center">
                      <div className="col-md-8" style={{"padding-top":"10%"}}>
                        <h5>Pending Requests</h5>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button onClick={handleClick} className="btn btn-dark">Accept</button>
                            <button className="btn btn-dark">Reject</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">Accept</button>
                            <button className="btn btn-dark">Reject</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">Accept</button>
                            <button className="btn btn-dark">Reject</button>
                        </div>
                        <br></br>
                        <div className="newfriend">
                            <p className="paraforname">Shubham</p>
                            <button className="btn btn-dark">Accept</button>
                            <button className="btn btn-dark">Reject</button>
                        </div>
                        
                      </div>
                      
                    </div>
                </div>
    );
}

export default Respondrequest