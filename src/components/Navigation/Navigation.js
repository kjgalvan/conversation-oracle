import React from 'react';
import {
  Navbar,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Scenario } from '../../helpers/enums';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand>conversation oracle</NavbarBrand>
        <Nav>
          <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Scenarios
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem  onClick={() => { this.props.onClick(Scenario.grocery) }} >
              Grocery Store
            </DropdownItem>
            <DropdownItem  onClick={() => { this.props.onClick(Scenario.school) }} >
              School
            </DropdownItem>
          </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
