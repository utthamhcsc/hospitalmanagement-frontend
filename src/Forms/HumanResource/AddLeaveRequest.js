import React, { useEffect, useState, useCallback } from 'react'
import ReactDatePicker from 'react-datepicker'
import { date } from 'yup'
import { Getdata, PostFormdata } from '../../Network/Server'
import { useFormik } from 'formik'

export default function AddLeaveRequest(props) {
console.log(props.data)
const [data,setData]=useState({})
const [leave,setleave]=useState([])
const formik=useFormik({
  initialValues:{
  ...props.data  
  },
  enableReinitialize:true,
  onSubmit:e=>{
    let role=window.localStorage.getItem('role')
    let staffId=window.localStorage.getItem('userId')
    let item=leave.find(item=>item.id=e.leaveTypeId);
    let leaveType=item?item.name:'';
    console.log({...e,staffId,role})
    PostFormdata('humanResource/leave/add','POST',e).then(res=>{
      if(e.id)
      props.setdataSrc(f=>f.map(item=>item.id==res.id?{...res,name:data[res.staffId],leaveType}:item))  
      else
      props.setdataSrc(f=>[{...res,name:data[res.staffId],leaveType},...f])

window.$('#addleaverequest').modal('hide')
    })
  }
})
React.useEffect(()=>{
  Getdata('leaveType/get').then(data=>setleave(data));
  
},[])

const fetchbyrole=(role)=>{
Getdata('fetchalluser/'+role||'123').then(data=>setData(data))
}
//useCallback(Getdata('fetchalluser/'+formik.values.role||'123').then(data=>setData(data)),[formik.values.role])
    return (
      <div id="addleaverequest" className="modal fade in" role="dialog" aria-hidden="false">
  <div className="modal-dialog modal-dialog2 modal-lg">
    <div className="modal-content">
      <div className="modal-header ">
      <h5 className="modal-title">Add&nbsp;Details</h5>
        <button type="button" className="close" data-dismiss="modal" autoComplete="off">×</button>
       
      </div>
      <div className="modal-body">
        <div className="row">
                   <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Role</label>
                       <select className='form-control' value={formik.values.role} 
                       onChange={(e)=>{fetchbyrole(e.target.value);formik.setFieldValue('role',e.target.value);}}
                       >
                       <option value="">Select</option>
                       <option value="admin">Admin</option>
                                                                            <option value="accountant">Accountant</option>
                                                                            <option value="doctor">Doctor</option>
                                                                            <option value="pharmacist">Pharmacist</option>
                                                                            <option value="labtechnician">Pathologist</option>
                                                                            <option value="receptionist">Receptionist</option>
                                                            
                       </select>
                     </div>
                     </div> 
                      
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Name</label>
                       <select className='form-control' {...formik.getFieldProps('staffId')} >
                       <option value="">Select</option>
              {
                Object.keys(data||{}).map(item=><option value={item}>{data[item]}</option>)
              }
                       </select>
                     </div>
                     </div> 
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Apply Date</label>
                       <ReactDatePicker  
                       minDate={new Date()}
                       className='form-control' 
                       selected={new Date(formik.values.applyDate)=='Invalid Date'?new Date():new Date(formik.values.applyDate)} 
                        onChange={e=>formik.setFieldValue('applyDate',e)}/>
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Leave Type</label>
                       <select className='form-control' {...formik.getFieldProps('leaveTypeId')}
                       >
                       <option value="">Select</option>
             {
               (leave||[]).map(item=><option value={item.id}>{item.name}</option>)
             }
                       </select>
                     </div>
                     </div> 
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>From Date</label>
                       <ReactDatePicker  
                       minDate={new Date()}
                       className='form-control' 
                       selected={new Date(formik.values.fromDate)=='Invalid Date'?new Date():new Date(formik.values.fromDate)} 
                       onChange={e=>formik.setFieldValue('fromDate',e)}
                       />
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>To Date</label>
                       <ReactDatePicker  
                       minDate={new Date()}
                       className='form-control' 
                       selected={new Date(formik.values.toDate)=='Invalid Date'?new Date():new Date(formik.values.toDate)} 
                       onChange={e=>formik.setFieldValue('toDate',e)}
                       />
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Reason</label>
                       <textarea  className='form-control' 
                       {...formik.getFieldProps('reason')}
                       />
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Note</label>
                       <textarea  
                       className='form-control'
                       {...formik.getFieldProps('note')}
                       />
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Attach Document</label>
                       <input  className='form-control' type='file'
                     
                       onChange={e=>formik.setFieldValue('file',e.target.files[0])}
                       />
                     </div>
                     </div>     
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label className='text-white'>x</label>
                       <div className='form-control border-0'>
                       <input className='mx-1' type='radio' name='status' value='pending' onChange={(e)=>formik.setFieldValue('status',e.target.value)}  checked={formik.values.status=='pending'}/> pending
                       <input className='mx-1' type='radio' name='status' value='approve' 
                       onChange={(e)=>formik.setFieldValue('status',e.target.value)} checked={formik.values.status=='approve'}/> approve
                       <input className='mx-1' type='radio' name='status' value='disapprove'
                        onChange={(e)=>formik.setFieldValue('status',e.target.value)} checked={formik.values.status=='disapprove'}/> disapprove
                       </div>
                     </div>
                     </div> 
                     <hr/>
                     <div className='col-md-12 border-top pt-3'>
                     <div className='form-group text-right'>
                       <button className='btn btn-sm bg-primary' onClick={formik.handleSubmit}>save</button>
                     </div>
                     </div> 
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
