import React from 'react'
import {Route} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import FrontOffice from './pagecontent/FrontOffice'
import Radiology1 from './pagecontent/Radiology'
import MyOpd from './pagecontent/opd/index'
import MyIpd from './pagecontent/ipd/index'
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
export default function Index(props) {
  const [index,setindex]=React.useState({})
let user=JSON.parse(localStorage.getItem('user'))
    return (
      
        <>
        <Navbar {...props}/>
        <Sidebar {...props} />
        
    <div className="content-wrapper my-3"  style={{  
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
    <section className="content px-4 mt-4" >
      <div className="card shadow">
<Route path='/receptionist/appointment' render={()=><FrontOffice />}/>

<Route path='/receptionist/MyOpd' render={()=><MyOpd setindex={setindex}/>}/>
<Route path='/receptionist/MyIpd' render={()=><MyIpd setindex={setindex}/>}/>
<Route path='/receptionist/Opd' render={()=><MyOpd setindex={setindex}/>}/>
<Route path='/receptionist/Ipd' render={()=><MyIpd setindex={setindex}/>}/>
<Route path='/receptionist/pathology' render={()=><Pathology1 setindex={setindex}/>}/>
<Route path='/receptionist/radiology' render={()=><Radiology1 setindex={setindex}/>}/>
<Route path='/receptionist/pharmacy' render={()=><Pharmacy1 setindex={setindex}/>}/>
<Route path='/receptionist/visitor' render={()=><Visitor setindex={setindex}/>}/>
<Route path='/receptionist/callog' render={()=><Callog setindex={setindex}/>}/>
<Route path='/receptionist/complain' render={()=><Complain setindex={setindex}/>}/>
<Route path='/receptionist/postalReceive' render={()=><PostalReceive setindex={setindex}/>}/>
<Route path='/receptionist/postaldispatch' render={()=><PostalDispatch setindex={setindex}/>}/>
<Route path='/receptionist/discharge' render={()=><Discharge/>}/>
<Route path='/receptionist/profile/:userId' render={()=><Profile/>}/>
{/* <Route path='/receptionist/opdPatient/:patientId' render={()=><OpdPatient />}/>
       <Route path='/receptionist/diagnosis/:patientId' render={()=><Diagnosis />}/> */}
       {/* <Route path='/receptionist/profile' render={()=><Profile />}/>
        <Route path='/receptionist/patient/charges/:patientId' render={()=><OpdCharges />}/> */}
        {/* <Route path='/receptionist/patient/bill/:patientId' render={()=><OpdBill />}/> */}
       <Route path='/receptionist/inPatient/:patientId' render={()=><IpdPatient />}/>
       <Route path='/receptionist/ipd1/diagnosis/:patientId' render={()=><IpdDiagnosis />}/>
       <Route path='/receptionist/ipd1/consultentRegister/:patientId' render={()=><ConsultantRegister />}/>
       {/* <Route path='/receptionist/testreport' render={()=><TestReport setindex={setindex} />}/> */}
       <Route path='/receptionist/ipd1/ipdPresciption/:patientId' render={()=><IpdPrescription />}/>
       <Route path='/receptionist/ipd1/Charges/:patientId' render={()=><IpdCharges />}/>
       <Route path='/receptionist/opdPatient/:patientId' render={()=><OpdPatient />}/>
       <Route path='/receptionist/diagnosis/:patientId' render={()=><Diagnosis />}/>
       <Route path='/receptionist/patient/charges/:patientId' render={()=><OpdCharges />}/>
       <Route path='/receptionist/patient/bill/:patientId' render={()=><OpdBill/>}/>
  
      
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
