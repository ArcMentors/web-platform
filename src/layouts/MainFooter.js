import React from "react";
import {Container, Row, Nav, NavLink, NavItem} from 'react-bootstrap';
import { Link } from "react-router-dom";

const MainFooter = ({ contained, menuItems, copyright }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top fixed-bottom">
    <Container fluid={contained}>
      <Row>
        <span className="copyright ml-auto my-auto mr-2">Powered by <a href="https://www.arcmentors.com/platforms">ArcMentors Platforms</a></span>
      </Row>
    </Container>
  </footer>
);

export default MainFooter;
