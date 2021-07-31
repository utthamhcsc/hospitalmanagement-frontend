import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'
import swal from 'sweetalert'
import AddIncome from '../../../../Forms/Finance/AddIncome'
export default function Income(props)
 {
  const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
    
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Getdata(url+'/'+val).then(setdataSrc(data=>data.filter(item=>item.p.id!=val)))
       
      } 
    });
   }
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
 
  const column=[{data:'p.name',title:'Name'},
  {data:'p.invoiceNumber',title:'Invoice Number'},
  {data:'p.date',title:'Date',
render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()
},
  {data:'p.description',title:'Description'},
  {data:'incomeHead',title:'Income Head'},
  {data:'p.amount',title:'Amount'}
  ,{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData.p)} className={'btn btn-xs btn-info'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData.p)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#addincome'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>deletealert(`financeincome/delete`,`${rowData.p.id}`)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
      
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('financeincome/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
        <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Income Details</h5>
<div className='btn-group '>
    <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex('')} 
    data-target="#addincome" class="btn btn-primary text-xs  btn-xs  ml-1"> 
    <i class="fa fa-plus"></i> Add Income</button>                        
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='addpathologyTest' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index1}/>
  
    <AddIncome data={index} setdataSrc={setdataSrc}/>
  </div>
  </div>
        </>
    )
}
