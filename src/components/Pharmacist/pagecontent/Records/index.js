import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PharmacyBillReport from './PharmacyBillReport'
import ExpiryMedicineRecords from './ExpiryMedicineRecords'
export default function index() {
    return (
        <Switch>
           <Route path='/pharmacist/records/pharmacybillreport' render={()=><PharmacyBillReport/>}></Route> 
           <Route path='/pharmacist/records/expiryreport' render={()=><ExpiryMedicineRecords/>}></Route> 
         </Switch>
    )
}
