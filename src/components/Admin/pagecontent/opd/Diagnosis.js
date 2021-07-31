import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link, useParams} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import AddDiagnosis from '../../../../Forms/OPDForms/AddDiagnosis'
import DisplayForm from '../../../../Forms/DisplayForm'
export default function Diagnosis(props) 
{
    const {patientId}=useParams();
    const [index,setindex]=React.useState();
    const column=[{data:'reportType',title:'Report Type'},
    {data:'reportDate',title:'Report Date',
    render:( data, type, row, meta )=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()

},{data:'description',title:'Description'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
    <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-info'} title='view Details' data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
   
    <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} 
  data-toggle='modal' data-target='#addDiagnosis'>
      <i className='fa fa-pencil' data-tip='hello'></i></button>
    
    <button onClick={()=>Getdata(`myopddiagnosis/delete/${rowData.opdId}`).then(data=>setdataSrc(item=>item.filter(item=>item.id!=data.id)))} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
   
    </BrowserRouter>,td)}]
    
    React.useEffect(()=>{Getdata('myopddiagnosis/get/'+patientId).then(data=>setdataSrc(data));},[])

    return (
    <>
    <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >OPD Diagnosis</h5>
<div className='btn-group '>
            <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>              
         <NavLink to={`/admin/myopd/charges/${patientId}`} 
    class="btn btn-primary text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Charges</NavLink>  
    <NavLink to={`/admin/myopd/payment/${patientId}`} 
    class="btn btn-primary text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Payment</NavLink>  
    <NavLink to={`/admin/myopd/bill/${patientId}`} 
    class="btn btn-primary text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Bill</NavLink>  
       <button data-toggle="modal" onClick={()=>setindex({ reportType: "",
      reportDate: "",
      document: "",
      description: "",
      opdId: ""})} data-target="#addDiagnosis"  class="btn btn-primary text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Diagnosis</button>               
          </div>
        </li>
      </ol>
    </nav>
    <div className='px-5 pb-5'>
      <Table id='opdDiagnosis' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
      <DisplayForm data={index}/>
      <AddDiagnosis data={index} setdataSrc={setdataSrc}/>
    </div>
    </div>
  </>
  )
}
