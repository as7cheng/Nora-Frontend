import React from 'react';
import {Navbar,
Container,
Nav
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from './../../logo/nora_logo.jpg';
import './Navbar.css';

function Navigation() {
  return  (
  <>
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <Image width="60" height="auto" src={Logo} roundedCircle />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className= "m-auto">
            <Nav.Link href="sample">Restaurant Sample</Nav.Link>
            <Nav.Link href="query">Query</Nav.Link>
            <Nav.Link href="doc">Doc</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="donate">Donate Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};

export default Navigation;
