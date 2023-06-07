// import React from "react";
// import {Button, Alert, Row, Col} from 'react-bootstrap';
// import LeftSide from "../components/Leftside";
// import Menu from "../components/Menu";
// import RightSide from "../components/Rightside";
import Navbar from "../components/Navbar"
import React from "react";

const Login=()=>{
    return (
<section>
  <div className="px-4 py-5 px-md-5 text-center text-lg-start">
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            The best offer <br />
            <span className="change-span" style={{"color":"#DAAC78"}}>for your business</span>
          </h1>
          <p style={{"color": "black"}}>
            
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
              <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked /> */}
                  {/* <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label> */}
                </div>

                <button type="submit" className="btn btn-block mb-4" style={{"color":"#DAAC78"}}>
                  Sign up
                </button>

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