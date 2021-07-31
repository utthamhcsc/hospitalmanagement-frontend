import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter,useParams} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import DisplayForm from '../../../Forms/DisplayForm'
import AddPat from '../../../Forms/OPDForms/AddPat'
import Addprescription from '../../../Forms/Addprescription'
import ReactTooltip from 'react-tooltip'
import DisplayPriscription from '../../../Forms/DisplayPriscription'
export default function Opdpatient(props)
{
  let patientId =props.patientId;
  const [opdId,setOpdId]=React.useState();
  const [myopdId,setmyOpdId]=React.useState();
  const [caseHistory,setcaseHistory]=React.useState({});
    const [index,setindex]=React.useState({});
const column=[{data:'opdId',title:'OPD No'},{data:'appointmentDate',title:'Appointment Date'},{data:'consDoctor',title:'Consultant'},{data:'symptoms',title:'Symptoms'},{data:'action',title:'Action'}]
const [dataSrc,setdataSrc]=React.useState([{name:'opd123',patientId:'2019/12/12',gender:'Dr Covinda',mobileNumber:'Refe123',appointmentDate:'corona',totalVisit:2}]);
const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
    <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} title='view Details' data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
    <button onClick={()=>setmyOpdId(rowData.opdId)} className={'btn btn-xs btn-primary'} title='view Case History' data-toggle='modal' data-target='#viewCaseHistory'><i className='fa fa-eye'></i></button>
   
   <ReactTooltip/>
    </BrowserRouter>,td)},
  {targets:0,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
   <button onClick={()=>setmyOpdId(rowData.opdId)} className={'btn btn-xs btn-link '}>{cellData}</button>
  </BrowserRouter>,td)}
  ]
const Link=<NavLink to='dfgh'/>
//React.useEffect(()=>{Getdata('opdoutpatient').then(data=>{console.log(data);setdataSrc(data)});},[])
React.useEffect(()=>{
  Getdata('opdoutpatient/patient/'+patientId).then(data=>{setdataSrc(data);console.log(data)});
  Getdata('prescription/'+myopdId).then(data=>{setcaseHistory(data);console.log(data)});
},[myopdId])
 
return (
<>
<nav aria-label="breadcrumb" >
<ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
<li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
<h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Visits</h6>
<div className='btn-group p-0'>
<button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
<NavLink to={`/patient/diagnosis/${myopdId}`} class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder ml-1'/> Diagnosis</NavLink>  
<NavLink to={`/patient/patient/charges/${myopdId}`} class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder ml-1'/> Charges</NavLink>  
<NavLink to={`/patient/patient/bill/${myopdId}`} class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder ml-1'/> Bill</NavLink> 
         
</div>
</li>
</ol>
</nav>
<div className='px-5 pb-5'>
<Table id='addOpdPatient' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
<DisplayForm data={index}/>
<AddPat data={index}/>
<Addprescription opdId={opdId}/>
<DisplayPriscription {...caseHistory[0]}/>
</div>
</>
)
}
