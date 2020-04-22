import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import DisplayForm from '../../../Forms/DisplayForm'
import BookMyAppointment from '../../../Forms/BookMyAppointment'

export default function Appointment(props)
{
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
    const column=[{data:'aptId',title:'AppointmentNo'},
    {data:'date',title:'Date',render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()},
   // {data:'doctor',title:'Doctor'},
    {data:'appointmentStatus',title:'Appointment Status'},
    {data:'message',title:'Message'},
    {data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const [mydata,setmydata]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,
    createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter><button onClick={()=>setindex(rowData)} data-toggle='modal' 
    data-target='#viewDetails' class="btn btn-light text-xs  btn-xs mr-2">
    <i className='fa fa-eye'></i></button>
    <button data-toggle="modal" onClick={()=>setindex1(rowData)} 
    data-target="#bookappointment" class="btn btn-light text-xs  btn-xs mr-2"> <i class="fa fa-pencil"></i></button>               
  
  <button onClick={()=>Postdata(`appointment/${rowData.id}`,'DELETE',{}).then(data=>data.status==1?window.$('#appointment').DataTable().row(row).remove().draw():'')} className={'btn btn-xs btn-light'} ><i className='fa fa-trash'></i></button>
 
    </BrowserRouter>,td)}]
  
    React.useEffect(()=>{Getdata('appointment/doctor/'+props.doctorId).then(data=>{setdataSrc(data);setmydata(data)});},[])

    React.useEffect(()=>{})
    const lastnDaysData=(n)=>{
      let no=n?n:0
    const previusDate=new Date(new Date().setDate(new Date().getDate()-no));
    const today=new Date();
    setdataSrc(data=> mydata.filter((item)=>(new Date(item.date)>=previusDate && new Date(item.date)<=today)));

 }
 const nextnDaysData=(n)=>{
  let no=n?n:0
  const previusDate=new Date(new Date().setDate(new Date().getDate()+no));
  console.log(previusDate)
  const today=new Date();
  console.log(today)
  setdataSrc(data=> mydata.filter((item)=>(previusDate.getDate()>=new Date(item.date).getDate() && today.getDate()<=new Date(item.date).getDate())));
console.log(mydata.filter((item)=>{
  console.log(new Date(item.date))
  console.log(previusDate>=new Date(item.date) && today<=new Date(item.date))
  return (previusDate>=new Date(item.date) && today<=new Date(item.date))
}))
}
    return (
    <>
    <nav aria-label="breadcrumb" >
    <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
    <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-center p-0" aria-current="page">
    <h6 classname='text-sm' style={{letterSpacing:'1px'}}>Appointment</h6>
    <div className='btn-group'>
    <button className={'btn btn-xs btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex1({})} data-target="#bookappointment" class="btn btn-light text-xs  btn-xs mr-2"> <i class="fa fa-plus"></i> Add Appointment</button>               
    <button onClick={()=>setdataSrc(data=>mydata.filter(item=>(new Date(item.date).getMonth()==new Date().getMonth() && new Date(item.date).getFullYear()===new Date().getFullYear() && new Date(item.date).getDate()===new Date().getDate() )))}  class="btn btn-light text-xs  btn-xs mr-2"> Today</button>               
    <button  onClick={()=>nextnDaysData(7)}  class="btn btn-light text-xs  btn-xs mr-2">Next 7 Days</button>               
    <button onClick={()=>nextnDaysData(30)} class="btn btn-light text-xs  btn-xs mr-2">Next 30 Days</button>               
    <button data-toggle='dropdown' className='btn btn-xs dropdown-toggle btn-light'>All</button>
    <ul className='dropdown-menu dropdown-menu-right'> 
    <li className='dropdown-item text-xs' onClick={()=>setdataSrc(mydata)}>All</li>
    <li className='dropdown-item text-xs' onClick={()=>lastnDaysData(7)}>Last 7 Days</li>
    <li className='dropdown-item text-xs'onClick={()=>setdataSrc(data=>mydata.filter(item=>(new Date(item.date).getMonth()==new Date().getMonth()-1 && new Date(item.date).getFullYear()===new Date().getFullYear())))}>Last month</li>
    <li className='dropdown-item text-xs' onClick={()=>setdataSrc(data=>mydata.filter(item=>(new Date(item.date).getMonth()==new Date().getMonth()-6 && new Date(item.date).getFullYear()<=new Date().getFullYear())))}>Last 6 Months</li>
    <li className='dropdown-item text-xs' onClick={()=>setdataSrc(data=>mydata.filter(item=>new Date(item.date).getUTCFullYear()===new Date().getUTCFullYear()-1))}>Last Year</li>
    </ul>
    </div>
    </li>
  </ol>
  </nav>
  <div className='px-5 pb-5'>
    <Table id='appointment' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index}/>
    <BookMyAppointment data={index1} setdataSrc={setdataSrc}/>
  </div>
        </>
    )
}
