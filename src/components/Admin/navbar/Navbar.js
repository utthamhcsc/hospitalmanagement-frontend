import React from 'react';
import ToggleButton from './ToggleButton'

import NavList from './NavList'
const Navbar = () => {
  return (
    <nav className="main-header  navbar navbar-expand navbar-white elevation-2  navbar-light border-bottom"  style={{maxHeight:'60px !important'}}>
      <ToggleButton />
      
      <NavList/>
    
    </nav>
  );
}

export default Navbar;
