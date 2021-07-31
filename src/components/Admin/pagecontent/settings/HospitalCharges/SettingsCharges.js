import React from 'react'
import { BrowserRouter, Route, Switch, useLocation, Link } from 'react-router-dom'
import ChargeDetails from './ChargeDetails'
import ChargeCategory from './ChargeCategory'
import DoctorOpdCharges from './DoctorOpdCharges'


export default function SettingsCharges(props) {
    
    return (
<div className='row'>
<div className='col-md-2 w-100'>
    <ul className='list-group'>
            <Link to='/admin/settings/charges/' className='list-group-item'>Charges</Link>
            <Link to='/admin/settings/charges/chargeCategory' className='list-group-item'>Charges Category</Link>
            <Link className='list-group-item' to='/admin/settings/charges/doctorOpdCharges'>Doctor Opd Charge</Link>
            
       
        </ul>

</div>
<div className='col-md-10'>
<Switch>
            
            <Route path={'/admin/settings/charges/chargeCategory'} render={()=><ChargeCategory/>}/>
            <Route path={'/admin/settings/charges/doctorOpdCharges'} render={()=><DoctorOpdCharges/>}/>
            <Route path='' render={()=><ChargeDetails/>}/>
          
                </Switch>
    
</div>
      </div>
    )
}
