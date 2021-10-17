import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand className="">
            <img
              width="150"
              height="40"
              src="https://i.ibb.co/pQXjBH9/logo2.png"
              alt=""
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/our-team">
              <Nav.Link>Our Team</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/signin">
              <Nav.Link>Log in</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
