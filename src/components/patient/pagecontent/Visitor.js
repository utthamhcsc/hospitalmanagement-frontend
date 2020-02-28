import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../Table'
import {Getdata} from '../../../Network/Server'

export default function Visitor(props) {
    const column=[{data:'purpose',title:'Purpose'},{data:'name',title:'Name'},{data:'phone',title:'Phone'},{data:'date',title:'Date'},{data:'inTime',title:'In Time'},{data:'outTime',title:'In Time'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(<BrowserRouter><button onClick={()=>props.setindex(rowData)} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
    </BrowserRouter>,td)}]
    
    React.useEffect(()=>{Getdata('visitorlist').then(data=>setdataSrc(data));},[])
    
    return (
        <>
        <nav aria-label="breadcrumb" >
      <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >

      <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-center p-0" aria-current="page">
      <h6 classname='text-sm' style={{letterSpacing:'1px'}}>Visitors List</h6>
     <div className='btn-group'>
    <button className={'btn btn-xs btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" data-target="#Visitor" class="btn btn-light text-xs  btn-xs ml-1"> <i class="fa fa-plus"></i> Add Visitor</button>               
  
</div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='visitor' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
  </div>
        </>
    )
}
