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
      <Route path='/accountant/itemstock' render={()=><ItemStock/>}/>
    <Route path='/accountant/birthordeath' render={()=><BirthOrDeath/>} /> 
    <Route path='/accountant/finance' render={()=><Finance/>} /> 
    <Route path='/accountant/bloodbankstatus' render={()=><BloodBank/>} /> 
    <Route path='/accountant/operationtheatre' render={()=><OperationTheater/>} /> 
 <Route path='/accountant/records' render={()=><Records/>} />     
<Route path='/accountant/humanResource' render={()=><Staff/>}/>       
<Route path='/accountant/settings/finance' render={()=><FinanceSettings/>}/>
<Route path='/accountant/appointment' render={()=><FrontOffice/>}/>
<Route path='/accountant/Opd' render={()=><Opd setindex={setindex}/>}/>
<Route path='/accountant/myOpd' render={()=><MyOpd />}/>
<Route path='/accountant/myIpd' render={()=><MyIpd/>}/>
<Route path='/accountant/Ipd' render={()=><Ipd setindex={setindex}/>}/>
<Route path='/accountant/pathology' render={()=><Pathology/>}/>
<Route path='/accountant/radiology' render={()=><Radiology/>}/>
<Route path='/accountant/pharmacy' render={()=><Pharmacy1 setindex={setindex}/>}/>
<Route path='/accountant/vehicle'render={()=><Ambulance/>}/>
<Route path='/accountant/discharge' render={()=><Discharge/>}/>
 <Route path='/accountant/profile' render={()=><Profile/>}/>
 <Route path='/accountant/tpa' render={()=><Tpa/>}/>
 <Route path='/accountant/inPatient/:patientId' render={()=><IpdPatient />}/>
 <Route path='/accountant/ipd1/diagnosis/:patientId' render={()=><IpdDiagnosis />}/>
 <Route path='/accountant/ipd1/consultentRegister/:patientId' render={()=><ConsultantRegister />}/>
 <Route path='/accountant/ipd1/ipdPresciption/:patientId' render={()=><IpdPrescription />}/>
 <Route path='/accountant/ipd1/Charges/:patientId' render={()=><IpdCharges />}/>
 <Route path='/accountant/opdPatient/:patientId' render={()=><OpdPatient />}/>
 <Route path='/accountant/diagnosis/:patientId' render={()=><Diagnosis />}/>
 <Route path='/accountant/patient/charges/:patientId' render={()=><OpdCharges />}/>
 <Route path='/accountant/patient/bill/:patientId' render={()=><OpdBill/>}/>
      
       
  
 
      </section>
      </div>
        </>
    )
}
