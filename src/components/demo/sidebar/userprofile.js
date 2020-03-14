import React from 'react';
import {Link} from 'react-router-dom'

const userprofile = (props) => {
  return (
    
    <Link to="/receptionist/profile" className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center shadow" >
        <div className="image">
          <img src={'dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt='no img'/>
        </div>
        <div className="info ">
  <Link to='/dashboard'style={{letterSpacing:'2px',lineHeight:'100%'}} className="text-white">{'sdfg'}</Link>
  <Link to='/dashboard' style={{letterSpacing:'2px',lineHeight:'100%'}} className="d-block text-white">sdfgh</Link>

        </div>
      </Link>

  );
}

export default userprofile;
