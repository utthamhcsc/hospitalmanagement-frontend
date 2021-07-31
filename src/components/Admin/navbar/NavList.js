import React from 'react';
import NavSearch from './NavSearch'
import Notification from './Notification'
import UserProfile from './UserProfile'
const NavList = () => {
  return (<div className='ml-auto d-flex'>
    <NavSearch/>
    <ul className="navbar-nav ">
      <li className="nav-item">
        
        
        
      </li>
      {/* <li className="nav-item dropdown m-2 text-white" >
        <Notification />
      </li> */}
      <li class="dropdown user user-menu m-2">
         <UserProfile/>
      </li>
    </ul>
    </div>
  );
}

export default NavList;
