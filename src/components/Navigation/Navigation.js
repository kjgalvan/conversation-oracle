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
            <DropdownItem>
              Grocery Store
            </DropdownItem>
            <DropdownItem>
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
