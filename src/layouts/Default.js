import React from "react";
import PropTypes from "prop-types";
import MainFooter from './MainFooter';
import MainNavbar from './MainNavbar';
import {Container} from 'react-bootstrap';

const DefaultLayout = ({children, noNavbar, noFooter }) => (
  <div>
    {!noNavbar && <MainNavbar />}
    <Container className="mt-5 pt-5">
      {children}
    </Container> 
    {!noFooter && <MainFooter />}       
  </div>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
