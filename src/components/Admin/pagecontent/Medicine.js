import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../Table'
import swal from 'sweetalert'
export default function Medicine(props) {
  const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Getdata(url+'/'+val).then(setdataSrc(data=>data.filter(item=>item.id!=val)))
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        
        });
      } 
    });
   }
  
    const column=[{data:'apptId'}]
    const dataSrc=[{patientId:'12345'}]
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(<BrowserRouter><button onClick={()=>props.setindex(rowData)} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
    <button onClick={()=>props.setindex(rowData)} data-toggle='modal' data-target='#bookappointment'><i className='fa fa-pencil'></i></button>
    </BrowserRouter>,td)}]
    
    React.useEffect(()=>{
        Getdata('visitorlist').then(data=>setdataSrc(data));
      },[])
      
    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Medicine</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" data-target="#AddipdPatient" class="btn btn-light text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Patient</button>               
           
 <NavLink to={ '/receptionist/discharge'} activeClassName='active' class="btn btn-light text-xs  btn-xs ml-1 ">
     <i class="fa fa-reorder"></i> Discahrge
 </NavLink>             
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='postaldispatch' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
  </div>
        </>
    )
}
