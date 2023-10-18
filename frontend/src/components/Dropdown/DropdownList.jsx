import React, { useState } from "react";
// import Navigation from '../Navigation';
import "./DropdownList.css";
import { PiUserCircleDuotone } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownList() {
  // const [ display, setDisplay ] = useState( 'none' )
  // const sessionUser = useSelector(state => state.session.user);
  function handleClick() {
    // if ( display === 'none' ) {
    //     setDisplay( 'block' )
    // } else {
    //     setDisplay( 'none' )
    // }
  }

  // function handleClick2() {
  //     setDisplay( 'none' )
  // }




  return (
    <Dropdown>
      <Dropdown.Toggle className="dropdown-button" variant="none" id="dropdown-profile">
        <RxHamburgerMenu size={32} className="icons-hamburger" />
        <PiUserCircleDuotone size={32} className="icons-user" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item as="button" href="#/signup">Sign Up</Dropdown.Item>
          <Dropdown.Item as="button" href="#/action-2">Login</Dropdown.Item>
          <Dropdown.Item as="button" href="#/action-3">Demo Login</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as="button" href="#/action-3">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { DropdownList };
