import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,useHistory} from 'react-router-dom'
import Table from './StaffTable'
import DisplayForm from '../../../Forms/DisplayForm'
import {Getdata} from '../../../Network/Server'

export default function HumanResource(props) {
    const history=useHistory();
    const column=[{data:'staffId',title:'Staff Id'},{data:'firstName',title:'Name'},{data:'role',title:'Role'},{data:'department',title:'Department'},{data:'designation',title:'Designation'},{data:'phone',title:'Mobile Number'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const [index,setindex]=React.useState();
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter><button onClick={()=>setindex(rowData)} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
      </BrowserRouter>,td)}]
  

    React.useEffect(()=>{
      Getdata('staff').then(data=>{setdataSrc(data);console.log(data)});
    },[])

    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Staff List</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important'}} onClick={()=>history.push('/accountant/addstaff')}><i className='fa fa-plus'/> Add Staff</button>
   
    </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='stafflist' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index}/>
  </div>
        </>
    )
}
