import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link, useHistory} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import IPDAddpat from '../../../Forms/IPDForms/IPDAddpat'
import DisplayForm from '../../../Forms/DisplayForm'
import AddDischarge from '../../../Forms/AddDischarge'

export default function Discharge(props) {
  const history=useHistory();
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
  const column=[{data:'name',title:'Name'},{data:'ipdId',title:'IPD No'},{data:'patientId',title:'patient Id'},{data:'gender',title:'Gender'},{data:'phone',title:'Phone'},{data:'action',title:'Action'}]
  const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[
    {targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
  <BrowserRouter>
  <button onClick={()=>setindex(rowData)} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>           
  </BrowserRouter>,td)},
 {targets:0,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
  <BrowserRouter>
  <a onClick={()=>history.push(`/receptionist/ipd1/consultentRegister/${rowData.ipdId}`)} href='javascript:void(0)'>{cellData}</a>
  </BrowserRouter>,td)}
]

  React.useEffect(()=>{Getdata('inpatient/Yes').then(data=>setdataSrc(data));},[])

  return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Discharged Patient</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='postaldispatch' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
  </div>
  <DisplayForm/>
        </>
    )
}
