import React from 'react'
import {Route} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import Appointment from './pagecontent/Appointment'
import Radiology1 from './pagecontent/Radiology'
import Opd from './pagecontent/Opd'
import Ipd from './pagecontent/Ipd'
import Pathology1 from './pagecontent/Pathology'
import Pharmacy1 from './pagecontent/Pharmacy'
import AddVisitor from '../../Forms/FrontOffice/AddVisitor'
import CallLog from '../../Forms/FrontOffice/CallLog'
import Callog from './pagecontent/Callog'
import GenerateBill from '../../Forms/Pharmacy/GenerateBill'
import AddNewPatient from '../../Forms/NewPatient'
import Complain from './pagecontent/Complain'
import PostalReceive from './pagecontent/PostalReceive'
import PostalDispatch from './pagecontent/PostalDispatch'
import Visitor from './pagecontent/Visitor'
import Discharge from './pagecontent/Discharge'
import Profile from './pagecontent/Profile'
import IpdCharges from './pagecontent/ipdCharges'
import IpdDiagnosis from './pagecontent/IpdDiagnosis'
import IpdPrescription from './pagecontent/IpdPrescription'
import IpdPatient from './pagecontent/IpdPatient'
import ConsultantRegister from './pagecontent/ConsultantRegister'
import OpdPatient from './pagecontent/OpdPatient'
import OpdBill from './pagecontent/OpdBill'
import OpdCharges from './pagecontent/OpdCharges'
import Diagnosis from './pagecontent/Diagnosis'
import AddStaff from '../../Forms/HumanResource/AddStaff'
import HumanResource from './pagecontent/HumanResource'
import StaffTable from './pagecontent/StaffTable'
import SettingsPharmacy from './pagecontent/SettingsPharmacy'

import SettingsFrontOffice from './pagecontent/SettingsFrontOffice'
import SettingsCharges from './pagecontent/SettingsCharges'
import SettingsBed from './pagecontent/settings/Bed/SettingsBed'
import InventorySettings from './pagecontent/settings/inventory/InventorySettings'
import FinanceSettings from './pagecontent/settings/Finance/FinanceSettings'
import HumanResourceSetting from './pagecontent/settings/HumanResource/HumanResourceSetting'
import PathologySettings from './pagecontent/settings/Pathology/PathologySettings'
import RadiologySettings from './pagecontent/settings/Radiology/RadiologySettings'
import Tpa from './pagecontent/Tpa/Tpa'
export default function Index(props) {
  const [index,setindex]=React.useState({})
    return (
        <>
        <Navbar />
        <Sidebar />
        
    <div className="content-wrapper my-3"  style={{  
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
    <section className="content px-4 mt-4" >
      <div className="card shadow">
        
<Route path='/admin/settings/bed' render={()=><SettingsBed/>}/>
<Route path='/admin/settings/humanResource' render={()=><HumanResourceSetting/>}/>
<Route path='/admin/settings/pathology' render={()=><PathologySettings/>}/>
<Route path='/admin/settings/radiology' render={()=><RadiologySettings/>}/>
<Route path='/admin/settings/finance' render={()=><FinanceSettings/>}/>
<Route path='/admin/settings/frontOffice' render={()=><SettingsFrontOffice/>}/>
<Route path='/admin/settings/inventory' render={()=><InventorySettings/>}/>
<Route path='/admin/settings/charges' render={()=><SettingsCharges/>}/>
<Route path='/admin/settings/pharmacy' render={()=><SettingsPharmacy/>}/>
<Route path='/admin/appointment' render={()=><Appointment setindex={setindex}/>}/>
<Route path='/admin/Opd' render={()=><Opd setindex={setindex}/>}/>
<Route path='/admin/Ipd' render={()=><Ipd setindex={setindex}/>}/>
<Route path='/admin/pathology' render={()=><Pathology1 setindex={setindex}/>}/>
<Route path='/admin/radiology' render={()=><Radiology1 setindex={setindex}/>}/>
<Route path='/admin/pharmacy' render={()=><Pharmacy1 setindex={setindex}/>}/>
<Route path='/admin/visitor' render={()=><Visitor setindex={setindex}/>}/>
<Route path='/admin/callog' render={()=><Callog setindex={setindex}/>}/>
<Route path='/admin/complain' render={()=><Complain setindex={setindex}/>}/>
<Route path='/admin/postalReceive' render={()=><PostalReceive setindex={setindex}/>}/>
<Route path='/admin/postaldispatch' render={()=><PostalDispatch setindex={setindex}/>}/>
<Route path='/admin/discharge' render={()=><Discharge/>}/>
 <Route path='/admin/profile' render={()=><Profile/>}/>
 <Route path='/admin/tpa' render={()=><Tpa/>}/>
       <Route path='/admin/inPatient/:patientId' render={()=><IpdPatient />}/>
       <Route path='/admin/ipd1/diagnosis/:patientId' render={()=><IpdDiagnosis />}/>
       <Route path='/admin/ipd1/consultentRegister/:patientId' render={()=><ConsultantRegister />}/>
       <Route path='/admin/ipd1/ipdPresciption/:patientId' render={()=><IpdPrescription />}/>
       <Route path='/admin/ipd1/Charges/:patientId' render={()=><IpdCharges />}/>
       <Route path='/admin/opdPatient/:patientId' render={()=><OpdPatient />}/>
       <Route path='/admin/diagnosis/:patientId' render={()=><Diagnosis />}/>
       <Route path='/admin/patient/charges/:patientId' render={()=><OpdCharges />}/>
       <Route path='/admin/patient/bill/:patientId' render={()=><OpdBill/>}/>
       <Route path='/admin/staff' render={()=><HumanResource/>}/>
       <Route path='/admin/addstaff' render={()=><AddStaff/>}/>
       
  
      
<AddNewPatient data={{}}/>
<GenerateBill data={{}}/>
{/* 
<BookMyAppointment data={index}/>
    <AddPat data={index} />
    <Radiology data={index}/> 
    <Pathology data={index}/> 
    <PurchaseMedicine data={index}/>
    <AddMedicine data={index}/>
    <GenerateBill data={index}/>
    <IPDAddpat data={index}/>
    <AddPatient data={index}/>
    <AddComplain data={index}/>
    <AddDispatch data={index}/>
    <AddReceive data={index}/>
    <CallLog data={index} />
    <AddVisitor data={index} />
    <ImportMedicine data={index} />
    <AddNewPatient data={index}/>
    <DisplayForm data={index}/> */}
      </div>
      </section>
      </div>
        </>
    )
}
