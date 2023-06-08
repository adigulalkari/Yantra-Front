// import React from "react";
// import {Button, Alert, Row, Col} from 'react-bootstrap';
// import LeftSide from "../components/Leftside";
// import Menu from "../components/Menu";
// import RightSide from "../components/Rightside";
import Navbar from "../components/Navbar"
import React,{useState} from "react";
import loginlogo from "../images/login-logo.png";
import {BrowserRouter, Route, Link } from "react-router-dom";

const Login=()=>{

    const handleOnClick=()=>{
        fetch('http://localhost:1000/api/users/login')
        .then(response => response.json())
        .then(data => {
            if(data.status === 'success'){
            console.log(data.data);
            }
        })
      .catch(err => console.log(err));
      
      };
    
    const[usrnm,setUsrnm]=useState(0);
    const[psw,setPsw]=useState(0);
    return (

<section style={{"padding-top":"3rem"}}>

  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{"background": "40rem 0rem radial-gradient(50% 50% at 50% 50%, #DAAC79 0%, rgba(218, 172, 120, 0) 100%)"}}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
        <img className="card-img-top" src={loginlogo} alt="Card image cap" style={{"height":"28rem"}}/>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
              <div className="form-outline mb-4">
                  <input onChange={(event)=>setUsrnm(event.target.value)} type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input onChange={(event)=>setPsw(event.target.value)} type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked /> */}
                  {/* <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label> */}
                </div>
                  <Link to="/landing">
                  <button onClick={handleOnClick}  type="submit" className="btn btn-block mb-4" style={{"color":"#DAAC78"}}>
                 Log In
                </button>
                  </Link>
                

                <div className="text-center">
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

        );
    }





// const Intro=()=>{
//     return (
//         <div classNameNameNameName="header-wraper">
//             <Navbar/>
//             <div classNameNameNameName="main-info">
//                 {/* <a href="#" classNameNameNameName="btn-main-offer" style={{"text-decoration":"none"}}>Contact</a> */}
//                 <Menu />
//                 <Row classNameNameNameName="landing">
//                 <Col ><LeftSide /></Col>
                
//                 <Col ><RightSide /></Col>
//                 </Row>
//             </div>
//         </div>
//     );
// }

 export default Login