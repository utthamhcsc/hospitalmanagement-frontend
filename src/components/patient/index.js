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
import AddPat from '../../Forms/OPDForms/AddPat'
import IPDAddpat from '../../Forms/IPDForms/IPDAddpat'
import GenerateBill from '../../Forms/Pharmacy/GenerateBill'
import AddMedicine from '../../Forms/Pharmacy/AddMedicine'
import PurchaseMedicine from '../../Forms/Pharmacy/PurchaseMedicine'
import ImportMedicine from '../../Forms/Pharmacy/ImportMedicine'
import Pathology from '../../Forms/Pathology/Pathology'
import Radiology from '../../Forms/Radiology/Radiology'
import AddPatient from '../../Forms/OperatioTheatre/AddPatient'
import AddNewPatient from '../../Forms/NewPatient'
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
export default function Index() 
{
  const [index,setindex]=React.useState({})
  const [patientId,setPatientId]=React.useState('P-20200212115220');
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
       <Route path='/patient/appointment' render={()=><Appointment setindex={setindex} patientId={patientId}/>}/>
       <Route path='/patient/Opd' render={()=><Opd patientId={patientId}/>}/>
       <Route path='/patient/Ipd' render={()=><Ipd patientId={patientId}/>}/>
       <Route path='/patient/pathology' render={()=><Pathology1 patientId={patientId}/>}/>
       <Route path='/patient/radiology' render={()=><Radiology1 patientId={patientId}/>}/>
       <Route path='/patient/pharmacy' render={()=><Pharmacy1 patientId={patientId}/>}/>
       <Route path='/patient/Visits' render={()=><Visits patientId={patientId}/>}/>
       <Route path='/patient/Diagnosis' render={()=><Diagnosis patientId={patientId}/>}/>
       <Route path='/patient/discharge' render={()=><Discharge patientId={patientId}/>}/>
       <Route path='/patient/ConsultantRegister' render={()=><ConsultantRegister patientId={patientId}/>}/>
       <Route path='/patient/IpdDiagnosis' render={()=><IpdDiagnosis patientId={patientId}/>}/>
       <Route path='/patient/Prescription' render={()=><Prescription patientId={patientId}/>}/>
       <Route path='/patient/OperationTheatre' render={()=><OperatioTheatre patientId={patientId}/>}/>
       <Route path='/patient/vehicle' render={()=><Ambulance patientId={patientId}/>}/>
       <Route path='/patient/bloodbankstatus' render={()=><BloodBank  patientId={patientId}/>}/>

       <BookMyAppointment data={index} patientId={patientId}/>
        <AddPat />
        <Radiology /> 
        <Pathology /> 
        <PurchaseMedicine />
        <AddMedicine />
        <GenerateBill/>
        <IPDAddpat/>
        <AddPatient />
        <ImportMedicine />
        <AddNewPatient/>
        <DisplayForm data={index}/>
        </div>
      </section>
    </div>
  </>
  )
}
