import React from "react";
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import { Getdata } from "../../../../Network/Server";
import AddLeave from "../../../../Forms/HumanResource/AddLeave";
import AddAmbulance from "../../../../Forms/Ambulance/AddAmbulance";
export default () => {
    const [index1,setindex1]=React.useState({medicineCategory:''});
  const [index,setindex]=React.useState({});
    const column=[
  {data:'name',title:'Vehicle Number'},
  {data:'bedTypeName',title:'Vehice Modal'},
  {data:'bedGroupName',title:'Year Made'},
  {data:'bedGroupName',title:'Driver Name'},
  {data:'bedGroupName',title:'Driver Licence'},
  {data:'bedGroupName',title:'Driver Contact'},
  {data:'bedGroupName',title:'Vehicle Type'},
  {data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal' data-target='#bed'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Getdata(`bed/delete/${rowData.id}`).then(mydata=>mydata?setdataSrc(data=>data.filter(item=>item.id!=mydata)):'')} className={'btn btn-xs btn-light'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
  
  return (
    <div>
      <div className="row p-0 justify-content-between align-items-center mx-0 px-3 py-2 bg-primary">
        <div className="h6 text-center">Ambulance List</div>
        <div>
          <button type="button" data-toggle='modal' data-target='#addambulance' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-plus" /> Add Ambulance
          </button>
          <NavLink type="button" to='/admin/vehicle/ambilancecall' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-reorder" /> Ambulance Call
          </NavLink>
          </div>
      </div>
      <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
            <Table id='leave' col={column} dataSrc={dataSrc} columnDefs={columnDefs}></Table>
            <AddAmbulance/>
</div>
      </div>
   
    </div>
  );
};
