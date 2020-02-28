import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'

export default function Ipd(props) {
    const column=[{data:'height',title:'Height'},{data:'weight',title:'Weight'},{data:'bp',title:'Bp'},{data:'symptoms',title:'Symptoms'},{data:'note',title:'Note'},{data:'appointmentDate',title:'Appointment Date'},{data:'caseType',title:'Case Type'},{data:'casulity',title:'Casuality'},{data:'oldPatient',title:'Old Patient'},{data:'tpa',title:'TPA'},{data:'creditLimit',title:'Credit Limit'},{data:'consultantDoctor',title:'Consultant Doctor'},{data:'reference',title:'Referenece'},{data:'bedGroup',title:'Bed Group'},{data:'bedNumber',title:'Bed Number'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(<BrowserRouter><button onClick={()=>props.setindex(rowData)} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
  </BrowserRouter>,td)}]
  
    React.useEffect(()=>{Getdata('inpatient/patient/'+props.patientId).then(data=>setdataSrc(data));},[])

    return (
    <>
    <nav aria-label="breadcrumb" >
    <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
    <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
    <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Ipd Patient</h6>
    <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="#AddipdPatient">dfgh</button>
    <NavLink to="/patient/consultantRegister" class="btn btn-light text-xs  btn-xs  ml-1"> Consultant Register</NavLink>
    <NavLink to="/patient/IpdDiagnosis" class="btn btn-light text-xs  btn-xs  ml-3"> Diagnosis</NavLink>
    <NavLink to="/patient/prescription" class="btn btn-light text-xs  btn-xs  ml-3"> Prescription</NavLink>
    </div>
    </li>
    </ol>
    </nav>
    <div className='px-5 pb-5'>
    <Table id='inpatient' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
     </div>
   </>
  )
}
