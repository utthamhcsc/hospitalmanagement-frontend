import React, { useEffect } from "react";
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import { Getdata } from "../../../../Network/Server";
import DisplayForm from "../../../../Forms/DisplayForm";
import AddAmbulanceCall from "../../../../Forms/Ambulance/AddAmbulanceCall";
export default () => {
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
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      </BrowserRouter>,td)}]

      useEffect(()=>{
        Getdata('vehicle/call/get').then(data=>setdataSrc(data))
      },[])
  
  return (
    <div>
      <div className="row p-0 justify-content-between align-items-center mx-0 px-3 py-2 bg-primary">
        <div className="h6 text-center">Ambulance Call List</div>
        <div>
  
          </div>
      </div>
      <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
            <Table id='leave' col={column} dataSrc={dataSrc} columnDefs={columnDefs}></Table>
            <AddAmbulanceCall data={index1}/>
            <DisplayForm data={index}/>
</div>
      </div>
   
    </div>
  );
};
