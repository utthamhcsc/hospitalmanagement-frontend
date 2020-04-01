import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { date } from 'yup'

export default function AddLeaveRequest() {
    return (
      <div id="addleaverequest" className="modal fade in" role="dialog" aria-hidden="false">
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
                       <label>Role</label>
                       <select className='form-control'>
                       <option value="">Select</option>
              <option value="Admin">Admin</option>
              <option value="Accountant">Accountant</option>
              <option value="Doctor">
                Doctor
              </option>
              <option value="Pharmacist">Pharmacist</option>
              <option value="Pathologist">Pathologist</option>
              <option value="Radiologist">Radiologist</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Receptionist">Receptionist</option>
                       </select>
                     </div>
                     </div> 
                      
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Name</label>
                       <select className='form-control'>
                       <option value="">Select</option>
              <option value="Admin">Admin</option>
              <option value="Accountant">Accountant</option>
              <option value="Doctor">
                Doctor
              </option>
              <option value="Pharmacist">Pharmacist</option>
              <option value="Pathologist">Pathologist</option>
              <option value="Radiologist">Radiologist</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Receptionist">Receptionist</option>
                       </select>
                     </div>
                     </div> 
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Apply Date</label>
                       <ReactDatePicker  className='form-control' selected={new Date()}/>
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Leave Type</label>
                       <select className='form-control'>
                       <option value="">Select</option>
              <option value="Admin">Admin</option>
              <option value="Accountant">Accountant</option>
              <option value="Doctor">
                Doctor
              </option>
              <option value="Pharmacist">Pharmacist</option>
              <option value="Pathologist">Pathologist</option>
              <option value="Radiologist">Radiologist</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Receptionist">Receptionist</option>
                       </select>
                     </div>
                     </div> 
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>From Date</label>
                       <ReactDatePicker  className='form-control' selected={new Date()}/>
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>To Date</label>
                       <ReactDatePicker  className='form-control' selected={new Date()}/>
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Reason</label>
                       <textarea  className='form-control' />
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Note</label>
                       <textarea  className='form-control' />
                     </div>
                     </div>
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label>Attach Document</label>
                       <input  className='form-control' type='file'/>
                     </div>
                     </div>     
                     <div className='col-md-6'>
                     <div className='form-group'>
                       <label className='text-white'>x</label>
                       <div className='form-control border-0'>
                       <input className='mx-1' type='radio'/> pending
                       <input className='mx-1' type='radio'/> approve
                       <input className='mx-1' type='radio'/> disapprove
                       </div>
                     </div>
                     </div> 
                     <hr/>
                     <div className='col-md-12 border-top pt-3'>
                     <div className='form-group text-right'>
                       <button className='btn btn-sm bg-primary'>save</button>
                     </div>
                     </div> 
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
