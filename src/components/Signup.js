// import React from "react";
// import {Button, Alert, Row, Col} from 'react-bootstrap';
// import LeftSide from "../components/Leftside";
// import Menu from "../components/Menu";
// import RightSide from "../components/Rightside";
// import Navbar from "../components/Navbar"

// const Intro=()=>{
//     return (
//         <div className="header-wraper">
//             <Navbar/>
//             <div className="main-info">
//                 {/* <a href="#" className="btn-main-offer" style={{"text-decoration":"none"}}>Contact</a> */}
//                 <Menu />
//                 <Row className="landing">
//                 <Col ><LeftSide /></Col>
                
//                 <Col ><RightSide /></Col>
//                 </Row>
//             </div>
//         </div>
//     );
// }

// export default Intro



import React, { Component } from "react";
import handshake from "../images/handshake.png";
import {BrowserRouter, Route, Link } from "react-router-dom";

export default class Signup extends Component {
    render() {
        return (
            <section>
  <div className="px-1 py-1 px-md-1 text-center text-lg-start" style={{"background": "70rem 40rem radial-gradient(50% 50% at 50% 50%, #DAAC79 0%, rgba(218, 172, 120, 0) 100%)"}}>
    <div className="container" >
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
            <img className="card-img-top" src={handshake} alt="Card image cap"/>
          {/* <h1 className="my-5 display-3 fw-bold ls-tight">
            The best offer <br />
            <span className="change-span" style={{"color":"#DAAC78"}}>for your business</span>
          </h1>
          <p style={{"color": "black"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p> */}
          
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
                {/* <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" />
                      <label className="form-label" for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div> */}
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" />
                      <label className="form-label" for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Mobile No.</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Age</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Location</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Hobbies</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Interests</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Health Vulnerabilities</label>
                </div>


                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>
                

                {/* <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div> */}
                <Link to="/landing">
                <button type="submit" className="btn  btn-block mb-4" style={{"padding-left":"4rem;background-color:#DAAC78"}}>
                Sign Up
                </button>
                </Link>
                

                <div className="text-center">
                  {/* <p>or sign up with:</p> */}
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
}