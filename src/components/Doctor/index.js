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
import Profile from './pagecontent/Profile'
import AddDiagnosis from './pagecontent/AddDiagnosis'
import ReactTooltip from 'react-tooltip'
import OpdCharges from './pagecontent/OpdCharges'
import OpdBill from './pagecontent/OpdBill'

export default function Index() 
{
  const [index,setindex]=React.useState({})
  
  const [doctorId,setPatientId]=React.useState('P-20200212115220');
  const [doctor,setPatient]=React.useState({
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
    let user=window.localStorage.getItem('user');
    if(user){
      user=JSON.parse(user);
      console.log(user)
     // setPatientId(user.userId)
    }
Getdata(`doctorprofile/${doctorId}`).then(data=>{console.log(data);setPatient(data)})
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
       <section className="content px-4" >
       <div className="card shadow">
       <Route path='/doctor/appointment' render={()=><Appointment setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/Opd' render={()=><Opd setindex={setindex} doctorId={doctorId}/>}/>
       <Route path='/doctor/Ipd' render={()=><Ipd setindex={setindex} doctorId={doctorId}/>}/>
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
       <Route path='/doctor/addschedule' render={()=><AddSchedule />}/>
       <Route path='/doctor/schedule' render={()=><Myshedule />}/>
       <Route path='/doctor/opdPatient/:patientId' render={()=><OpdPatient />}/>
       <Route path='/doctor/addprescription' render={()=><Addprescription />}/>
       <Route path='/doctor/diagnosis/:patientId' render={()=><Diagnosis />}/>
       <Route path='/doctor/profile' render={()=><Profile />}/>
       <Route path='/doctor/adddiagnosis' render={()=><AddDiagnosis/>}/>
       <Route path='/doctor/patient/charges/:patientId' render={()=><OpdCharges/>}/>
       <Route path='/doctor/patient/bill/:patientId' render={()=><OpdBill/>}/>
       

       <BookMyAppointment data={index} doctorId={doctorId}/>
     {/* <Profile data={doctor}/> */}
     <AddSchedule />
     <DisplayForm data={index}/>
     <ReactTooltip />
        </div>
      </section>
    </div>
  </>
  )
      }
