import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div>
      <div className="row p-0 justify-content-between align-items-center mx-0 px-3 py-2 bg-primary">
        <div className="h6 text-center">Staff Directory</div>
        <div>
          <NavLink type="button" to='/admin/humanResource/addStaff' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-plus" /> Add Staff{" "}
          </NavLink>
          <NavLink type="button" to='/admin/humanResource/staffAttendence' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-reorder" /> Staff Attendence
          </NavLink>
          <NavLink type="button" to='/admin/humanResource/payroll' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-reorder" /> Payroll
          </NavLink>
          <NavLink type="button" to='/admin/humanResource/leaves' className="btn btn-xs btn-light ml-1">
            <i className="fa fa-reorder" /> Leaves
          </NavLink>
        </div>
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
          <div className='text-right'>
              <button type="button" className='btn btn-xs bg-primary'><i className='fa fa-search mx-1'/> Search</button>
          </div>
        </div>
        <div className="col-md-6">
        <label className='h6'>Search by Keyword</label>
          <div className="form-group border">
              
            <input autocomplete='off' placeholder='serach here....' style={{ border: "none", width: "100%",padding:'2px' }}/>
             
          </div>
          <div className='text-right'>
              <button type="button" className='btn btn-xs bg-primary'><i className='fa fa-search mx-1'/> Search</button>
          </div>
        </div>
      </div>
      <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
<table className='table table-borderless'>
    <thead className='bg-light border-bottom'>
        <th> Staff Id </th>
        <th> Name </th>
        <th> Role </th>
        <th> Department </th>
        <th> Designation </th>
        <th> Mobile Number </th>
        <th> Action </th>
    </thead>
    <tbody>
        <tr>
         <td className='text-left'> Staff Id </td>
        <td className='text-left'> Name </td>
        <td className='text-left'> Role </td>
        <td className='text-left'> Department </td>
        <td className='text-left'> Designation </td>
        <td className='text-left'> Mobile Number </td>
        <td className='text-left'> <button className='btn btn-xs btn-light'><i className='fa fa-pencil'/></button>
        <button className='btn btn-xs btn-light'><i className='fa fa-trash'/></button>
         </td>
        </tr>
    </tbody>
    </table>
</div>
      </div>
    </div>
  );
};
