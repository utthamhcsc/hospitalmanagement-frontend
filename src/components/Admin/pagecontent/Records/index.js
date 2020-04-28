import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PharmacyBillReport from './PharmacyBillReport'
import AppointmentReport from './AppointmentReport'
import IpdRecords from './IpdRecords'
import OpdRecords from './OpdRecords'
import DischargeRecords from './DischargeRecords'
import ExpiryMedicineRecords from './ExpiryMedicineRecords'
export default function index() {
    return (
        <Switch>
           <Route path='/admin/records/pharmacybillreport' render={()=><PharmacyBillReport/>}></Route> 
           <Route path='/admin/records/appointmentreport' render={()=><AppointmentReport/>}></Route> 
       
           <Route path='/admin/records/dischargereport' render={()=><DischargeRecords/>}></Route> 
           <Route path='/admin/records/expiryreport' render={()=><ExpiryMedicineRecords/>}></Route> 
           <Route path='/admin/records/opdreport' render={()=><OpdRecords/>}></Route> 
           <Route path='/admin/records/ipdreport' render={()=><IpdRecords/>}></Route> 
       
        </Switch>
    )
}
