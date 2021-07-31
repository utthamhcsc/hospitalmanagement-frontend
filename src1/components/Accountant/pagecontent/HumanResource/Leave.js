import React from "react";
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import { Getdata } from "../../../../Network/Server";
import AddLeave from "../../../../Forms/HumanResource/AddLeave";
export default () => {
  const [index1,setindex1]=React.useState({role:'',
  staffId:'',
  applyDate:'',
  fromDate:'',
  toDate:'',
  leaveTypeId:'',
  reason:'',
  attachDocument:'',
  file:'',
  status:'pending'
});
const [index,setindex]=React.useState({});
  const column=[

{data:'leaveType',title:'Leave Type'},
{data:'leaveDate',title:'Leave Date'},
{data:'days',title:'Days'},
{data:'applyDate',title:'ApplyDate',render:(data,type,row,meta)=>new Date(data).toLocaleDateString()},
{data:'status',title:'Status',render:(data,type,row,meta)=>{
  
  if(data=='pending') return "<button class='btn btn-xs btn-warning'>pending</button>"
  if(data=='approve') return "<button class='btn btn-xs btn-success'>approve</button>"
  if(data=='disapprove') return "<button class='btn btn-xs btn-danger'>disapprove</button>"
  

}},
{data:'action',title:'Action'}]
  const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
    <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-light'} 
    data-toggle='modal' data-target='#addleave'><i className='fa fa-pencil'></i></button>
    
    <button onClick={()=>Getdata(`humanResource/leave/delete/${rowData.id}`).then(mydata=>mydata?setdataSrc(data=>data.filter(item=>item.id!=mydata)):'')} className={'btn btn-xs btn-light'} ><i className='fa fa-trash'></i></button>
   
    </BrowserRouter>,td)},
   {targets:1,createdCell:(td,cellData,rowData,row,col)=>
  window.$(td).html(new Date(rowData.fromDate).toLocaleDateString()+'-'+new Date(rowData.toDate).toLocaleDateString())  
  
  },
  {targets:2,createdCell:(td,cellData,rowData,row,col)=>{
let fromDate=new Date(rowData.fromDate)
let toDate=new Date(rowData.toDate)
let diff=new Date(toDate).getTime()-new Date(fromDate).getTime();
    window.$(td).html(diff/(1000*60*60*24))  
  }
    }
  
  ]
React.useEffect(()=>{
Getdata('humanResource/leave/get/'+window.localStorage.getItem('userId')).then(data=>setdataSrc(data))
},[])

        

  return (
    <div>
      <div className="row p-0 justify-content-between align-items-center mx-0 px-3 py-2 bg-primary">
        <div className="h6 text-center">Leaves</div>
        <div>
          <button type="button" data-toggle='modal' 
          onClick={()=>setindex1({
            
    applyDate:'',
    fromDate:'',
    toDate:'',
    leaveTypeId:'',
    reason:'',
    attachDocument:'',
    file:'',
    status:'pending'
  
          })}
          data-target='#addleave' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-plus" /> Add Leave
          </button>
         
          </div>
      </div>
      <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
            <Table id='leave' col={column} dataSrc={dataSrc} columnDefs={columnDefs}></Table>
            <AddLeave data={index1} setdataSrc={setdataSrc}/>
</div>
      </div>
   
    </div>
  );
};
