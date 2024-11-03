import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./file.css";

const NavBar = (props) => {
  return (
    <div className='a'>
      <Navbar expand="lg" className="fixed-top" style={{ backgroundColor: "	#81b1ce" }}> {/* Changed background color to brown */}
        <Container>
          <Navbar.Brand as={Link} to="/"><strong>CryptoAlert</strong></Navbar.Brand> {/* Update Brand to use Link */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className='bold'>Home</Nav.Link> {/* Update links to use 'to' instead of 'href' */}
              <Nav.Link as={Link} to="/About" className='bold'>About us</Nav.Link>
              <Nav.Link as={Link} to="/Business" className='bold'>Bitcoin </Nav.Link>
              <Nav.Link as={Link} to="/Entertainment" className='bold'>Ethereum</Nav.Link>
              <Nav.Link as={Link} to="/Health" className='bold'>Tether</Nav.Link>
              <Nav.Link as={Link} to="/Science" className='bold'>Binance Coin </Nav.Link>
              <Nav.Link as={Link} to="/Sports" className='bold'>Solana </Nav.Link>
              <Nav.Link as={Link} to="/Technology" className='bold'>Dogecoin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
