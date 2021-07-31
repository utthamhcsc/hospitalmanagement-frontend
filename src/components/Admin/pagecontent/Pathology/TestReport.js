import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'
import AddPatient from '../../../../Forms/Pathology/AddPatient'
import swal from 'sweetalert'
export default function TestReport(props)
 {
  const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
      
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Getdata(url+'/'+val).then(setdataSrc(data=>data.filter(item=>item.id!=val)))
     
      } 
    });
   }
  
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
 
    const column=[{data:'p.id',title:'Bill No'},
    {data:'p.date',title:'Reporting Date',render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()},
    {data:'patientName',title:'Patient Name'},
    {data:'testName',title:'Test Name'},
    {data:'shortName',title:'Short Name'},
    {data:'doctorName',title:'Reference Doctor'},
    {data:'p.description',title:'Description'},
    {data:'p.appliedCharge',title:'Applied Charge'}
    ,{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData.p)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData.p)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#addPatient'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>deletealert(`pathologypatient/delete`,`${rowData.p.id}`)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
      
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('pathologypatient/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
       <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Appointment</h5>
<div className='btn-group '>
    <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
                       </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='addpathologyTest' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index1}/>
    <AddPatient {...index1} data={index} />
  </div>
  </div>
        </>
    )
}