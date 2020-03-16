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
import BookMyAppointment from './pagecontent/bookPatientAppointment'
import DisplayForm from '../../Forms/DisplayForm'
import Discharge from './pagecontent/Discharge'
import Visits from './pagecontent/Visits'
import Diagnosis from './pagecontent/Diagnosis'
import ConsultantRegister from './pagecontent/ConsultantRegister'
import IpdDiagnosis from './pagecontent/IpdDiagnosis'
import Prescription from './pagecontent/Prescription'
import OperatioTheatre from './pagecontent/OperationTheatre'
import Ambulance from './pagecontent/Ambulance'
import BloodBank from './pagecontent/BloodBank'
import Profile from './Profile'
import { Getdata } from '../../Network/Server'
import IpdCharges from './pagecontent/ipdCharges'
import IpdPatient from './pagecontent/IpdPatient'
import IpdPrescription from './pagecontent/IpdPrescription'
//import IpdDiagnosis from './pagecontent/IpdDiagnosis copy'
import OpdBill from './pagecontent/OpdBill'
import OpdCharges from './pagecontent/OpdCharges'
import OpdPatient from './pagecontent/OpdPatient'
import Opdpatient from './pagecontent/OpdPatient'
export default function Index(props) 
{
  const [index,setindex]=React.useState({})
  
  const [patientId,setPatientId]=React.useState('USER-20200306125416');
  const [patient,setPatient]=React.useState({
    patientId:'USER-20200306125416',
       address:'asdfghj',
       gender:'male',
       phone:'7411467085',
        email:'abc@gmail.com',
        age:26,
        guardianName:'Dave Batista',
        maritalStatus:'gender'
   
  });
  React.useEffect(()=>{
    let user=window.localStorage.getItem('userId');
    if(user){
      //user=JSON.parse(user);
      console.log(user)
     setPatientId(user)
    }
//Getdata(`patientprofile/${patientId}`).then(data=>{console.log(data);setPatient(data)})
  },[])
  return (
        <>
        <Navbar {...props} />
        <Sidebar {...props} />
        <div className="content-wrapper my-3"  style={{  
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'
        }} >
       <section className="content px-4 mt-4" >
       <div className="card shadow">
       <Route path='/patient/appointment' render={()=><Appointment setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/Opd' render={()=><Opdpatient setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/Ipd' render={()=><Ipd setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/pathology' render={()=><Pathology1 setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/radiology' render={()=><Radiology1 setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/pharmacy' render={()=><Pharmacy1 setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/Visits' render={()=><Visits setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/discharge' render={()=><Discharge setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/ConsultantRegister' render={()=><ConsultantRegister setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/IpdDiagnosis' render={()=><IpdDiagnosis setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/Prescription' render={()=><Prescription setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/OperationTheatre' render={()=><OperatioTheatre setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/vehicle' render={()=><Ambulance setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/bloodbankstatus' render={()=><BloodBank setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/inPatient/:patientId' render={()=><IpdPatient />}/>
       <Route path='/patient/ipd1/diagnosis/:patientId' render={()=><IpdDiagnosis />}/>
       <Route path='/patient/ipd1/consultentRegister/:patientId' render={()=><ConsultantRegister />}/>
       {/* <Route path='/patient/testreport' render={()=><TestReport setindex={setindex} />}/> */}
       <Route path='/patient/ipd1/ipdPresciption/:patientId' render={()=><IpdPrescription />}/>
       <Route path='/patient/ipd1/Charges/:patientId' render={()=><IpdCharges />}/>
       <Route path='/patient/opdPatient/:patientId' render={()=><OpdPatient />}/>
       <Route path='/patient/diagnosis/:patientId' render={()=><Diagnosis />}/>
       <Route path='/patient/patient/charges/:patientId' render={()=><OpdCharges />}/>
       <Route path='/patient/patient/bill/:patientId' render={()=><OpdBill/>}/>
  
       <BookMyAppointment data={index} patientId={patientId}/>
     <Profile data={patient}/>
     <DisplayForm data={index}/>
        </div>
      </section>
    </div>
  </>
  )
}
