import React from 'react'
import { BrowserRouter, Route, Switch, useLocation, Link } from 'react-router-dom'
import Supplier from './Supplier'
import MedicineDosage from './MedicineDosage'
import MedicineCategory from './MedicineCategory'
import Source from './Source'
import ComplainType from './ComplainType'
import Purpose from './Purpose'


export default function SettingsFrontOffice(props) {
     
    return (
<div className='row'>
<div className='col-md-2 w-100'>
    <ul className='list-group'>
            <Link to='/admin/settings/frontOffice/' className='list-group-item'>Purpose</Link>

            <Link to='/admin/settings/frontOffice/complainType' className='list-group-item'>Complain Type</Link>
            
            <Link className='list-group-item' to='/admin/settings/frontOffice/source'>Source</Link>
            
       
        </ul>

</div>
<div className='col-md-10'>
<Switch>
            
            <Route path={'/admin/settings/frontOffice/source'} render={()=><Source/>}/>
            <Route path={'/admin/settings/frontOffice/complainType'} render={()=><ComplainType/>}/>
            <Route path='' render={()=><Purpose/>}/>
          
                </Switch>
    
</div>
      </div>
    )
}
