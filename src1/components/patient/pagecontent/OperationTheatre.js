import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../Table'
import {Getdata} from '../../../Network/Server'
import ViewPatient from '../../../Forms/OperatioTheatre/PatientView'

export default function OperationTheatre(props)
 {
      
  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
 
    const column=[{data:'o.id',title:'Bill No'},
    {data:'patientName',title:'Patient Name'},
    {data:'o.patientId',title:'Patient Id'},
    {data:'gender',title:'Gender'},
    {data:'phone',title:'Phone'},
    {data:'o.operationName',title:'Operation Name'},
    {data:'o.operationType',title:'Operation Type'},
    {data:'doctorName',title:'Consultant'},
    {data:'o.operationDate',title:'Operation Date',
  render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data)
  },
 
    {data:'o.standardCharge',title:'Applied Charge'}
    ,{data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewdonar'><i className='fa fa-eye'></i></button>
     
      
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{
        Getdata('operationtheater/get/patient/'+window.localStorage.getItem('userId')).then(data=>{setdataSrc(data);
        console.log(data)
        });
      },[])


    return (
      <>
        <nav aria-label="breadcrumb" >
          <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
             <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
                <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Operation Theatre</h6>
                <div className='btn-group p-0'>
                  <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
                </div>
              </li>
          </ol>
       </nav>
       <div className='px-5 pb-5'>
         <Table id='operationtheatre' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
         <ViewPatient data={index1}/>
       </div>
    </>
  )
}
