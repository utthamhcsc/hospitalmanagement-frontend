import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import DisplayForm from '../../../Forms/DisplayForm'
import AddSchedule from './AddSchedule'
export default function Myshedule(props)
 {
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
  const column=[
  {data:'',title:'Sl.No',render:( data, type, row, meta ) =>`<b>${meta.row+1}</b>`},
  {data:'day',title:'Day'},
  {data:'startTime',title:'Start Time',render:( data, type, row, meta ) =>new Date(data).toLocaleTimeString()},
  {data:'endTime',title:'End Time',render:( data, type, row, meta ) =>new Date(data).toLocaleTimeString()},
  {data:'perPatientTime',title:'Per Patient Time'},
  {data:'status',title:'Status'},
  {data:'action',title:'Action'}]

  const [dataSrc,setdataSrc]=React.useState([]);

    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,
    createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter><button className={'btn btn-xs btn-light ml-1 ' } onClick={()=>setindex(rowData)}
     data-toggle='modal' data-target='#viewDetails'>
    <i className='fa fa-eye'></i></button>
    <button className={'btn btn-xs btn-light ml-1 ' } onClick={()=>setindex1(rowData)} style={{marginLeft:'0.5px !important'}}
     data-toggle="modal" data-target="#myschedule"><i className='fa fa-pencil pr-1'/></button>
         
    </BrowserRouter>,td)}]
  
   React.useEffect(()=>{Getdata('schedulelist/'+props.doctorId).then(data=>setdataSrc(data));},[props.doctorId])

  return (
    <>
    <nav aria-label="breadcrumb" >
      <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
        <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-center p-0" aria-current="page">
          <h6 classname='text-sm' style={{letterSpacing:'1px'}}>My schedule</h6>
          <div className='btn-group'>
            <button className={'btn btn-xs btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
            <button className={'btn btn-xs btn-light ml-1 ' } onClick={()=>setindex1({})} style={{marginLeft:'0.5px !important'}} data-toggle="modal" data-target="#myschedule"><i className='fa fa-plus pr-1'/>Add schedule</button>
          </div>
       </li>
      </ol>
    </nav>
    <div className='px-5 pb-5'>
      <Table id='schedule' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
      <DisplayForm data={index}/>
      <AddSchedule doctorId={props.doctorId} data={index1}/>
    </div>
    </>
  )
}
