import React from 'react';
import {Link,useHistory} from 'react-router-dom'
const UserProfile = () => {
  const history=useHistory()
  return (
      <>
        <Link href="#" class="nav-Link dropdown-toggle text-white" data-toggle="dropdown">
              <img src={'dist/img/user2-160x160.jpg'} class="user-image" alt="User Image" alt='no img'/>
            </Link>
            <ul class="dropdown-menu dropdown-menu-right">
 
              <li class="user-header">
                <img src={'dist/img/user2-160x160.jpg'} class="img-circle" alt="User Image" alt='no img'/>

                <p>
                  Dr.Bhatra
                  
                </p>
              </li>
              <li class="user-body">
                <div class="row">
                </div>
              </li>
              <li class="d-flex justify-content-between py-2 px-1">
                <div class="pull-left">
                <Link to="/doctor/profile" class="btn btn-default btn-flat">Profile</Link>
                </div>
                <div class="pull-right">
                  <button class="btn btn-default btn-flat"
                  onClick={()=>{
                    localStorage.removeItem('islogin')
                    localStorage.removeItem('user')
                    localStorage.removeItem('url')
                    localStorage.removeItem('col')
                    localStorage.removeItem('sidebtn')
                    localStorage.removeItem('name')
                    history.push('/')
                  }}
                  >Sign out</button>
                </div>
              </li>
            </ul>
          
      </>
  );
}

export default UserProfile;
