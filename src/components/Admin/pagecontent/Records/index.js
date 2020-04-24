import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PharmacyBillReport from './PharmacyBillReport'
import AppointmentReport from './AppointmentReport'
export default function index() {
    return (
        <Switch>
           <Route path='/admin/records/pharmacybillreport' render={()=><PharmacyBillReport/>}></Route> 
           <Route path='/admin/records/appointmentreport' render={()=><AppointmentReport/>}></Route> 
       
       
        </Switch>
    )
}
