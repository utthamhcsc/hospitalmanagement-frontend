import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import DisplayForm from '../../../../Forms/DisplayForm'
import AddPatient from '../../../../Forms/OperatioTheatre/AddPatient'
import AddExpense from '../../../../Forms/Finance/AddExpense'
export default function Expence(props)
 {
   
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
  const column=[{data:'p.name',title:'Name'},
  {data:'p.invoiceNumber',title:'Invoice Number'},
  {data:'p.date',title:'Date',
render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()
},
  {data:'p.description',title:'Description'},
  {data:'expenseHead',title:'Expense Head'},
  {data:'p.amount',title:'Amount'}
  ,{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData.p)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData.p)} className={'btn btn-xs btn-success'} data-toggle='modal' data-target='#addexpense'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Getdata(`financeexpense/delete/${rowData.p.id}`).then(data=>setdataSrc(item=>item.filter(item1=>item1.p.id!=data)))} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
      
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('financeexpense/get').then(data=>setdataSrc(data));
      },[])


    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Expense Details</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={()=>setindex('')} 
    data-target="#addexpense" 
    class="btn btn-light text-xs  btn-xs  ml-1">
       <i class="fa fa-plus"></i> Add Expense</button>               
    
                        
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='addpathologyTest' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <DisplayForm data={index1}/>
  
    <AddExpense data={index} setdataSrc={setdataSrc}/>
  </div>
        </>
    )
}
