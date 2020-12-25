import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import { Navbar, Nav} from 'react-bootstrap';
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";

export default function MainNavbar() {  
  const { isAuthenticated, userHasAuthenticated } = useAppContext();
  const history = useHistory();
    
  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  }
  
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand href="/">ArcMentors</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Link #1</Link>
          <Link to="/" className="nav-link">Link #2</Link>
        </Nav>
        <Nav inline> 
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}