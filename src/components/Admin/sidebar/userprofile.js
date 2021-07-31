import React from 'react';
import {Link} from 'react-router-dom'

const userprofile = (props) => {
  return (
    
    <Link to="/admin/profile" className="user-panel border-bottom font-weight-bold mt-3 pb-3 mb-3 d-flex align-items-center" >
        <div className="image">
          <img src={'dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt='no img'/>
        </div>
        <div className="info ">
  <Link to='/admin/profile' className="text-black text-md text-capitalize">{localStorage.getItem('name')?localStorage.getItem('name'):'Abhinav'}</Link>
  <Link to='/admin/profile'  className="d-block text-black text-xs">Admin</Link>

        </div>
      </Link>

  );
}

export default userprofile;
