import React from 'react';
import './Header.css';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar className= "Nav">
        <NavbarBrand className= "logo">
          <div className= "letterC">C</div>
          <div className ="conversation">onversation </div>
          <div className="letterO"> O</div>
          <div className="oracle">racle</div>
        </NavbarBrand>
      </Navbar>
    );
  }
}

export default Header;
