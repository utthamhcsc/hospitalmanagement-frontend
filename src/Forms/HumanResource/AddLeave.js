import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { date } from 'yup'
import { useFormik } from 'formik'
import { Getdata, PostFormdata } from '../../Network/Server'

export default function AddLeave(props) {
const [data,setdata]=useState([])
const formik=useFormik({
  initialValues:{
    ...props.data  
  },
  enableReinitialize:true,
  onSubmit:e=>{
    let role=window.localStorage.getItem('role')
    let staffId=window.localStorage.getItem('userId')
    let item=data.find(item=>item.id=e.leaveTypeId);
    let leaveType=item?item.name:'';
    console.log({...e,staffId,role})
    PostFormdata('humanResource/leave/add','POST',e).then(res=>{
      if(e.id)
      props.setdataSrc(f=>f.map(item=>item.id==res.id?{...res,leaveType}:item))  
      else
      props.setdataSrc(f=>[{...res,leaveType},...f])

window.$('#addleave').modal('hide')
})
  }
})
React.useEffect(()=>{
  Getdata('leaveType/get').then(data=>setdata(data));
},[])

    return (
      <div id="addleave" className="modal fade in" role="dialog" aria-hidden="false">
  <div className="modal-dialog modal-dialog2 modal-lg">
    <div className="modal-content">
      <div className="modal-header bg-primary">
      <h6 className="modal-title">Add&nbsp;Details</h6>
        <button type="button" className="close" data-dismiss="modal" autoComplete="off">×</button>
       
      </div>
      <div className="modal-body">
        <div className="row">
                 
                      
                     
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Apply Date</label>
                       <ReactDatePicker  className='form-control' 
                       selected={new Date(formik.values.applyDate)=='Invalid Date'?
                       new Date():new Date(formik.values.applyDate)} 
                        
                       onChange={e=>formik.setFieldValue('applyDate',e)}/>
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Leave Type</label>
                       <select 
                       className='form-control'
                       {...formik.getFieldProps('leaveTypeId')}
                       >
                       <option value="">Select</option>
             {
               (data||[]).map(item=><option value={item.id}>{item.name}</option>)
             }
                       </select>
                     </div>
                     </div> 
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>From Date</label>
                       <ReactDatePicker  className='form-control' 
                     selected={new Date(formik.values.fromDate)=='Invalid Date'?new Date():new Date(formik.values.fromDate)} 
                      onChange={e=>formik.setFieldValue('fromDate',e)}/>
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>To Date</label>
                       <ReactDatePicker  className='form-control' 
                        selected={new Date(formik.values.toDate)=='Invalid Date'?
                        new Date():new Date(formik.values.toDate)} 
                        
                        onChange={e=>formik.setFieldValue('toDate',e)}/>
                     </div>
                     </div>
                     <div className='col-md-12'>
                     <div className='form-group'>
                       <label>Reason</label>
                       <textarea 
                        className='form-control'
                        {...formik.getFieldProps('reason')}
                        />
                     </div>
                     </div>
                     
                     <div className='col-md-12'>
                     <div className='form-group'>
                       <label>Attach Document</label>
                       <input  
                       className='form-control' 
                       type='file'
                       onChange={e=>formik.setFieldValue('file',e.target.files[0])}
                       />
                     </div>
                     </div>     
                     <div className='col-md-12 border-top pt-3'>
                     <div className='form-group text-right'>
                       <button 
                       className='btn btn-sm bg-primary'
                       onClick={formik.handleSubmit}
                       >save</button>
                     </div>
                     </div> 
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
