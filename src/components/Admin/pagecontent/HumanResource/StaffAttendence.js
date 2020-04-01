import React from "react";
import { NavLink } from "react-router-dom";
import ReactDatePicker from "react-datepicker";

export default () => {
  return (
    <div>
      <div className="row p-0 justify-content-between align-items-center mx-0 px-3 py-2 bg-primary">
        <div className="h6 text-center">Staff Attendence</div>
       
      </div>
      <div className="row mx-0 px-3 py-2 border">
        <div className="col-md-6">
        <label className='h6'>Role</label><small className='text-danger'>*</small>
          <div className="form-group border">
              
            <select id='sel' style={{ border: "none", width: "100%",padding:'2px' }}>
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
        <div className="col-md-6">
        <label className='h6'>Date</label>
          <div className="form-group border">
              
            <ReactDatePicker autocomplete='off' placeholder='serach here....' selected={new Date()} className='border-0 w-100'/>
             
          </div>
          <div className='text-right'>
              <button type="button" className='btn btn-xs bg-primary'><i className='fa fa-search mx-1'/> Search</button>
          </div>
        </div>
      </div>
      <div className="row mx-0 px-3 py-2 ">
<div className='col-md-6 text-left'><button type="" className='btn btn-xs bg-primary'>mark as holiday</button></div>
<div className='col-md-6 text-right'><button type="" className='btn btn-xs bg-primary'>Save Atteddense</button></div>
        <div className='table-responsive'>
<table className='table table-borderless'>
    <thead className='bg-light border-bottom'>
        <th> Staff Id </th>
        <th> Name </th>
        <th> Role </th>
        <th>Attendence</th>
        <th>Note</th>
    </thead>
    <tbody>
        <tr>
         <td className='text-left'> Staff Id </td>
        <td className='text-left'> Name </td>
        <td className='text-left'> Role </td>
        <td className='text-left'>  
<input type='radio' className='custom-contol-input ml-2'/>  Present
<input type='radio' className='custom-contol-input ml-2'/>  Absent
<input type='radio' className='custom-contol-input ml-2'/> Late
<input type='radio' className='custom-contol-input ml-2'/> Half day 
         </td>
         <td className='text-left'><input type='text'/></td>
        </tr>
    </tbody>
    </table>
</div>
      </div>
    </div>
  );
};
