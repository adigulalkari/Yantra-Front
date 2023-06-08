import React from "react"
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
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="../landing">Home</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">How we work</a>
      </li>
      <li className="nav-item active">
        
      </li>
    </ul>
    
  </div>
  </div>
</nav>
  )
}

export default Navbar
