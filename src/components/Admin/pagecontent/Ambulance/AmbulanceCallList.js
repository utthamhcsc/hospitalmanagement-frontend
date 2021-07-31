import React, { useEffect } from "react";
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import { Getdata } from "../../../../Network/Server";
import DisplayForm from "../../../../Forms/DisplayForm";
import AddAmbulanceCall from "../../../../Forms/Ambulance/AddAmbulanceCall";
import swal from 'sweetalert'
export default () => {
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
    const [index1,setindex1]=React.useState({driverName:'',
    vehicleid:'',
    date:'',
    contactNo:'',
    address:'',
    amount:'',
    patientName:''});
  const [index,setindex]=React.useState({});
    const column=[
  {data:'patientName',title:'Patient Name'},
  {data:'contactNo',title:'Contact No'},
  {data:'vehicleNo',title:'Vehicle Number'},
  {data:'vehicleModel',title:'Vehicle Model'},
  {data:'driverName',title:'Driver Name'},
  {data:'address',title:'Address'}, 
  {data:'date',title:'Date'},
  {data:'amount',title:'Amount'},
  {data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-waning'} data-toggle='modal' data-target='#addambulancecall'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>deletealert(`bed/delete`,`${rowData.id}`)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]

      useEffect(()=>{
        Getdata('vehicle/call/get').then(data=>setdataSrc(data))
      },[])
  
  return (
    <>
    <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  > Ambulance Call</h5>
          <button type="button" data-toggle='modal'
          onClick={()=>setindex1({
            driverName:'',
    vehicleid:'',
    date:'',
    contactNo:'',
    address:'',
    amount:'',
    patientName:''
          })} 
          data-target='#addambulancecall' className="btn btn-xs btn-primary ml-1">
            <i className="fa fa-plus" /> Add Ambulance Call
          </button>
    </li>
          </ol>
      </nav>
      <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
            <Table id='leave' col={column} dataSrc={dataSrc} columnDefs={columnDefs}></Table>
            <AddAmbulanceCall data={index1}/>
            <DisplayForm data={index}/>
</div>
      </div>
   
    </div>
    </>
  );
};
