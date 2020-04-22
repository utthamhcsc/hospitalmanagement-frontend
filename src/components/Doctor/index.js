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
import AddSchedule from './pagecontent/AddSchedule'
import Myshedule from './pagecontent/MySchedule'
import { Getdata } from '../../Network/Server'
import OpdPatient from './pagecontent/OpdPatient'
import Addprescription from '../../Forms/Addprescription'
import Profile from './pagecontent/Profile/Profile'
import AddDiagnosis from './pagecontent/AddDiagnosis'
import ReactTooltip from 'react-tooltip'
import OpdCharges from './pagecontent/OpdCharges'
import OpdBill from './pagecontent/OpdBill'
import IpdPatient from './pagecontent/IpdPatient'
import IpdCharges from './pagecontent/ipdCharges'
import IpdPrescription from './pagecontent/IpdPrescription'
import  TestReport from './pagecontent/TestReport'
import MyIpd from './pagecontent/ipd/index'
import MyOpd from './pagecontent/opd/index'
export default function Index() 
{
  const [index,setindex]=React.useState({})
  
  const [doctorId,setDoctorId]=React.useState(localStorage.getItem('userId'));
  const [doctor,setDoctor]=React.useState({
    doctorId:'P-20200212115220',
       address:'asdfghj',
       gender:'male',
       phone:'7411467085',
        email:'abc@gmail.com',
        age:26,
        guardianName:'Dave Batista',
        maritalStatus:'gender'
   
  });
  React.useEffect(()=>{
    
      let user=localStorage.getItem('userId');
   if(typeof(user)=='string'){setDoctorId(user)};
//Getdata(`doctorprofile/${doctorId}`).then(data=>{console.log(data);setDoctor(data)})
//alert(user)
  },[])
  return (
        <>
        <Navbar />
        <Sidebar/>
        <div className="content-wrapper my-3"  style={{  
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'
        }} >
       <section className="content px-4 mt-4 rounded" >
       <div className="card shadow">
       <Route path='/doctor/myOpd' render={()=><MyOpd />}/>
<Route path='/doctor/myIpd' render={()=><MyIpd/>}/>
         
         <Route path='/doctor/appointment' render={()=><Appointment setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/Opd' render={()=><MyOpd setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/Ipd'  render={()=><MyIpd setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/pathology' render={()=><Pathology1 setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/radiology' render={()=><Radiology1 setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/pharmacy' render={()=><Pharmacy1 setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/Visits' render={()=><Visits setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/discharge' render={()=><Discharge setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/ConsultantRegister' render={()=><ConsultantRegister setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/IpdDiagnosis' render={()=><IpdDiagnosis setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/Prescription' render={()=><Prescription setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/OperationTheatre' render={()=><OperatioTheatre setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/vehicle' render={()=><Ambulance setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/bloodbankstatus' render={()=><BloodBank setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/addschedule' render={()=><AddSchedule doctorId={doctorId}/>}/>
       <Route path='/doctor/schedule' render={()=><Myshedule doctorId={doctorId}/>}/>
       <Route path='/doctor/opdPatient/:patientId' render={()=><OpdPatient doctorId={doctorId}/>}/>
       <Route path='/doctor/addprescription' render={()=><Addprescription doctorId={doctorId}/>}/>
       <Route path='/doctor/diagnosis/:patientId' render={()=><Diagnosis doctorId={doctorId}/>}/>
       <Route path='/doctor/profile/:userId' render={()=><Profile doctorId={doctorId}/>}/>
       <Route path='/doctor/adddiagnosis' render={()=><AddDiagnosis doctorId={doctorId}/>}/>
       <Route path='/doctor/patient/charges/:patientId' render={()=><OpdCharges doctorId={doctorId}/>}/>
       <Route path='/doctor/patient/bill/:patientId' render={()=><OpdBill doctorId={doctorId}/>}/>
       <Route path='/doctor/inPatient/:patientId' render={()=><IpdPatient doctorId={doctorId}/>}/>
       <Route path='/doctor/ipd1/diagnosis/:patientId' render={()=><IpdDiagnosis doctorId={doctorId}/>}/>
       <Route path='/doctor/ipd1/consultentRegister/:patientId' render={()=><ConsultantRegister doctorId={doctorId}/>}/>
       <Route path='/doctor/testreport' render={()=><TestReport setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/ipd1/ipdPresciption/:patientId' render={()=><IpdPrescription doctorId={doctorId}/>}/>
       <Route path='/doctor/ipd1/Charges/:patientId' render={()=><IpdCharges doctorId={doctorId}/>}/>
       <BookMyAppointment data={index} doctorId={doctorId}/>
     {/* <Profile data={doctor}/> */}
     
     <DisplayForm data={index}/>
     <ReactTooltip />
        </div>
      </section>
    </div>
  </>
  )
}
