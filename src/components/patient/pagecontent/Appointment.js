import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'

export default function Appointment(props)
 {
    const column=[{data:'apptId',title:'AppointmentNo'},{data:'date',title:'Date'},{data:'doctor',title:'Doctor'},{data:'appointmentStatus',title:'Appointment Status'},{data:'message',title:'Message'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(<BrowserRouter><button onClick={()=>props.setindex(rowData)} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
  <button onClick={()=>props.setindex(rowData)} data-toggle='modal' data-target='#bookappointment'><i className='fa fa-pencil'></i></button>
  </BrowserRouter>,td)}]
  
React.useEffect(()=>{
  Getdata('appointment/patient/'+props.patientId).then(data=>setdataSrc(data));
},[])



    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >

  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-center p-0" aria-current="page">
      <h6 classname='text-sm' style={{letterSpacing:'1px'}}>Appointment</h6>
<div className='btn-group'>
    <button className={'btn btn-xs btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" data-target="#bookappointment" class="btn btn-light text-xs  btn-xs ml-1"> <i class="fa fa-plus"></i> Add Appointment</button>               
</div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='appointment' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
  </div>
        </>
    )
}
