import React from 'react'
import { BrowserRouter, Route, Switch, useLocation, Link } from 'react-router-dom'
import Supplier from './Supplier'
import MedicineDosage from './MedicineDosage'
import MedicineCategory from './MedicineCategory'


export default function SettingsPharmacy(props) {
     
    return (
<div className='row'>
<div className='col-md-2 w-100'>
    <ul className='list-group'>
            <Link to='/pharmacist/settings/pharmacy/' className='list-group-item'>Medicine Category</Link>

            <Link to='/pharmacist/settings/pharmacy/supplier' className='list-group-item'>Supplier</Link>
            
            <Link className='list-group-item' to='/pharmacist/settings/pharmacy/medicinedosage'>Medicine Dosage</Link>
            
       
        </ul>

</div>
<div className='col-md-10'>
<Switch>
            
            <Route path={'/pharmacist/settings/pharmacy/supplier'} render={()=><Supplier></Supplier>}/>
            <Route path={'/pharmacist/settings/pharmacy/medicinedosage'} render={()=><MedicineDosage/>}/>
            <Route path='' render={()=><MedicineCategory/>}/>
          
                </Switch>
    
</div>
      </div>
    )
}
