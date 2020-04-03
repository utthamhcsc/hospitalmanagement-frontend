import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { date } from 'yup'

export default function AddAmbulanceCall() {
    return (
      <div id="addambulancecall" className="modal fade in" role="dialog" aria-hidden="false">
  <div className="modal-dialog modal-dialog2 modal-lg">
    <div className="modal-content">
      <div className="modal-header bg-primary">
      <h6 className="modal-title">Add&nbsp;Ambulance&nbsp;Call</h6>
        <button type="button" className="close" data-dismiss="modal" autoComplete="off">×</button>
       
      </div>
      <div className="modal-body">
        <div className="row">
        <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Vehicle Model</label>
                       <select className='form-control'>
                           <option>v</option>
                           </select>
                     </div>
                     </div> 
                     <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Driver Name</label>
                       <input className='form-control'/>
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Date</label>
                       <ReactDatePicker className='form-control'/>
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Amount</label>
                       <input className='form-control'/>
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Patient Name</label>
                       <input className='form-control'/>
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Contact Num</label>
                       <input className='form-control'/>
                     </div>
                     </div> 
                     <div className='col-md-12'>
                     <div className='form-group'>
                         <label>Address</label>
                       <textarea className='form-control'/>
                     </div>
                     </div> 
                      
                         
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
