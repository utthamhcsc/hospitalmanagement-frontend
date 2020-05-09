 import React,{useCallback} from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import Radiology1 from '../../../Forms/Radiology/Radiology'
import AddDosage from './AddDosage'
import DisplayForm from '../../../Forms/DisplayForm'

export default function MedicineDosage(props)
 {
   
  const [index1,setindex1]=React.useState({   id:'',
  medicineCategoryId:'',
  medicineCategory:'',
 dosage:''});
 const [data,setdata]=React.useState([]);
  const [index,setindex]=React.useState({});
  const column=[{data:'',title:'Sl.No',render:( data, type, row, meta ) =>`<b>${meta.row+1}</b>`},
  {data:'medicineCategory',title:'Medicine Category'},
  {data:'dosage',title:'Dosage'},
  {data:'action',title:'Action'}]
     const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal' data-target='#addDosage'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Postdata(`medicinedosage/delete/${rowData.id}`,'DELETE',{}).then(mydata=>mydata?setdataSrc(data=>data.filter(item=>item.id!=mydata.id)):'')} className={'btn btn-xs btn-light'} ><i className='fa fa-trash'></i></button>
     
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
        Getdata('medicinedosage/get').then(data=>{setdataSrc(data);console.log(data)});
      },[])


    return (
        <div className='border'>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Medicine Dosage</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex1({ 
	 medicineCategory:'',
	dosage:''})} data-target="#addDosage" 
    class="btn btn-light text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Dosage</button>               
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='medicineDosage' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <AddDosage data={index1} medcat={data} setdataSrc={setdataSrc}/>
    <DisplayForm data={index}/>
  </div>
        </div>
    )
}
