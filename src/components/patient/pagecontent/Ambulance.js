import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'

export default function Ambulance()
 {
    const column=[{data:'patienName',title:'Patient Name'},{data:'address',title:'Address'},{data:'vehicleModel',title:'Vehicle model'},{data:'vehicleNo',title:'Vehicle No'},{data:'driver',title:'Driver Name'},{data:'contactNo',title:'Driver Contact'},{data:'amount',title:'Amount'},{data:'action',title:'Action',responsivePriority:2}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{Getdata('ambulance').then(data=>setdataSrc(data));},[])
    
    return (
      <>
        <nav aria-label="breadcrumb" >
          <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
             <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
                <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Ambulance</h6>
                <div className='btn-group p-0'>
                  <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
                </div>
              </li>
          </ol>
       </nav>
       <div className='px-5 pb-5'>
         <Table id='ambulance' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
       </div>
    </>
  )
}
