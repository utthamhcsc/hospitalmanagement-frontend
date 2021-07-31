import React, { useEffect } from "react";
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import { Getdata } from "../../../../Network/Server";
import DisplayForm from "../../../../Forms/DisplayForm";
import AddAmbulance from "../../../../Forms/Ambulance/AddAmbulance";
import swal from "sweetalert";
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
    const [index1,setindex1]=React.useState({
      vehicleNo:'',
      vehicleModel:'',
      manufactureYear:'',
      vehicleType:'',
      driverName:'',
      driverLicence:'',
      driverContact:'',
      note:''
    });
  const [index,setindex]=React.useState({});
    const column=[
  {data:'vehicleNo',title:'Vehicle Number'},
  {data:'vehicleModel',title:'Vehice Modal'},
  {data:'manufactureYear',title:'Year Made'},
  {data:'driverName',title:'Driver Name'},
  {data:'driverLicence',title:'Driver Licence'},
  {data:'driverContact',title:'Driver Contact'},
  {data:'vehicleType',title:'Vehicle Type'},
  {data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#addambulance'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>deletealert(`vehicle/delete`,`${rowData.id}`)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]

      useEffect(()=>{
Getdata('vehicle/get').then(data=>setdataSrc(data))

      },[])
  
  return (
    <>
    <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Ambulance List</h5>
      <div className='btn-group'>
          <button type="button" data-toggle='modal' 
          onClick={()=>setindex1({
            vehicleNo:'',
            vehicleModel:'',
            manufactureYear:'',
            vehicleType:'',
            driverName:'',
            driverLicence:'',
            driverContact:'',
            note:''
          })}
          data-target='#addambulance' className="btn btn-xs btn-primary ml-1">
            <i className="fa fa-plus" /> Add Ambulance
          </button>
          <NavLink type="button" to='/admin/vehicle/ambilancecall' className="btn btn-xs btn-primary ml-1">
            <i className="fa fa-reorder" /> Ambulance Call
          </NavLink>
          </div>
          </li>
          </ol>
          </nav>
     
      <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
            <Table id='leave' col={column} dataSrc={dataSrc} columnDefs={columnDefs}></Table>
            <AddAmbulance data={index1} setdataSrc={setdataSrc}/>
            <DisplayForm data={index}/>
</div>
      </div>
   
    </div>
    </>
  );
};
