import React from 'react';
import { NavLink } from 'react-router-dom';

const userprofile = (props) => {
  return (
    
    <NavLink className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center shadow"  to={'/doctor/profile/'+localStorage.getItem('userId')}>
        <div className="image">
          <img src={'dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt='no img'/>
        </div>
        <div className="info ">
  <span to={'/doctor/profile/'+localStorage.getItem('userId')}style={{letterSpacing:'2px',lineHeight:'100%'}} className="text-white ml-2">{localStorage.getItem('name')?localStorage.getItem('name'):'Dr Rama'}</span>
  <span to={'/doctor/profile/'+localStorage.getItem('userId')} style={{letterSpacing:'2px',lineHeight:'100%'}} className="d-block text-white ml-2">{'Doctor'}</span>

        </div>
      </NavLink>

  );
}

export default userprofile;
