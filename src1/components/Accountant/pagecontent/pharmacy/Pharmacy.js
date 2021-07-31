import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter, Switch,Route} from 'react-router-dom'

import PharmacyBill from './PharmacyBill'
import PharmacyMedicineStock from './PharmacyMedicineStock'
import PharmacyPurchase from './PharmacyPurchase'

export default function Pharmacy(props) {
    return (
        <Switch>
           <Route path='/accountant/pharmacy/medicinestock' render={()=><PharmacyMedicineStock/>}/>
           <Route path='/accountant/pharmacy/purchase' render={()=><PharmacyPurchase/>}/>
        <Route path='' render={()=><PharmacyBill/>}/>
        </Switch>
    )
}
