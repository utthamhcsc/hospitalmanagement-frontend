import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter,useParams} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import DisplayForm from '../../../Forms/DisplayForm'
import AddPat from '../../../Forms/OPDForms/AddPat'
import Addprescription from '../../../Forms/Addprescription'
import ReactTooltip from 'react-tooltip'
import DisplayPriscription from '../../../Forms/DisplayPriscription'
import AddCharges from '../../../Forms/AddCharges'
export default function OpdCharges(props)
{
    let { patientId } = useParams();
    const [index,setindex]=React.useState({});
const column=[{data:'date',title:'Date'},{data:'chargeType',title:'Charge Type'},{data:'chargeCategory',title:'Charge Category'},{data:'standardCharge',title:'Stardard Charge'},{data:'TPACharge',title:'TPA Charge'},{data:'appliedCharge',title:'Applied Charge'},{data:'action',title:'Action'}]
const [dataSrc,setdataSrc]=React.useState([{name:'opd123',patientId:'2019/12/12',gender:'Dr Covinda',mobileNumber:'Refe123',appointmentDate:'corona',totalVisit:2}]);
const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
    <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} title='view Details' data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
   
    <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-success'} title='add prescription'  data-toggle='modal' data-target='#addPriscription'><i className='fa fa-pencil' data-tip='hello'></i></button>
    
    <button onClick={()=>Postdata(`opdCharge/${rowData.id}`,'DELETE',{}).then(data=>data.status==1?window.$('#addOpdPatient').DataTable().row(row).remove().draw():'')} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
   
   <ReactTooltip/>
    </BrowserRouter>,td)}
  ]
const Link=<NavLink to='dfgh'/>
//React.useEffect(()=>{Getdata('opdoutpatient').then(data=>{console.log(data);setdataSrc(data)});},[])
React.useEffect(()=>{
  //alert(patientId)
  Getdata('charges/'+patientId).then(data=>{setdataSrc(data);console.log(data)});},[])
return (
<>
<nav aria-label="breadcrumb" >
<ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
<li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
<h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Opd Charges</h6>
<div className='btn-group p-0'>
<button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft :'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
<NavLink to={`/doctor/diagnosis/${patientId}`} class="btn btn-light text-xs  btn-xs  ml-1"> Diagnosis</NavLink>   
<NavLink to={`/doctor/patient/bill/${patientId}`} class="btn btn-light text-xs  btn-xs  ml-1"> Bill</NavLink>  


<button data-toggle="modal" data-target="#add_chargeModal" onClick={()=>setindex({})} class="btn btn-light text-xs  btn-xs  ml-1"> <i class="fa fa-arrow"></i>Add Charges</button>   
           
</div>
</li>
</ol>
</nav>
<div className='px-5 pb-5'>
<Table id='addOpdPatient' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
<DisplayForm data={index}/>
<AddPat data={index}/>
<Addprescription />
<DisplayPriscription data={{}}/>
<AddCharges patientId={patientId}/>
</div>
</>
)
}
