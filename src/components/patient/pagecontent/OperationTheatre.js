import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import Table from '../../Table'
import {Getdata} from '../../../Network/Server'

export default function OperationTheatre()
 {
    const column=[{data:'billNo',title:'Bill No'},{data:'patientName',title:'Patient Name'},{data:'patientId',title:'Patient Id'},{data:'patientType',title:'Patient Type'},{data:'gender',title:'Gender'},{data:'phone',title:'Phone'},{data:'operationName',title:'Operation Name'},{data:'operationType',title:'Operation Type'},{data:'consultant',title:'Consultant'},{data:'operationDate',title:'Operation Date'},{data:'appliedCharge',title:'Applied Charge'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{Getdata('operationtheatre').then(data=>setdataSrc(data));},[])
    
    return (
      <>
        <nav aria-label="breadcrumb" >
          <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
             <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
                <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Operation Theatre</h6>
                <div className='btn-group p-0'>
                  <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
                </div>
              </li>
          </ol>
       </nav>
       <div className='px-5 pb-5'>
         <Table id='operationtheatre' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
       </div>
    </>
  )
}
