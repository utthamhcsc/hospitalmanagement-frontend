import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'
import CallLog from '../../../../Forms/FrontOffice/CallLog'
import swal from 'sweetalert'
export default function Callog(props) 
{
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
    const [index,setindex]=React.useState({});
    const column=[{data:'name',title:'Name'},
    {data:'date',title:'Date',
    render:( data, type, row, meta )=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()},
    {data:'phone',title:'Phone'},
    {data:'description',title:'Description'},
    {data:'nextFallowUpDate',title:'Next Follow Update',
    render:( data, type, row, meta )=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()},{data:'callDuretion',title:'Call Duration'},{data:'callType',title:'Call Type'},{data:'note',title:'Note'},{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-waning'} data-toggle='modal' data-target='#calllog'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>deletealert(`phonecall`,rowData.id)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>
     
    React.useEffect(()=>{
      Getdata('phonecall').then(data=>setdataSrc(data));
    },[])
    
    return (
    <>
    <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Call Log</h5>
          <div className='btn-group p-0'>
            <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
            <button data-toggle="modal" onClick={()=>setindex({})} data-target='#calllog' class="btn btn-primary btn-xs  ml-1"> <i class="fa fa-plus mr-1"></i> Add CallLog</button>               
          </div>
        </li>
      </ol>
    </nav>
    <div className='px-5 pb-5'>
      <Table id='Calllog' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
      <CallLog data={index} setdataSrc={setdataSrc}/>
      <DisplayForm data={index}/>
    </div>
    </div>
 </>
)
}
