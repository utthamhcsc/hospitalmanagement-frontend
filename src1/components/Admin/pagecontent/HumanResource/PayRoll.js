import React from "react";
import { NavLink } from "react-router-dom";
import ReactDatePicker from "react-datepicker";

export default () => {
  return (
    <div>
      <div className="row p-0 justify-content-between align-items-center mx-0 px-3 py-2 bg-primary">
        <div className="h6 text-center">PayRoll</div>
       
      </div>
      <div className="row mx-0 px-3 py-2 border">
        <div className="col-md-4">
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
        <div className="col-md-4">
        <label className='h6'>Month</label>
          <div className="form-group border">
              
          <select id="class_id" name="month" style={{ border: "none", width: "100%",padding:'2px' }}> autocomplete="off">
                                            <option value="select">Select</option>
                                                                                            <option value="January">January</option>
                                                                                                        <option value="February">February</option>
                                                                                                        <option value="March" selected="selected">March</option>
                                                                                                        <option value="April">April</option>
                                                                                                        <option value="May">May</option>
                                                                                                        <option value="June">June</option>
                                                                                                        <option value="July">July</option>
                                                                                                        <option value="August">August</option>
                                                                                                        <option value="September">September</option>
                                                                                                        <option value="October">October</option>
                                                                                                        <option value="November">November</option>
                                                                                                        <option value="December">December</option>
                                                            

                                        </select> 
          </div>
          </div>
          <div className="col-md-4">
        <label className='h6'>Year</label>
          <div className="form-group border">
           
          <select id="class_id" name="month" style={{ border: "none", width: "100%",padding:'2px' }}> autocomplete="off">
                                         {<>
                                        <option>{new Date().getFullYear()-2}</option>
                                    <option>{new Date().getFullYear()-1}</option>
                                        <option selected>{new Date().getFullYear()}</option>
                                       
</>
                                    }

                                        </select>   
          </div>
          <div className='text-right'>
              <button type="button" className='btn btn-xs bg-primary'><i className='fa fa-search mx-1'/> Search</button>
          </div>
        </div>
      </div> <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
<table className='table table-borderless'>
    <thead className='bg-light border-bottom'>
        <th> Staff Id </th>
        <th> Name </th>
        <th> Role </th>
        <th> Department </th>
        <th> Designation </th>
        <th> Phone </th>
        <th>Status</th>
        <th> Action </th>
    </thead>
    <tbody>
        <tr>
         <td className='text-left'> Staff Id </td>
        <td className='text-left'> Name </td>
        <td className='text-left'> Role </td>
        <td className='text-left'> Department </td>
        <td className='text-left'> Designation </td>
        <td className='text-left'> Phone </td>
        <td className='text-left'>paid</td>
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
