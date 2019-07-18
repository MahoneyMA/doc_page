import React from "react"
import { Link } from 'react-router-dom'
import {Navbar, Nav } from 'react-bootstrap'
function Header(props){
  return(
      <Navbar sticky = "top" bg = "light" expand= "lg">
        <Navbar.Brand>
          <Link className = "Name" to= "/">
            <img
              src = "/Logo.jpg"
              width="50"
              height = "50"
              className = 'd-inline-block align-top'
              alt='Home'
            />
          {' Milner Vain and Vascular'}
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-end">
        <Nav className="justify-content-end">
          <Link to = '/meet'   className = 'Header-Link'>The Doctor </Link>
          <Link to = '/services' className = 'Header-Link'>Services </Link>
          <Link to = '/contact'  className = 'Header-Link'>Contact Us  </Link>
          <Link to = '/review'   className = 'Header-Link'>Review </Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
  )}


export default Header
