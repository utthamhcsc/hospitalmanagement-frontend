import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter,Link,useHistory} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'

export default function Opd(props)
{
    
    const [index,setindex]=React.useState({});
    const history=useHistory();
    //const [patientId,setPatientId]=React.useState('');
    const column=[{data:'name',title:'Name'},
    {data:'patientId',title:'patient Id'},
    {data:'gender',title:'Gender'},{data:'mobileNo',title:'Phone'},
    {data:'lastvistdate',title:'Last Visit',
  render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()
  },{data:'totalVisit',title:'Total Visit'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([{name:'Rama',patientId:'P-20200212115220',gender:'male',mobileNumber:'8861129756',appointmentDate:'2020/02/04',totalVisit:2}]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,
      createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
    <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
    </BrowserRouter>,td)},
    {targets:0,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
    <button className={'btn btn-link'} onClick={()=>history.push(`/receptionist/myopd/visits/${rowData.patientId}`)} >{cellData}</button>
    </BrowserRouter>,td)}
  ]
    const link=<NavLink to='dfgh'/>
    React.useEffect(()=>{
      Getdata('myopd/get').then(data=>{console.log(data);setdataSrc(data)});},[])
    
return (
<>
<nav aria-label="breadcrumb" >
<ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
<li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
<h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Opd Patient</h6>
<div className='btn-group p-0'>
<button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
</div>
</li>
</ol>
</nav>
<div className='px-5 pb-5'>
<Table id='addOpdPatient' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
<DisplayForm data={index}/>
</div>
</>
)
}
