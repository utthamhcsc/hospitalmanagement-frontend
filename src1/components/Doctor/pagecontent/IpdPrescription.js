import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link,useParams} from 'react-router-dom'
import Table from '../../Table'
import {Getdata} from '../../../Network/Server'
import Addprescription from '../../../Forms/Addprescription'
import DisplayPriscription from '../../../Forms/DisplayPriscription'

export default function Prescription(props) 
{
  const [index,setindex]=React.useState({});
  let { patientId } = useParams();
  const column=[{data:'opdId',title:'IPD No'},{data:'date',title:'Date',render:( data, type, row, meta )=>new Date(data).toLocaleDateString()},{data:'action',title:'Action'}]
  const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
  <BrowserRouter><button onClick={()=>setindex(rowData)} data-toggle='modal' data-target='#viewCaseHistory'>
  <i className='fa fa-eye'></i></button>
  </BrowserRouter>,td)}]
  
  React.useEffect(()=>{Getdata('prescription/'+patientId).then(data=>setdataSrc(data));},[])

  return (
  <>
    <nav aria-label="breadcrumb" >
      <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
        <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline text-xs " aria-current="page">
          <h6 className='text-sm ' style={{letterSpacing:'1px',lineHeight:'100%'}}>Prescription</h6>
          <div className='btn-group p-0'>
          <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="#AddipdPatient">dfgh</button>
    <NavLink to={ '/doctor/ipd1/consultentRegister/'+patientId} activeClassName='active' class="btn btn-light text-xs  btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Consultant Register
    </NavLink>             
    <NavLink to={ '/doctor/ipd1/diagnosis/'+patientId} activeClassName='active' class="btn btn-light text-xs  btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Diagnosis
    </NavLink>   
    <NavLink to={ '/doctor/ipd1/Charges/'+patientId} activeClassName='active' class="btn btn-light text-xs  btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Charges
    </NavLink>             
              
   <button onClick={()=>{}} className={'btn btn-light text-xs  btn-xs  ml-1'} title='add prescription'  data-toggle='modal' data-target='#addPriscription'><i className='fa fa-plus ml-1'></i>Add Prescription</button>
  
          </div>
        </li>
      </ol>
    </nav>
    <div className='px-5 pb-5'>
      <Table id='complain' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    </div>
    
<Addprescription opdId={patientId}/>
<DisplayPriscription {...index}/>
  </>
  )
}
