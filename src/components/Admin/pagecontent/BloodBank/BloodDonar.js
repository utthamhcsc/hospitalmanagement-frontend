import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import AddBloodDonor from '../../../../Forms/BloodBank/AddBloodDonor'
import AddDonate from '../../../../Forms/BloodBank/AddDonate'
import ViewDonar from '../../../../Forms/BloodBank/ViewDonar'
import swal from 'sweetalert'
export default function BloodDonar(props)
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
 
    const column=[{data:'donarName',title:'Donar Name'},
    {data:'ageyear',title:'Age'},
    {data:'bloodGroup',title:'Blood Group'},
    {data:'gender',title:'Gender'},
    {data:'contact',title:'Contact'},
    {data:'fatherName',title:'Father Name'},
    {data:'address',title:'Address'}
   
    ,{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewdonar'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'}
       data-toggle='modal' data-target='#Addblooddonor'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>deletealert(`blooddonar/delete`,`${rowData.id}`)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-success'}
       data-toggle='modal' data-target='#adddonorblood' title='View Donar'>
         <i className='fa fa-plus-square'/>
         Donate</button>
    
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('blooddonar/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
       <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Blood Donar</h5>
<div className='btn-group '>
    <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex('')} 
    data-target="#Addblooddonor" class="btn btn-primary text-xs  btn-xs  ml-1"> 
    <i class="fa fa-plus"></i> Add Blood Donar</button>                        
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='addpathologyTest' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    
  <ViewDonar {...index1}/>
    <AddBloodDonor data={index} setdataSrc={setdataSrc}/>
    <AddDonate data={index1}/>
  </div>
  </div>
        </>
    )
}
