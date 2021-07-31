import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'
import AddDispatch from '../../../../Forms/FrontOffice/AddDispatch'

export default function PostalDispatch(props) {
  
  const [index,setindex]=React.useState({});
    const column=[{data:'toTitle',title:'To Title'},
    {data:'referenceNo',title:'Reference No'},
    {data:'fromTitle',title:'From Title'},
    {data:'date',title:'Date',render:( data, type, row, meta )=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()},{data:'address',title:'Address'},{data:'attachdDocument',title:'Attach document'},{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-success'} data-toggle='modal' data-target='#PostalDsp'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Postdata(`postaldispatchlist/${rowData.id}`,'DELETE',{}).then(data=>data.status==1?setdataSrc(data=>data.filter(item=>item.id!=rowData.id)):'')} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
      Getdata('postaldispatchlist').then(data=>setdataSrc(data));
    },[])

    
    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>PostalDispatch</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="#postalDispatch">dfgh</button>
    <button data-toggle="modal" data-target="#PostalDsp" onClick={()=>setindex({})} class="btn btn-light text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add PostalDispatch</button>               
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='postaldispatch' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index}/>
    <AddDispatch  data={index} setdataSrc={setdataSrc}/>
  </div>
        </>
    )
}
