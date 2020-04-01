import React from "react";
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import { Getdata } from "../../../../Network/Server";
import AddLeave from "../../../../Forms/HumanResource/AddLeave";
export default () => {
    const [index1,setindex1]=React.useState({medicineCategory:''});
  const [index,setindex]=React.useState({});
    const column=[{data:'',title:'Sl.No',render:( data, type, row, meta ) =>`<b>${meta.row+1}</b>`},
  {data:'name',title:'Name'},
  {data:'bedTypeName',title:'Bed Type'},
  {data:'bedGroupName',title:'Bed Group'},
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
        <div className="h6 text-center">Leaves</div>
        <div>
          <button type="button" data-toggle='modal' data-target='#addleave' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-plus" /> Add Leave
          </button>
          <NavLink type="button" to='/admin/humanResource/approveLeaveRequest' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-reorder" /> Approve Leave Request
          </NavLink>
          </div>
      </div>
      <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
            <Table id='leave' col={column} dataSrc={dataSrc} columnDefs={columnDefs}></Table>
            <AddLeave/>
</div>
      </div>
   
    </div>
  );
};