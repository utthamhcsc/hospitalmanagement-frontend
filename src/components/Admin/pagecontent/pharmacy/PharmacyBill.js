import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import GenerateBill from '../../../../Forms/Pharmacy/GenerateBill'
import ViewBill from '../../../../Forms/Pharmacy/ViewBill'

export default (props)=> {
  
  const [index,setindex]=React.useState({});
  
  const [index1,setindex1]=React.useState({});
  const [medicineCategory,setMedicineCategory]=React.useState([])
  const [patient,setpatient]=React.useState([]);
  const [doctor,setdoctor]=React.useState([]);
    const column=[{data:'id',title:'Bill No'},
    {data:'date',title:'Date'},
    {data:'patientName',title:'Patient Name'},
    {data:'doctorName',title:'Doctor Name'},
    {data:'netamount',title:'Total'},
    {data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-primary'} 
      data-toggle='modal' data-target='#viewBill'><i className='fa fa-eye'></i></button>
     
     
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{Getdata('pharmacyBillBasic/get').then(data=>{setdataSrc(data);
    console.log(data)
    });},[])
const loadUser=()=>{
  Getdata('medicineCat/get').then(data=>setMedicineCategory(data));
  Getdata('/fetchalluser').then(data=>{
    setdoctor(data.filter(item=>item.role=='doctor'))
    setpatient(data.filter(item=>item.role=='patient'))
  });
}

    return (
        <>
        <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Pharmacy Bill</h5>
<div className='btn-group '>
    <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={loadUser} data-target="#generateBill" class="btn btn-primary text-xs  btn-xs  ml-1"> 
    <i class="fa fa-plus"></i> Generate Bill</button>               
           
 <NavLink to={ '/admin/pharmacy/medicinestock'} activeClassName='active' class="btn btn-primary text-xs  btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Medicine
 </NavLink>             
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='pharmacyBill' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <GenerateBill doctor={doctor} patient={patient} medicineCategory={medicineCategory}/>
    <ViewBill {...index1}/>
  </div>
  </div>
        </>
    )
}
