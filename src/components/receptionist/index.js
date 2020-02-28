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
import AddReceive from '../../Forms/FrontOffice/AddReceive'
import AddDispatch from '../../Forms/FrontOffice/AddDispatch'
import AddComplain from '../../Forms/FrontOffice/AddComplain'
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
import BookMyAppointment from '../../Forms/BookMyAppointment'
import DisplayForm from '../../Forms/DisplayForm'
import Complain from './pagecontent/Complain'
import PostalReceive from './pagecontent/PostalReceive'
import PostalDispatch from './pagecontent/PostalDispatch'
import Visitor from './pagecontent/Visitor'
import Discharge from './pagecontent/Discharge'
import Profile from './pagecontent/Profile'

export default function Index() {
  const [index,setindex]=React.useState({})

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
<Route path='/receptionist/appointment' render={()=><Appointment setindex={setindex}/>}/>
<Route path='/receptionist/Opd' render={()=><Opd setindex={setindex}/>}/>
<Route path='/receptionist/Ipd' render={()=><Ipd setindex={setindex}/>}/>
<Route path='/receptionist/pathology' render={()=><Pathology1 setindex={setindex}/>}/>
<Route path='/receptionist/radiology' render={()=><Radiology1 setindex={setindex}/>}/>
<Route path='/receptionist/pharmacy' render={()=><Pharmacy1 setindex={setindex}/>}/>
<Route path='/receptionist/visitor' render={()=><Visitor setindex={setindex}/>}/>
<Route path='/receptionist/callog' render={()=><Callog setindex={setindex}/>}/>
<Route path='/receptionist/complain' render={()=><Complain setindex={setindex}/>}/>
<Route path='/receptionist/postalReceive' render={()=><PostalReceive setindex={setindex}/>}/>
<Route path='/receptionist/postaldispatch' render={()=><PostalDispatch setindex={setindex}/>}/>
<Route path='/receptionist/discharge' render={()=><Discharge/>}/>
<Route path='/receptionist/profile' render={()=><Profile/>}/>
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
