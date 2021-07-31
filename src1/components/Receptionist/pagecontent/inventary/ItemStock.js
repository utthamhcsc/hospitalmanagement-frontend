import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'
import AddIncome from '../../../../Forms/Finance/AddIncome'
import AddStock from '../../../../Forms/inventary/AddStock'
export default (props)=>
 {
   
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
 
  const column=[{data:'p.name',title:'Name'},
  {data:'p.invoiceNumber',title:'Category'},
  {data:'p.date',title:'Supplier'},
  {data:'p.description',title:'Store'},
  {data:'incomeHead',title:'Quantity'},
  {data:'incomeHead',title:'Purchase Price'},
  {data:'p.amount',title:'Date',
  render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()
  }
  ,{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData.p)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData.p)} className={'btn btn-xs btn-success'} data-toggle='modal' data-target='#addstock'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Getdata(`financeincome/delete/${rowData.p.id}`).then(data=>setdataSrc(item=>item.filter(item1=>item1.p.id!=data)))} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
      
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('financeincome/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Item Stock</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex('')} 
    data-target="#addstock" class="btn btn-light text-xs  btn-xs  ml-1"> 
    <i class="fa fa-plus"></i> Add Stock</button> 
    <NavLink to={ '/admin/itemstock/itemissue'} activeClassName='active'  class="btn btn-light text-xs  btn-xs ml-1"><i class="fa fa-reorder"></i> Item Issue</NavLink> 
                             <NavLink to={ '/admin/itemstock/itemlist'} activeClassName='active'  class="btn btn-light text-xs  btn-xs ml-1"><i class="fa fa-reorder"></i> Item List</NavLink> 
                           

                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='addpathologyTest' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index1}/>
  
    <AddStock data={index} setdataSrc={setdataSrc}/>
  </div>
        </>
    )
}
