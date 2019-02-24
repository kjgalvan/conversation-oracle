import React from "react";
import "./Navigation.css";
import {
  Navbar,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Scenario } from "../../helpers/enums";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar className="Nav">
        <NavbarBrand className="logo">
          <div className="letterC">C</div>
          <div className="conversation">onversation </div>
          <div className="letterO"> O</div>
          <div className="oracle">racle</div>
        </NavbarBrand>
        <Nav>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Scenarios
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem
                onClick={() => {
                  this.props.onClick(Scenario.grocery);
                }}
              >
                Grocery Store
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  this.props.onClick(Scenario.school);
                }}
              >
                School
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  this.props.onClick(Scenario.park);
                }}
              >
                Park
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  this.props.onClick(Scenario.market);
                }}
              >
                Market
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
