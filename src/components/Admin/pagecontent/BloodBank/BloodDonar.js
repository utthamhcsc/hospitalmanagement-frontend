import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import AddBloodDonor from '../../../../Forms/BloodBank/AddBloodDonor'
import AddDonate from '../../../../Forms/BloodBank/AddDonate'
import ViewDonar from '../../../../Forms/BloodBank/ViewDonar'
export default function BloodDonar(props)
 {
   
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
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewdonar'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-success'}
       data-toggle='modal' data-target='#Addblooddonor'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Getdata(`blooddonar/delete/${rowData.id}`).then(data=>setdataSrc(item=>item.filter(item1=>item1.id!=data)))} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-success'}
       data-toggle='modal' data-target='#adddonorblood'>
         <i className='fa fa-plus-square'/>
         Donate</button>
    
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('blooddonar/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Donor Details</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex('')} 
    data-target="#Addblooddonor" class="btn btn-light text-xs  btn-xs  ml-1"> 
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
        </>
    )
}
