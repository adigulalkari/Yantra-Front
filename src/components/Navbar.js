import React from "react"
import logo from "../logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">How work</a>
      </li> */}
      <li className="nav-item active">
        <Link to="/login">
          <a className="nav-link" href="#">Login</a>
        </Link>
        
      </li>
      <li className="nav-item active">
        <Link to="/signup">
          <a className="nav-link" href="#">Signup</a>
        </Link>
        
      </li>
    </ul>
    
  </div>
  </div>
</nav>
  )
}

export default Navbar
