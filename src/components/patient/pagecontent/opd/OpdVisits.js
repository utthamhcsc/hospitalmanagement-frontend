import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter,useParams} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'
import AddPat from '../../../../Forms/OPDForms/Revist'
import Addprescription from '../../../../Forms/OPDForms/TestPresciption'
import ReactTooltip from 'react-tooltip'
import DisplayPriscription from '../../../../Forms/DisplayPriscription'
export default function Opdpatient(props)
{
  let { patientId } = useParams();
  const [opdId,setOpdId]=React.useState();
  const [myopdId,setmyOpdId]=React.useState('');
  const [caseHistory,setcaseHistory]=React.useState({});
    const [index,setindex]=React.useState({});
    const [data,setdata]=React.useState([]);
const column=[{data:'opd.opdId',title:'OPD No'},
{data:'opd.appointmentDate',title:'Appointment Date',
render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()
},
{data:'doctorName',title:'Consultant'},{data:'opd.symptoms',title:'Symptoms'},{data:'action',title:'Action'}]
const [dataSrc,setdataSrc]=React.useState([{name:'opd123',patientId:'2019/12/12',gender:'Dr Covinda',mobileNumber:'Refe123',appointmentDate:'corona',totalVisit:2}]);
const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
    <button onClick={()=>setindex(rowData.opd)} className={'btn btn-xs btn-warning'} title='view Details' data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
    <button onClick={()=>fetchbyopdId(rowData.opd.opdId)} className={'btn btn-xs btn-primary'} title='view Case History' data-toggle='modal' data-target='#viewCaseHistory'><i className='fa fa-eye'></i></button>
   
   <ReactTooltip/>
    </BrowserRouter>,td)},
  {targets:0,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
   <button onClick={()=>{setOpd(rowData)}} className={'btn btn-xs btn-link '}>{cellData}</button>
  </BrowserRouter>,td)}
  ]
const Link=<NavLink to='dfgh'/>
React.useEffect(()=>{
  Getdata('myopd/get/patient/'+patientId).then(data=>{setdataSrc(data);setdata(data);console.log(data)});
},[])
React.useEffect(()=>{
    Getdata('prescription/'+myopdId).then(data=>{setcaseHistory(data);console.log(data)});
  },[myopdId])
   const setOpd=(val)=>{
setmyOpdId(val.opd.opdId);
setdataSrc([val])
   }
   const fetchbyopdId=(opdId)=>{
    Getdata('myopdprescription/get/'+opdId).then(data=>{
      if((data||[]).length>0)
      {
        setcaseHistory(data[0])
      }
      else{
        setcaseHistory({ opdId:opdId,header:'',
        caseHistory:[{medicianCategory:'',medicine:'',dosage:'',instruction:''}],
        footer:''
        
        
        })
      }
    })
  }
 
return (
<>
<nav aria-label="breadcrumb" >
<ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
<li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
<h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Visits</h6>
<div className='btn-group p-0'>
<button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
{(!myopdId=='')?<>
{/* <button onClick={()=>{setdataSrc(data);setmyOpdId('')}} 
className={'btn btn-xs  btn-light ml-1 ' } 
style={{marginLeft:'0.5px !important'}} ><i className='fa fa-reorder'/> All</button>
   */}
    <NavLink to={`/patient/myopd/diagnosis/${myopdId}`}  
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/> Diagnosis</NavLink>  
    <NavLink to={`/patient/myopd/charges/${myopdId}`} 
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Charges</NavLink>  
    <NavLink to={`/patient/myopd/payment/${myopdId}`} 
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Payment</NavLink>  
    <NavLink to={`/patient/myopd/bill/${myopdId}`} 
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Bill</NavLink>  
    
   </>  :<></>
}
               
</div>
</li>
</ol>
</nav>
<div className='px-5 pb-5'>
<Table id='addOpdPatient' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
<DisplayForm data={index}/>
<AddPat data={index} setdataSrc={setdataSrc}/>
<Addprescription opdId={opdId} data={caseHistory}/>
<DisplayPriscription {...caseHistory}/>
</div>
</>
)
}
