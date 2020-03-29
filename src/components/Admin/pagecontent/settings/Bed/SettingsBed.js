import React from 'react'
import { BrowserRouter, Route, Switch, useLocation, Link } from 'react-router-dom'
import Supplier from '../../Supplier'
import MedicineDosage from '../../MedicineDosage'
import MedicineCategory from '../../MedicineCategory'
import BedType from './BedType'
import BedStatus from './BedStatus'
import BedGroup from './BedGroup'
import Bed from './Bed'
import Floor from '../../Floor'


export default function SettingsBed(props) {
     
    return (
<div className='row'>
<div className='col-md-2 w-100'>
    <ul className='list-group'>
    <Link to='/admin/settings/bed/' className='list-group-item'>Bed Staus</Link>

    <Link to='/admin/settings/bed/bed' className='list-group-item'>Bed</Link>

            <Link to='/admin/settings/bed/bedType' className='list-group-item'>Bed Type</Link>

            <Link to='/admin/settings/bed/bedGroup' className='list-group-item'>Bed Group</Link>
            
            <Link className='list-group-item' to='/admin/settings/bed/floor'>Floor</Link>
            
       
        </ul>

</div>
<div className='col-md-10'>
<Switch>
            
<Route path={'/admin/settings/bed/bed'} render={()=><Bed/>}/>

<Route path={'/admin/settings/bed/floor'} render={()=><Floor/>}/>
            <Route path={'/admin/settings/bed/bedType'} render={()=><BedType/>}/>
            <Route path={'/admin/settings/bed/bedGroup'} render={()=><BedGroup/>}/>
            <Route path='' render={()=><BedStatus/>}/>
          
                </Switch>
    
</div>
      </div>
    )
}
