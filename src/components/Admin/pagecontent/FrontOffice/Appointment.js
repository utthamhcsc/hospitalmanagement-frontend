import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'

//window.$('#appointment').DataTable().row(row).remove().draw()
import DisplayForm from '../../../../Forms/DisplayForm'
import BookAppointment from '../../../../Forms/BookMyAppointment'
import swal from 'sweetalert';
import WOW from 'wowjs'
export default function Appointment(props)
 {
   const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
      
    
      buttons: true,
      
      dangerMode: true,
      
    })
    .then((willDelete) => {
      if (willDelete) {
        Getdata(url+'/'+val).then(setdataSrc(data=>data.filter(item=>item.id!=val)))
        
      } 
    });
   }
const [department,setdepartment]=React.useState([])
  const [index,setindex]=React.useState({});
    const column=[{data:'patientName',title:'Patient Name'},{data:'aptId',title:'AppointmentNo'},{data:'date',title:'Date',render:( data, type, row, meta )=>new Date(data).toLocaleDateString()},{data:'mobileNumber',title:'Mobile Number'},{data:'gender',title:'Gender'},{data:'appointmentStatus',title:'Appointment Status'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
  <BrowserRouter>
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
 
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#bookappointment'><i className='fa fa-pencil'></i></button>
  
  <button onClick={()=>deletealert('myappointment/delete',rowData.id)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
 
  </BrowserRouter>,td)},{targets:-2,responsivePriority:2,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(<BrowserRouter>
  <button  data-toggle="dropdown" className={`btn btn-xs dropdown ${cellData=='pending'?'btn-danger':cellData=='cancel'?'btn-dark':'btn-success'}`}>{cellData}</button>
  
 <ul class="dropdown-menu">
                          <button className='btn btn-xs text-xs' onClick={()=>Postdata('myappointment/add','POST',{...rowData,appointmentStatus:'approve'}).then(item=>setdataSrc((d)=>d.map(data=>data.id==item.id?item:data)))}>approve</button>
                          <button className='btn btn-xs text-xs'onClick={()=>Postdata('myappointment/add','POST',{...rowData,appointmentStatus:'pending'}).then(item=>setdataSrc((d)=>d.map(data=>data.id==item.id?item:data)))}>pending</button>
                          <button className='btn btn-xs text-xs' onClick={()=>Postdata('myappointment/add','POST',{...rowData,appointmentStatus:'cancel'}).then(item=>setdataSrc((d)=>d.map(data=>data.id==item.id?item:data)))}>cancel</button>
                        </ul>
  </BrowserRouter>,td)}]
  
React.useEffect(()=>{
  new WOW.WOW().init()
  Getdata('appointment').then(data=>setdataSrc(data));
  Getdata('department/get').then(data=>setdepartment(data)).catch(err=>console.log(err));
},[])



    return (
        <>
        <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Appointment</h5>
<div className='btn-group '>
  
    <button className={'btn btn-xs btn-primary text-nowrap ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} onClick={e=>{
     
    }}>dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex({})} data-target="#bookappointment" class="btn btn-primary text-nowrap btn-xs ml-1"> <i class="fa fa-plus"></i> Add Appointment</button>               
    <NavLink to={ '/admin/appointment/visitor'} activeClassName='active'  class="btn btn-primary text-nowrap btn-xs ml-1"><i class="fa fa-reorder"></i> Visitors Log</NavLink> 
                             <NavLink to={ '/admin/appointment/callog'} activeClassName='active'  class="btn btn-primary text-nowrap btn-xs ml-1"><i class="fa fa-reorder"></i> Phone Call Log</NavLink> 
                             <NavLink to={ '/admin/appointment/postalReceive'} activeClassName='active' class="btn btn-primary text-nowrap btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Postal Receive
 </NavLink>
 <NavLink to={ '/admin/appointment/postaldispatch'} activeClassName='active' class="btn btn-primary text-nowrap btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Postal Dispatch
 </NavLink>
<NavLink to={ '/admin/appointment/complain'} activeClassName='active' class="btn btn-primary text-nowrap btn-xs ml-1"><i class="fa fa-reorder"></i> Complain</NavLink> 
</div>
  </li>
  </ol>
  </nav> 

  <div className='px-5 pb-5'>
    <Table id='appointment' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <BookAppointment data={index} setdataSrc={setdataSrc} department={department}/>
    <DisplayForm data={index}/>
  </div>
</div>
        </>
    )
}
