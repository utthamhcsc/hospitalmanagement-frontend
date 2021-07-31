import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
export default (props)=>
 {
  const column=[{data:'name',title:'Patient Name'},{data:'userId',title:'Patient ID'},{data:'email',title:'Email'},{data:'password',title:'Password'}]
  const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[]
  
React.useEffect(()=>{
  Getdata('getall/patient').then(data=>{setdataSrc(data)
console.log(data)
});
},[])



    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-center p-0" aria-current="page">
      <h6 classname='text-sm' style={{letterSpacing:'1px'}}>Patient Credential Report</h6>
<div className='btn-group'>
    <button className={'btn btn-xs btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
  </div>
  </li>
  </ol>
  </nav> 

  <div className='px-5 pb-5'>
    <Table id='appointment' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    </div>

        </>
    )
}
