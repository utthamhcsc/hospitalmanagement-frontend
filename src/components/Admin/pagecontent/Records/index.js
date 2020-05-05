import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PharmacyBillReport from './PharmacyBillReport'
import AppointmentReport from './AppointmentReport'
import IpdRecords from './IpdRecords'
import OpdRecords from './OpdRecords'
import DischargeRecords from './DischargeRecords'
import ExpiryMedicineRecords from './ExpiryMedicineRecords'
import PathologyReport from './PathologyReport'
import RadiologyReport from './RadiologyReport'
import BloodDonorReport from './BloodDonorReport'
import BloodIssueReport from './BloodIssueReport'
import AmbulanceReport from './AmbulanceReport'
import IncomeReport from './IncomeReport'
import IncomeGroupReport from './IncomeGroupReport'
import ExpenseReport from './ExpenseReport'
import ExpenseGroupReport from './ExpenseGroupReport'
import OtPatientReport from './OtPatientReport'
import BirthReport from './BirthReport'
import DeathReport from './DeathReport'
import TpaPatientReport from './TpaPatientReport'
export default function index() {
    return (
        <Switch>
           <Route path='/admin/records/pharmacybillreport' render={()=><PharmacyBillReport/>}></Route> 
           <Route path='/admin/records/appointmentreport' render={()=><AppointmentReport/>}></Route> 
           <Route path='/admin/records/radiologyreport' render={()=><RadiologyReport/>}></Route>
           <Route path='/admin/records/pathologyreport' render={()=><PathologyReport/>}></Route>
           <Route path='/admin/records/dischargereport' render={()=><DischargeRecords/>}></Route> 
           <Route path='/admin/records/expiryreport' render={()=><ExpiryMedicineRecords/>}></Route> 
           <Route path='/admin/records/opdreport' render={()=><OpdRecords/>}></Route> 
           <Route path='/admin/records/ipdreport' render={()=><IpdRecords/>}></Route>
           <Route path='/admin/records/blooddonorreport' render={()=><BloodDonorReport/>}></Route>
           <Route path='/admin/records/bloodissuereport' render={()=><BloodIssueReport/>}></Route>
           <Route path='/admin/records/ambulancereport' render={()=><AmbulanceReport/>}></Route>
           <Route path='/admin/records/incomereport' render={()=><IncomeReport/>}></Route>
           <Route path='/admin/records/incomegroupreport' render={()=><IncomeGroupReport/>}></Route>
           <Route path='/admin/records/expensereport' render={()=><ExpenseReport/>}></Route>
           <Route path='/admin/records/expensegroupreport' render={()=><ExpenseGroupReport/>}></Route>
           <Route path='/admin/records/otpatientreport' render={()=><OtPatientReport/>}></Route> 
           <Route path='/admin/records/birthreport' render={()=><BirthReport/>}></Route>
           <Route path='/admin/records/deathreport' render={()=><DeathReport/>}></Route>
           <Route path='/admin/records/tpareport' render={()=><TpaPatientReport/>}></Route>
        </Switch>
    )
}
