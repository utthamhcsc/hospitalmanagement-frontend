import React from 'react'
import ReactDOM from 'react-dom'
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'

import { BrowserRouter } from 'react-router-dom';
import Table from '../../components/Table';
import DisplayForm from '../DisplayForm';
export default (props)=>{
    const data=props.data;
    const [index,setindex]=React.useState({});
    const [index1,setindex1]=React.useState({});
      const column=[ {data:'o.appliedDate',title:'Applied Date',
      render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()
      },
      
      {data:'doctorName',title:'Consultant'},
      {data:'o.instruction',title:'Instruction'},
      {data:'o.instructionDate',title:'Instruction Date',
    render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()
    },
     
      {data:'',title:'Action'}]
      const [dataSrc,setdataSrc]=React.useState([]);
      const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
        <BrowserRouter>
        <button onClick={()=>setindex1(rowData.o)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
       
       
      
        </BrowserRouter>,td)}]
     
      React.useEffect(()=>{
          Getdata('otconsutantregister/get/'+(data.o && data.o.id)).then(data=>setdataSrc(data));
        },[data.o && data.o.id])
  
  
    return(
        <div class="modal fade" id="viewdonar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div class="card ">
            <div class="modal-header "> <h5> Ot Patient  Detail</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
           <div class="card-body ">
<div className='row pb-3 border-bottom'>
<div className='col-md-6 row justify-content-between'>
    <h6>Patient Name</h6><div className='text-sm mx-3'>{data.patientName}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Operation Name</h6><div className='text-sm mx-3'>{data.o && data.o.operationName}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Patient Id</h6><div className='text-sm mx-3'>{data.o && data.o.patientId}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Operation Date</h6><div className='text-sm mx-3'>{data.o && data.o.operationDate}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>opd/ipd</h6><div className='text-sm mx-3'>{data.o && data.o.opdId}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Consultant Doctor</h6><div className='text-sm mx-3'>{data.doctorName}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Gender</h6><div className='text-sm mx-3'>{data.gender}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Assistant Consultant1</h6><div className='text-sm mx-3'>{data.o && data.o.assistantConsultant1}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Age</h6><div className='text-sm mx-3'>{props.fatherName}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Assistant Consultant2</h6><div className='text-sm mx-3'>{data.o && data.o.assistantConsultant2}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Phone</h6><div className='text-sm mx-3'>{data.phone}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Anastheasist</h6><div className='text-sm mx-3'>{data.o && data.o.anasthesist}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Gardian Name</h6><div className='text-sm mx-3'>{props.fatherName}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Anastheasist Type</h6><div className='text-sm mx-3'>{data.o && data.o.anasthesistType}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Address</h6><div className='text-sm mx-3'>{data.address}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>OT Technician</h6><div className='text-sm mx-3'>{data.o && data.o.otTechnician}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Height</h6><div className='text-sm mx-3'>{data.o && data.o.height}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>OT Assistant</h6><div className='text-sm mx-3'>{data.o && data.o.otAssistant}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Weight</h6><div className='text-sm mx-3'>{data.o && data.o.weight}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Tpa</h6><div className='text-sm mx-3'>{data.tpa}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>BP</h6><div className='text-sm mx-3'>{data.o && data.o.bp}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Charge Category</h6><div className='text-sm mx-3'>{data.o && data.o.chargeCategory}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Symptoms</h6><div className='text-sm mx-3'>{data.o && data.o.symptoms}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Code</h6><div className='text-sm mx-3'>{data.o && data.o.code}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Results</h6><div className='text-sm mx-3'>{data.o && data.o.Results}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Applied Charges</h6><div className='text-sm mx-3'>{data.o && data.o.appliedCharge}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Remarks</h6><div className='text-sm mx-3'>{data.o && data.o.note}</div>
    </div>

    
    
    


</div>
<div className='p-3'>
           <Table id='gdgd' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
  </div> 
  <DisplayForm data={index1}/>
         </div>
     </div>
     </div>
     </div>
     </div>
    )
}