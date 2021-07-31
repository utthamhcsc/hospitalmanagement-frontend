import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import AddVisitor from '../../../../Forms/FrontOffice/AddVisitor'
import DisplayForm from '../../../../Forms/DisplayForm'
import swal from 'sweetalert'
export default function Visitor(props) {
  const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
     
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Postdata(url+'/'+val,'DELETE',{}).then(data=>data.status==1?setdataSrc(data=>data.filter(item=>item.id!=val)):'')
       
      } else {
        
      }
    });
   }
    const column=[{data:'purpose',title:'Purpose'},
    {data:'name',title:'Name'},
    {data:'phone',title:'Phone'},
    {data:'date',title:'Date',
    render:( data, type, row, meta )=>(new Date(data)=='Invalid Date')?'': new Date(data).getFullYear()==new Date('1970-01-01').getFullYear() ?'':new Date(data).toLocaleDateString()},{data:'inTime',title:'In Time'},{data:'outTime',title:'Out Time'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    
    const [index,setindex]=React.useState({});
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#Visitor'><i className='fa fa-pencil'></i></button>
      
      
      <button onClick={()=>deletealert(`visitorlist`,rowData.id)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{Getdata('visitorlist').then(data=>setdataSrc(data));},[])
    
    return (
        
         <>
    <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Visitor</h5>
     <div className='btn-group'>
    <button className={'btn btn-xs btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" data-target="#Visitor" onClick={()=>setindex({})} class="btn btn-primary text-xs  btn-xs ml-1"> <i class="fa fa-plus"></i> Add Visitor</button>               
  
</div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='visitor' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <AddVisitor data={index} setdataSrc={setdataSrc}/>
    <DisplayForm data={index}/>
  </div>
  </div>
        </>
    )
}
