import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../../../Table'
import {Getdata,Postdata} from '../../../../../Network/Server'
import DisplayForm from '../../../../../Forms/DisplayForm'
import BookAppointment from '../../../../../Forms/BookMyAppointment'
import swal from 'sweetalert'
export default function Appointment(props)
 {
  const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Getdata(url+'/'+val).then(setdataSrc(data=>data.filter(item=>item.id!=val)))
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        
        });
      } 
    });
   }
  
const [department,setdepartment]=React.useState([])
  const [index,setindex]=React.useState({});
  const column=[{data:'patientName',title:'Patient Name'},{data:'patientId',title:'Patient ID'},{data:'mobileNumber',title:'Mobile Number'},{data:'email',title:'Email'},{data:'gender',title:'Gender'},{data:'address',title:'Address'},{data:'action',title:'Action'}]
  const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
  <BrowserRouter>
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs '} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
 
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs '} data-toggle='modal' data-target='#bookappointment'><i className='fa fa-pencil'></i></button>
  
  <button onClick={()=>deletealert(`delete/patient`,`${rowData.patientId}`)} className={'btn btn-xs '} ><i className='fa fa-trash'></i></button>
 
  </BrowserRouter>,td)}]
  
React.useEffect(()=>{
  Getdata('myappointment/patient/patient').then(data=>setdataSrc(data));
  Getdata('department/get').then(data=>setdepartment(data)).catch(err=>console.log(err));
},[])



    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-center p-0" aria-current="page">
      <h6 classname='text-sm' style={{letterSpacing:'1px'}}>Patient</h6>
<div className='btn-group'>
    <button className={'btn btn-xs btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex({})} data-target="#bookappointment" class="btn btn-light text-xs  btn-xs ml-1"> <i class="fa fa-plus"></i> Add Patient</button>               
  </div>
  </li>
  </ol>
  </nav> 

  <div className='px-5 pb-5'>
    <Table id='appointment' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <BookAppointment data={index} setdataSrc={setdataSrc} department={department}/>
    <DisplayForm data={index}/>
  </div>

        </>
    )
}
