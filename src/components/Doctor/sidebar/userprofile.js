import React from 'react';

const userprofile = (props) => {
  return (
    
    <a className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center shadow" data-toggle='modal' href='#profile'>
        <div className="image">
          <img src={'dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt='no img'/>
        </div>
        <div className="info ">
  <span to='/dashboard'style={{letterSpacing:'2px',lineHeight:'100%'}} className="text-white ml-2">{'Dr Siddarth'}</span>
  <span to='/dashboard' style={{letterSpacing:'2px',lineHeight:'100%'}} className="d-block text-white ml-2">Doctor</span>

        </div>
      </a>

  );
}

export default userprofile;
