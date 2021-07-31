import React from 'react';
import ToggleButton from './ToggleButton'

import NavList from './NavList'
const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand shadow" style={{backgroundColor:'#3f51b5'}} >
      <ToggleButton />
      
      <NavList/>
    
    </nav>
  );
}

export default Navbar;
