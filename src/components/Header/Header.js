import React from 'react';
import logo from'./../../images/Coursera-logo.png'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
 
  return (
    <div className='header'>
     
    
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img  src={logo} alt=""/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#enroll">Enrolled</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </div>
  );
};

export default Header;