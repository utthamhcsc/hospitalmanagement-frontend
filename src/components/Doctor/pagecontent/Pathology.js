import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import DisplayForm from '../../../Forms/DisplayForm'
import Pathology1 from '../../../Forms/Pathology/Pathology'
import AddPatient from '../../../Forms/Pathology/AddDoctorPatient'
export default function Pathology(props)
 {
   
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
 
    const column=[{data:'p.testName',title:'Test Name'},
    {data:'p.shortName',title:'Short Name'},
    {data:'p.testType',title:'Test Type'},
    {data:'category',title:'Category Name'},
    {data:'p.unit',title:'Unit'},
    {data:'p.subCategory',title:'Sub Category'},
    {data:'p.method',title:'Method'},
    {data:'p.reportDays',title:'Report Days'},
    {data:'p.chargeCategory',title:'Charge Category'},
    {data:'p.code',title:'Code'},
    {data:'p.standardCharge',title:'Standard Charge'}
    ,{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData.p)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
          <button  className={'btn btn-xs btn-success'}
      onClick={()=>setindex1(rowData.p)}
      data-toggle='modal' data-target='#addPatient'><i className='fa fa-plus-circle'></i></button>
      
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('pathology/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Pathology</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex('')} data-target="#AddpathologyTest" class="btn btn-light text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Test</button>               
    <NavLink to='/admin/pathology/testreport' className='btn btn-xs btn-light mx-1'>
      <i className='fa fa-reorder'></i> Test Report
    </NavLink>
                        
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='addpathologyTest' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index1}/>
    <Pathology1 data={index} setdataSrc={setdataSrc}/>
    <AddPatient {...index1}/>
  </div>
        </>
    )
}
