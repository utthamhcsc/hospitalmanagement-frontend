import React from 'react'
import ReactDOM from 'react-dom'
import {useFormik} from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
 import {toast} from 'react-toastify'
import ReactDatePicker from 'react-datepicker';
import { BrowserRouter } from 'react-router-dom';
import Table from '../../components/Table';
import DisplayForm from '../DisplayForm';
import AddDonate from './EditDonate';
export default (props)=>{

    const [index,setindex]=React.useState({});
    const [index1,setindex1]=React.useState({});
   
      const column=[{data:'institution',title:'Institution'},
      {data:'bagNo',title:'Bag No'},
      {data:'lot',title:'Lot'},
      {data:'quantity',title:'Quantity(in Ml)'},
      {data:'donateDate',title:'Donate Date',
    render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()
    },
     
      {data:'',title:'Action'}]
      const [dataSrc,setdataSrc]=React.useState([]);
      const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
        <BrowserRouter>
        <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
       
        <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-success'}
         data-toggle='modal' data-target='#editdonorblood'><i className='fa fa-pencil'></i></button>
        
        <button onClick={()=>Getdata(`donateblood/delete/${rowData.id}`).then(data=>setdataSrc(item=>item.filter(item1=>item1.id!=data)))} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
       
      
        </BrowserRouter>,td)}]
     
      React.useEffect(()=>{
          Getdata('donateblood/getbydonor/'+props.id).then(data=>setdataSrc(data));
        },[props.id])
  
  
    return(
        <div class="modal fade" id="viewdonar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div class="card ">
            <div class="card-header bg-primary">  Donor  Detail
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
           <div class="card-body ">
<div className='row pb-3 border-bottom'>
<div className='col-md-6 row justify-content-between'>
    <h6>Donar Name</h6><div className='text-sm mx-3'>{props.donarName}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Age</h6><div className='text-sm mx-3'>{(props.ageyear||0)+' year'+(props.agemonth||0)+' month'}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Blood Group</h6><div className='text-sm mx-3'>{props.bloodGroup}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Gender</h6><div className='text-sm mx-3'>{props.gender}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Father Name</h6><div className='text-sm mx-3'>{props.fatherName}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Contact No</h6><div className='text-sm mx-3'>{props.contact}</div>
    </div>
    <div className='col-md-6 row justify-content-between'>
    <h6>Address</h6><div className='text-sm mx-3'>{props.address}</div>
    </div>

</div>
<div className='p-3'>
           <Table id='gdgd' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
  </div> 
  <DisplayForm data={index1}/>
  <AddDonate data={index}/>
         </div>
     </div>
     </div>
     </div>
     </div>
    )
}