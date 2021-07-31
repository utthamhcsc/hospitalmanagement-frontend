import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'
import AddReceive from '../../../../Forms/FrontOffice/AddReceive'
import swal from 'sweetalert'
export default function PostalReceive(props) {
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
    const column=[{data:'fromTitle',title:'From Title'},
    {data:'referenceNo',title:'Reference No'},
    {data:'toTitle',title:'To Title'},
    {data:'date',title:'Date',render:( data, type, row, meta )=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()},{data:'address',title:'Address'},{data:'attachDocument',title:'Attach document'},{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#PostalRcv'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>deletealert(`postalrecieve`,rowData.id)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
     const Link=<NavLink to='dfgh'/>

     React.useEffect(()=>{
      Getdata('postalrecieve').then(data=>setdataSrc(data));
    },[])

    
    return (
       
 <>
    <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Postal Receive</h5><div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="#PostalRcv">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex({})} data-target="#PostalRcv" class="btn btn-primary text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add PostalReceive</button>               
  </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='postalRcv' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index}/>
    <AddReceive data={index} setdataSrc={setdataSrc}/>
  </div>
  </div>
        </>
    )
}
