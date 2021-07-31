import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'


export default function NoticeBoard(props)
 {
   
  const [index,setindex]=React.useState({});
  const column=[]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-success'} data-toggle='modal' data-target='#AddRadiologyTest'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Postdata(`rediology/${rowData.id}`,'DELETE',{}).then(data=>data.status==1?window.$('#radiology').DataTable().row(row).remove().draw():'')} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('rediology').then(data=>setdataSrc(data));
      },[])


    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Notice Board</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <NavLink type="button" to={'/radiologist/messaging/newmessage'} activeClassName='active' className="btn btn-xs btn-light ml-1">
      <i className="fa fa-plus" /> Post New Message{" "}
     </NavLink>
          
    <NavLink type="button" to={'/radiologist/messaging/sendemail'} activeClassName='active' className="btn btn-light text-xs  btn-xs ml-1 ">
     <i class="fa fa-reorder"/> Send Email/SMS{" "}
    </NavLink> 
                
  </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='radiology' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    
    
  </div>
        </>
    )
}
