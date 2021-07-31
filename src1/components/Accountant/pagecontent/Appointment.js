import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import AppTable from './AppointmentTable'
//window.$('#appointment').DataTable().row(row).remove().draw()
import DisplayForm from '../../../Forms/DisplayForm'
import BookAppointment from '../../../Forms/BookMyAppointment'
export default function Appointment(props)
 {

  const [index,setindex]=React.useState({});
    const column=[{data:'patientName',title:'Patient Name'},{data:'aptId',title:'AppointmentNo'},{data:'date',title:'Date',render:( data, type, row, meta )=>new Date(data).toLocaleDateString()},{data:'mobileNumber',title:'Mobile Number'},{data:'gender',title:'Gender'},{data:'appointmentStatus',title:'Appointment Status'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
  <BrowserRouter>
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
 
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-success'} data-toggle='modal' data-target='#bookappointment'><i className='fa fa-pencil'></i></button>
  
  <button onClick={()=>Postdata(`appointment/${rowData.id}`,'DELETE',{}).then(data=>data.status==1?window.$('#appointment').DataTable().row(row).remove().draw():'')} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
 
  </BrowserRouter>,td)},{targets:-2,responsivePriority:2,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(<BrowserRouter>
  <button  data-toggle="dropdown" className={`btn btn-xs dropdown ${cellData=='pending'?'btn-danger':cellData=='cancel'?'btn-dark':'btn-success'}`}>{cellData}</button>
  
 <ul class="dropdown-menu">
                          <Link className='btn btn-xs text-xs' onClick={()=>{Postdata('appointment/','PUT',{...rowData,appointmentStatus:'approve'});setdataSrc((d)=>d.map((data,index)=>row==index?{...rowData,appointmentStatus:'approve'}:data))}}>approve</Link>
                          <Link className='btn btn-xs text-xs'onClick={()=>{Postdata('appointment/','PUT',{...rowData,appointmentStatus:'pending'});window.$(td).html('<button class="btn btn-xs btn-danger">pending</button>')}}>pending</Link>
                          <Link className='btn btn-xs text-xs' onClick={()=>{Postdata('appointment/','PUT',{...rowData,appointmentStatus:'cancel'});window.$(td).html('<button class="btn btn-xs btn-dark">cancel</button>')}}>cancel</Link>
                        </ul>
  </BrowserRouter>,td)}]
  
React.useEffect(()=>{
  Getdata('appointment').then(data=>setdataSrc(data));
},[])



    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >

  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-center p-0" aria-current="page">
      <h6 classname='text-sm' style={{letterSpacing:'1px'}}>Appointment</h6>
<div className='btn-group'>
    <button className={'btn btn-xs btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex({})} data-target="#bookappointment" class="btn btn-light text-xs  btn-xs ml-1"> <i class="fa fa-plus"></i> Add Appointment</button>               
    <NavLink to={ '/accountant/visitor'} activeClassName='active'  class="btn btn-light text-xs  btn-xs ml-1"><i class="fa fa-reorder"></i> Visitors Log</NavLink> 
                             <NavLink to={ '/accountant/callog'} activeClassName='active'  class="btn btn-light text-xs  btn-xs ml-1"><i class="fa fa-reorder"></i> Phone Call Log</NavLink> 
                             <NavLink to={ '/accountant/postalReceive'} activeClassName='active' class="btn btn-light text-xs  btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Postal Receive
 </NavLink>
 <NavLink to={ '/accountant/postaldispatch'} activeClassName='active' class="btn btn-light text-xs  btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Postal Dispatch
 </NavLink>
                             <NavLink to={ '/accountant/complain'} activeClassName='active' class="btn btn-light text-xs  btn-xs ml-1"><i class="fa fa-reorder"></i> Complain</NavLink> 
</div>
  </li>
  </ol>
  </nav> 

  <div className='px-5 pb-5'>
    <AppTable id='appointment' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <BookAppointment data={index}/>
    <DisplayForm data={index}/>
  </div>

        </>
    )
}
