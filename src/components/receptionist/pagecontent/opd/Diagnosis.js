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
    <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} title='view Details' data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
    
    </BrowserRouter>,td)}]
    
    React.useEffect(()=>{Getdata('myopddiagnosis/get/'+patientId).then(data=>setdataSrc(data));},[])

    return (
    <>
    <nav aria-label="breadcrumb" >
      <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
        <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline text-xs " aria-current="page">
          <h6 className='text-sm ' style={{letterSpacing:'1px',lineHeight:'100%'}}>Diagnosis</h6>
          <div className='btn-group p-0'>
            <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>              
         <NavLink to={`/receptionist/myopd/charges/${patientId}`} 
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Charges</NavLink>  
    <NavLink to={`/receptionist/myopd/payment/${patientId}`} 
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Payment</NavLink>  
    <NavLink to={`/receptionist/myopd/bill/${patientId}`} 
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Bill</NavLink>  
        </div>
        </li>
      </ol>
    </nav>
    <div className='px-5 pb-5'>
      <Table id='opdDiagnosis' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
      <DisplayForm data={index}/>
      <AddDiagnosis data={index} setdataSrc={setdataSrc}/>
    </div>
  </>
  )
}
