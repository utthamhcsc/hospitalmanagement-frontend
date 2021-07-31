import React from 'react';
import {Link,useHistory} from 'react-router-dom'
const UserProfile = (props) => {
  const history=useHistory()
  return (
      <>
        <Link href="/accountant/profile" class="nav-Link dropdown-toggle text-white" data-toggle="dropdown">
              <img src={'dist/img/user2-160x160.jpg'} class="user-image" alt="User Image" alt='no img'/>
            </Link>
            <div class="dropdown-menu dropdown-menu-right">
            <div className="card card-widget widget-user p-0 m-0">
  {/* Add the bg color to the header using any of the bg-* classes */}
  <div className="widget-user-header bg-info">
    <h3 className="widget-user-username">{localStorage.getItem('name')?localStorage.getItem('name'):'Admin'}</h3>
    <h5 className="widget-user-desc">{localStorage.getItem('role')?localStorage.getItem('role'):'accountant'}</h5>
  </div>
  <div className="widget-user-image">
    <img className="img-circle elevation-2" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
  </div>
  <div className="card-footer">
    <div className="row">
      <div className="col-sm-6 border-right">
        <div className="description-block">
          <h5 className="description-header">
          <button class="btn "
                  onClick={()=>{
                   
history.push('/accountant/profile')
                  }}
                  
                  
                  >Profile</button>
          </h5>
         
        </div>
        {/* /.description-block */}
      </div>
     
      {/* /.col */}
      <div className="col-sm-6">
        <div className="description-block">
          <h5 className="description-header">
          <button class="btn "
                  onClick={()=>{
                    
                    localStorage.clear()
history.push('/')
                  }}
                  
                  
                  >Sign out</button>
          </h5>
          
        </div>
        {/* /.description-block */}
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
  </div>
</div>

            </div>
          
      </>
  );
}

export default UserProfile;
