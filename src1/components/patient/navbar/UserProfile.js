import React from 'react';
import {Link,useHistory} from 'react-router-dom'
const UserProfile = (props) => {
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
                  {localStorage.getItem('name')?localStorage.getItem('name'):'Patient'}
                  
                </p>
                <p>
                  {localStorage.getItem('userId')?localStorage.getItem('userId'):'PatientId'}
                  
                </p>
              
              </li>
              <li class="user-body">
                <div class="row">
                </div>
              </li>
              <li class="d-flex justify-content-between py-2 px-1">
                <div class="pull-left">
                  <a href="#profile" data-toggle='modal' class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <button class="btn btn-default btn-flat"
                  onClick={()=>{
                    localStorage.removeItem('islogin')
                    localStorage.removeItem('userId')
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
