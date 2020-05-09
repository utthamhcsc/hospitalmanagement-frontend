import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'
import AddPatient from '../../../../Forms/Radiology/AddPatient'
export default function TestReport(props)
 {
   
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
 
    const column=[{data:'p.id',title:'Bill No'},
    {data:'p.date',title:'Reporting Date',render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()},
    {data:'patientName',title:'Patient Name'},
    {data:'testName',title:'Test Name'},
    {data:'shortName',title:'Short Name'},
    {data:'doctorName',title:'Reference Doctor'},
    {data:'p.description',title:'Description'},
    {data:'p.appliedCharge',title:'Applied Charge'}
    ,{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData.p)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
       
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('radiologypatient/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Radiology Test Report</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
                       </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='addradiologyTest' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index1}/>
    <AddPatient {...index1} data={index} />
  </div>
        </>
    )
}
