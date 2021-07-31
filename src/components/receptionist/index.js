import React from 'react'
import {Route,Switch} from 'react-router-dom'
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
import FinanceSettings from './pagecontent/settings/Finance/FinanceSettings'
import Tpa from './pagecontent/Tpa/Tpa'
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
import NoticeBoard from './pagecontent/Messaging/index'
import NewMassege from './pagecontent/Messaging/NewMessage'
import SendEmail from './pagecontent/Messaging/SendEmail'
import Home from './pagecontent/home'

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
      <Switch>
      <Route path='/receptionist/itemstock' render={()=><ItemStock/>}/>
    <Route path='/receptionist/birthordeath' render={()=><BirthOrDeath/>} /> 
    <Route path='/receptionist/finance' render={()=><Finance/>} /> 
    <Route path='/receptionist/bloodbankstatus' render={()=><BloodBank/>} /> 
    <Route path='/receptionist/operationtheatre' render={()=><OperationTheater/>} /> 
 <Route path='/receptionist/records' render={()=><Records/>} />     
<Route path='/receptionist/humanResource' render={()=><Staff/>}/>       
<Route path='/receptionist/settings/finance' render={()=><FinanceSettings/>}/>
<Route path='/receptionist/appointment' render={()=><FrontOffice/>}/>
<Route path='/receptionist/Opd' render={()=><Opd setindex={setindex}/>}/>
<Route path='/receptionist/myOpd' render={()=><MyOpd />}/>
<Route path='/receptionist/myIpd' render={()=><MyIpd/>}/>
<Route path='/receptionist/Ipd' render={()=><Ipd setindex={setindex}/>}/>
<Route path='/receptionist/pathology' render={()=><Pathology/>}/>
<Route path='/receptionist/radiology' render={()=><Radiology/>}/>
<Route path='/receptionist/pharmacy' render={()=><Pharmacy1 setindex={setindex}/>}/>
<Route path='/receptionist/vehicle'render={()=><Ambulance/>}/>
<Route path='/receptionist/discharge' render={()=><Discharge/>}/>
 <Route path='/receptionist/profile' render={()=><Profile/>}/>
 <Route path='/receptionist/tpa' render={()=><Tpa/>}/>
 <Route path='/receptionist/inPatient/:patientId' render={()=><IpdPatient />}/>
 <Route path='/receptionist/ipd1/diagnosis/:patientId' render={()=><IpdDiagnosis />}/>
 <Route path='/receptionist/ipd1/consultentRegister/:patientId' render={()=><ConsultantRegister />}/>
 <Route path='/receptionist/ipd1/ipdPresciption/:patientId' render={()=><IpdPrescription />}/>
 <Route path='/receptionist/ipd1/Charges/:patientId' render={()=><IpdCharges />}/>
 <Route path='/receptionist/opdPatient/:patientId' render={()=><OpdPatient />}/>
 <Route path='/receptionist/diagnosis/:patientId' render={()=><Diagnosis />}/>
 <Route path='/receptionist/patient/charges/:patientId' render={()=><OpdCharges />}/>
 <Route path='/receptionist/patient/bill/:patientId' render={()=><OpdBill/>}/>
 <Route path='/receptionist/messaging' render={()=><NoticeBoard/>}/>
       <Route path='/receptionist/messaging/newmessage' render={()=><NewMassege/>}/>
       <Route path='/receptionist/messaging/sendemail' render={()=><SendEmail/>}/>
       <Route path='/receptionist' render={()=><Home/>}/>
       </Switch>
      
       
  
 
      </section>
      </div>
        </>
    )
}
