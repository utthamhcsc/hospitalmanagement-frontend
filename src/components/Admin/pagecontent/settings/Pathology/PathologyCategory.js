import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../../Table'
import {Getdata,Postdata} from '../../../../../Network/Server'

import DisplayForm from '../../../../../Forms/DisplayForm'
import AddBedType from '../../../../../Forms/Bed/AddBedType'
import AddRadiologyCategory from '../../../../../Forms/Settings/radiology/AddRadiologyCategory'
import AddPathologyCategory from '../../../../../Forms/Settings/pathology/AddPathologyCategory'

export default function BedType(props)
 {
   
  const [index1,setindex1]=React.useState({name:''});
  const [index,setindex]=React.useState({});
  const column=[{data:'',title:'Sl.No',render:( data, type, row, meta ) =>`<b>${meta.row+1}</b>`},
  {data:'name',title:'Name'},
  {data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal'
       data-target='#pathologyCategory'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Getdata(`pathologyCategory/delete/${rowData.id}`).then(mydata=>mydata?setdataSrc(data=>data.filter(item=>item.id!=mydata)):'')} className={'btn btn-xs btn-light'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
    
    React.useEffect(()=>{
        Getdata('pathologyCategory/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Pathology Category List</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex1({name:''})} data-target="#pathologyCategory" class="btn btn-light text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Pathology Category</button>               
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='medicineCategory' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <AddPathologyCategory data={index1} setdataSrc={setdataSrc}/>
    <DisplayForm data={index}/>
  </div>
        </>
    )
}
