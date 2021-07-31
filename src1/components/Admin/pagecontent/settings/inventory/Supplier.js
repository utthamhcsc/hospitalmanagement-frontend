import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'

import {Getdata,Postdata} from '../../../../../Network/Server'
import AddSupplier from '../../AddSupplier'
import DisplayForm from '../../../../../Forms/DisplayForm'
import Table from '../../../../Table'
export default function Supplier(props)
 {
   
  const [index,setindex]=React.useState({})
  const [index1,setindex1]=React.useState({
    itemSupplier:'',
	  phone:'',
	  email:'',
	  address:'',
	  contactPersonName:'',
	  contactPersonPhone:'',
	  contactPersonEmail:'',
	  description:''
  });
  const column=[{data:'',title:'Sl.No',render:( data, type, row, meta ) =>`<b>${meta.row+1}</b>`},
  {data:'itemSupplier',title:'Supplier Name'},
  {data:'address',title:'Address'},
  {data:'phone',title:'Phone'},
  {data:'contactPersonName',title:'Contact Person'},
  {data:'contactPersonPhone',title:'Contact Person Phone'},
  {data:'description',title:'Description'},
  {data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-light'} data-toggle='modal' data-target='#addSuplier'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Postdata(`item-supplier/delete/${rowData.id}`,'DELETE',{}).then(mydata=>mydata?setdataSrc(data=>data.filter(item=>item.id!=mydata.id)):'')} className={'btn btn-xs btn-light'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('item-supplier/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Supplier</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal"  data-target="#addSuplier" class="btn btn-light text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Supplier</button>               
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='supplier' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <AddSupplier data={index1} setdataSrc={setdataSrc}/>
    <DisplayForm data={index}/>
  </div>
        </>
    )
}
