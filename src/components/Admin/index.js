import React from 'react'
import {Route} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import FrontOffice from './pagecontent/FrontOffice'
import Radiology from './pagecontent/Radiology/index'
import Opd from './pagecontent/Opd'
import Ipd from './pagecontent/Ipd'
import Pharmacy1 from './pagecontent/pharmacy/Pharmacy'
import Discharge from './pagecontent/Discharge'
import Profile from './pagecontent/Profile/Profile'
import IpdCharges from './pagecontent/ipdCharges'
import IpdDiagnosis from './pagecontent/IpdDiagnosis'
import IpdPrescription from './pagecontent/IpdPrescription'
import IpdPatient from './pagecontent/IpdPatient'
import ConsultantRegister from './pagecontent/ConsultantRegister'
import OpdPatient from './pagecontent/OpdPatient'
import OpdBill from './pagecontent/OpdBill'
import OpdCharges from './pagecontent/OpdCharges'
import Diagnosis from './pagecontent/Diagnosis'
import SettingsPharmacy from './pagecontent/SettingsPharmacy'
import SettingsFrontOffice from './pagecontent/SettingsFrontOffice'
import SettingsPatient from './pagecontent/settings/Patient/SettingsPatient'
import SettingsBed from './pagecontent/settings/Bed/SettingsBed'
import InventorySettings from './pagecontent/settings/inventory/InventorySettings'
import FinanceSettings from './pagecontent/settings/Finance/FinanceSettings'
import HumanResourceSetting from './pagecontent/settings/HumanResource/HumanResourceSetting'
import PathologySettings from './pagecontent/settings/Pathology/PathologySettings'
import RadiologySettings from './pagecontent/settings/Radiology/RadiologySettings'
import Tpa from './pagecontent/Tpa/Tpa'
import SettingsCharges from './pagecontent/settings/HospitalCharges/SettingsCharges'
import Staff from './pagecontent/HumanResource/index'
import Ambulance from './pagecontent/Ambulance'
import MyOpd from './pagecontent/opd/index'
import MyIpd from './pagecontent/ipd/index'
import Records from './pagecontent/Records'
import Pathology from './pagecontent/Pathology/index'
import OperationTheater from './pagecontent/OperationTheater/index'
import BloodBank from './pagecontent/BloodBank/index'
import Finance from './pagecontent/Finance/index'
import BirthOrDeath from './pagecontent/BirthRecords/index'
import ItemStock from './pagecontent/inventary/index'

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
      <Route path='/admin/itemstock' render={()=><ItemStock/>}/>
    <Route path='/admin/birthordeath' render={()=><BirthOrDeath/>} /> 
    <Route path='/admin/finance' render={()=><Finance/>} /> 
    <Route path='/admin/bloodbankstatus' render={()=><BloodBank/>} /> 
    <Route path='/admin/operationtheatre' render={()=><OperationTheater/>} /> 
 <Route path='/admin/records' render={()=><Records/>} />     
<Route path='/admin/humanResource' render={()=><Staff/>}/>       
<Route path='/admin/settings/bed' render={()=><SettingsBed/>}/>
<Route path='/admin/settings/humanResource' render={()=><HumanResourceSetting/>}/>
<Route path='/admin/settings/pathology' render={()=><PathologySettings/>}/>
<Route path='/admin/settings/radiology' render={()=><RadiologySettings/>}/>
<Route path='/admin/settings/finance' render={()=><FinanceSettings/>}/>
<Route path='/admin/settings/frontOffice' render={()=><SettingsFrontOffice/>}/>
<Route path='/admin/settings/inventory' render={()=><InventorySettings/>}/>
<Route path='/admin/settings/charges' render={()=><SettingsCharges/>}/>
<Route path='/admin/settings/pharmacy' render={()=><SettingsPharmacy/>}/>
<Route path='/admin/settings/patient' render={()=><SettingsPatient/>}/>
<Route path='/admin/appointment' render={()=><FrontOffice/>}/>
<Route path='/admin/Opd' render={()=><Opd setindex={setindex}/>}/>
<Route path='/admin/myOpd' render={()=><MyOpd />}/>
<Route path='/admin/myIpd' render={()=><MyIpd/>}/>
<Route path='/admin/Ipd' render={()=><Ipd setindex={setindex}/>}/>
<Route path='/admin/pathology' render={()=><Pathology/>}/>
<Route path='/admin/radiology' render={()=><Radiology/>}/>
<Route path='/admin/pharmacy' render={()=><Pharmacy1 setindex={setindex}/>}/>
<Route path='/admin/vehicle'render={()=><Ambulance/>}/>
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
      
       
  
 
      </section>
      </div>
        </>
    )
}
