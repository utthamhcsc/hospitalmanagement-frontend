import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'

import AddIncomeHead from '../../../../Forms/Settings/finance/AddIncomeHead'
import DisplayForm from '../../../../Forms/DisplayForm'
import { Getdata } from '../../../../Network/Server'
import Table from '../../../Table'
import AddTpa from '../../../../Forms/Tpa/AddTpa'
import swal from 'sweetalert'

export default function Tpa(props)
 {
  const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Getdata(url+'/'+val).then(setdataSrc(data=>data.filter(item=>item.id!=val)))
      } 
    });
   }
  
  const [index1,setindex1]=React.useState({organisationName:'',code:'',contactNo:''
  ,contactPersonName:'',address:'',contactPersonPhone:''});
  const [index,setindex]=React.useState({});
  const column=[{data:'',title:'Sl.No',render:( data, type, row, meta ) =>`<b>${meta.row+1}</b>`},
  {data:'organisationName',title:'Organisation Name'},
  {data:'code',title:'Code'},
  {data:'contactNo',title:'Contact Number'},
  {data:'contactPersonName',title:'Contact Person'},
  {data:'address',title:'Address'},
  {data:'contactPersonPhone',title:'Phone'},
  {data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#addTpa'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>deletealert(`organisation/delete`,`${rowData.id}`)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
    
    React.useEffect(()=>{
       Getdata('organisation/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
       <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >TPA</h5>
<div className='btn-group '>
    <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex1({organisationName:'',code:'',contactNo:'',contactPersonName:'',address:'',contactPersonPhone:''})} data-target="#addTpa" class="btn btn-primary text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Tpa</button>               
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='medicineCategory' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <AddTpa data={index1} setdataSrc={setdataSrc}/>
    <DisplayForm data={index}/>
  </div>
  </div>
        </>
    )
}
