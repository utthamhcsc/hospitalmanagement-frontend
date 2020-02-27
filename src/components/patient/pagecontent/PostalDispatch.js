import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import Table from '../../Table'
import {Getdata} from '../../../Network/Server'

export default function PostalDispatch() {
    const column=[{data:'fromTitle',title:'From Title'},{data:'referenceNo',title:'Reference No'},{data:'toTitle',title:'To Title'},{data:'date',title:'Date'},{data:'address',title:'Address'},{data:'attachDocument',title:'Attach document'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[]
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
    <button data-toggle="modal" data-target="#PostalDsp" class="btn btn-light text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add PostalDispatch</button>               
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='postaldispatch' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
  </div>
        </>
    )
}
