import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UseAuth from "../../Hooks/UseAuth";

const NavBar = () => {
  const { user, logOut } = UseAuth();
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
            <LinkContainer to="/appointment">
              <Nav.Link>Appointment</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/location">
              <Nav.Link>Location</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            {user?.displayName ? (
              <div className="d-flex align-items-center ms-3">
                <span>{user?.displayName}</span>
                <button
                  onClick={logOut}
                  className="btn btn-danger rounded-pill"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                {" "}
                <LinkContainer to="/signin">
                  <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
