import React, { useEffect } from "react";
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import { Getdata } from "../../../../Network/Server";
import DisplayForm from "../../../../Forms/DisplayForm";
import AddAmbulance from "../../../../Forms/Ambulance/AddAmbulance";
export default () => {
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
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
      </BrowserRouter>,td)}]

      useEffect(()=>{
Getdata('vehicle/get').then(data=>setdataSrc(data))

      },[])
  
  return (
    <div>
      <div className="row p-0 justify-content-between align-items-center mx-0 px-3 py-2 bg-primary">
        <div className="h6 text-center">Ambulance List</div>
        <div>
     
          <NavLink type="button" to='/accountant/vehicle/ambilancecall' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-reorder" /> Ambulance Call
          </NavLink>
          </div>
      </div>
      <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
            <Table id='leave' col={column} dataSrc={dataSrc} columnDefs={columnDefs}></Table>
            <AddAmbulance data={index1} setdataSrc={setdataSrc}/>
            <DisplayForm data={index}/>
</div>
      </div>
   
    </div>
  );
};
