import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import { Getdata } from "../../../../Network/Server";
import { useFormik } from "formik";
export default () => {
  const [data, setdata] = useState([]);
  const formik = useFormik({
    initialValues: data,
    enableReinitialize: true,
    onSubmit: values => {
      if(values.holiday)values.data=[];
      console.log(values)
    }
  });

  useEffect(() => {
    formik.setFieldValue("date", new Date());
    Getdata("humanResource/get").then(data => {
      setdata({ date: new Date(), data:(data||[]).map(item => {
        return { ...item,attendence: "present",note:'' };
      }),holiday:false }
       
      );
     
      console.log(data);
    });
  }, []);
  return (
    <div>
      <div className="row p-0 justify-content-between align-items-center mx-0 px-3 py-2 bg-primary">
        <div className="h6 text-center">Staff Attendence</div>
      </div>
      <div className="row mx-0 px-3 py-2 border">
        <div className="col-md-6">
          <label className="h6">Role</label>
          <small className="text-danger">*</small>
          <div className="form-group border">
            <select
              id="sel"
              style={{ border: "none", width: "100%", padding: "2px" }}
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
        <div className="col-md-6">
          <label className="h6">Date</label>
          <div className="form-group border">
            <ReactDatePicker
              autocomplete="off"
              selected={formik.values.date}
              onChange={e=>{formik.setFieldValue('date',e)}}
              className="border-0 w-100"
            />
          </div>
          <div className="text-right">
            <button type="button" className="btn btn-xs bg-primary">
              <i className="fa fa-search mx-1" /> Search
            </button>
          </div>
        </div>
      </div>
      <div className="row mx-0 px-3 py-2 ">
        <div className="col-md-6 text-left">
          <button type="" onClick={()=>{formik.setFieldValue('holiday',true);formik.handleSubmit()}} className="btn btn-xs bg-primary">
            mark as holiday
          </button>
        </div>
        <div className="col-md-6 text-right">
          <button type="" className="btn btn-xs bg-primary" onClick={formik.handleSubmit}>
            Save Atteddense
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead className="bg-light border-bottom">
              <th> Staff Id </th>
              <th> Name </th>
              <th> Role </th>
              <th>Attendence</th>
              <th>Note</th>
            </thead>
            <tbody>
              {(formik.values.data || []).map((item, index) => (
                <tr>
                  <td className="text-left">{item.staffId}</td>
                  <td className="text-left"> {item.name} </td>
                  <td className="text-left"> {item.role} </td>
                  <td className="text-left">
                    <input
                      type="radio"
                      className="custom-contol-input ml-2"

                      onChange={(e)=>formik.setFieldValue(`data.${index}.attendence`,e.target.value)}
                      value="present"

                      checked={item.attendence == "present"}
                    />{" "}
                    Present
                    <input
                      type="radio"
                      className="custom-contol-input ml-2"
                      
                      onChange={(e)=>formik.setFieldValue(`data.${index}.attendence`,e.target.value)}
                      
                      value="absent"
                      checked={item.attendence == "absent"}
                    />{" "}
                    Absent
                    <input
                      type="radio"
                      className="custom-contol-input ml-2"
                      value="late"
                      
                      onChange={(e)=>formik.setFieldValue(`data.${index}.attendence`,e.target.value)}
                      
                      checked={item.attendence == "late"}
                    />{" "}
                    Late
                    <input
                      type="radio"
                      className="custom-contol-input ml-2"
                      value="halfDay"
                      
                      onChange={(e)=>formik.setFieldValue(`data.${index}.attendence`,e.target.value)}
                      
                      checked={item.attendence == "halfDay"}
                    />{" "} 
                    Half day
                  </td>
                  <td className="text-left">
                    <input type="text" {...formik.getFieldProps(`data.${index}.note`)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
