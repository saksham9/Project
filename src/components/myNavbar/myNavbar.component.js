import React from "react";
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.jpg';
import './myNavbar.style.css';
import 'bootstrap/dist/css/bootstrap.css';


const MyNavbar=()=>{
    return(
        <>
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img src={logo} alt="My Portfolio Logo" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#Home" className="font">Home</Nav.Link>
            <Nav.Link href="#Service" className="font">Service</Nav.Link>
            <Nav.Link href="#Faq" className="font">Faq</Nav.Link>
            <Nav.Link href="#Contact" className="font">Contact</Nav.Link>
            <Link to="/login" className="btn-grad">Login / SignUp</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        </>
    )
}

export default MyNavbar;