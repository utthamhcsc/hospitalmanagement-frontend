import React from 'react'
import { BrowserRouter, Route, Switch, useLocation, Link } from 'react-router-dom'
import Designation from './Designation'
import Department from './Department'
import LeaveType from './LeaveType'

export default function HumanResourceSetting(props) {
     
    return (
<div className='row'>
<div className='col-md-2 w-100'>
    <ul className='list-group'>
    <Link to='/admin/settings/humanresource/leaveType' className='list-group-item'>Leave Type</Link>
    <Link to='/admin/settings/humanresource/Department' className='list-group-item'>Department</Link>
    <Link to='/admin/settings/humanresource/Designation' className='list-group-item'>Designation</Link>
        </ul>

</div>
<div className='col-md-10'>
<Switch>
            
<Route path={'/admin/settings/humanresource/Designation'} render={()=><Designation/>}/>

<Route path={'/admin/settings/humanresource/Department'} render={()=><Department/>}/>
            <Route path='' render={()=><LeaveType/>}/>
          
                </Switch>
    
</div>
      </div>
    )
}
