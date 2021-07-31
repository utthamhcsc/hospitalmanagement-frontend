import React,{useCallback} from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import AddMedicine from '../../../../Forms/Pharmacy/AddMedicine'
import ViewMedicine from '../../../../Forms/Pharmacy/ViewMedicine'

export default (props) =>{
  const [data,setdata]=React.useState([])
 
  const [index1,setindex1]=React.useState({});
  const [index,setindex]=React.useState({});
    const column=[{data:'pharmacy.medicineName',title:'Medicine Name'},
    {data:'medicine.medicineCategory',title:'Medicine Category'},
    {data:'pharmacy.medicineCompany',title:'Medicine Company'},
    {data:'pharmacy.medicineComposition',title:'Medicine Composition'},
    {data:'pharmacy.medicineGroup',title:'Medicine Group'},
    {data:'pharmacy.unit',title:'Unit'},
    {data:'pharmacy.minLevel',title:'Min Level'},
    {data:'pharmacy.reOrderLevel',title:'ReOrder Level'},
    {data:'pharmacy.vat',title:'Vat'},
    {data:'pharmacy.packing',title:'Packing'},
    {data:'pharmacy.note',title:'Note'},
    {data:'pharmacy.vatAc',title:'VatAC'},
    {data:'pharmacy.medicineImage',title:'Medicine Photo'},
    {data:'availableQuantity',title:'Available Quantity',responsivePriority:3},
    {data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal' 
      data-target='#viewMedicine'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#addmedicine'><i className='fa fa-pencil'></i></button>
       </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>
    const fetchmedicineCategory=()=>{
      Getdata('medicineCat/get').then(data=>setdata(data));
  }
  const fetchusecallback=useCallback(()=>{
    fetchmedicineCategory()
  },[])
      React.useEffect(()=>{
        fetchusecallback()
         Getdata('pharmacy/get').then(data=>{setdataSrc(data);console.log(data)});
        },[])
  
    return (
        <>
        <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Medicine Stock</h5>
<div className='btn-group '>
    <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" data-target="#addmedicine" class="btn btn-primary text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Medicine</button>               
           
 <NavLink to={ '/admin/pharmacy/purchase'} activeClassName='active' class="btn btn-primary text-xs  btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Purchase
 </NavLink>             
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='medicineStock' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <AddMedicine medcat={data} data={index1.pharmacy}/>
    <ViewMedicine {...index1.medicine} {...index1.pharmacy}/>
  </div>
  </div>
        </>
    )
}
