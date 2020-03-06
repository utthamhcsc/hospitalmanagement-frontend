 import React from 'react';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import {Postdata} from '../../../Network/Server'
import * as  Yup from 'yup';
export default (props) =>{

  const formik=useFormik({
    initialValues:{
      doctorId:'2',
      doctorName:'',
      department:'',
      day:'',
      startTime:'',
      endTime:'',
      perPatientTime:'',
      status:'',
      action:''
    
     },
     onSubmit:values=>{alert(JSON.stringify(values,null,2))
     Postdata('schedulelist/','POST',values).then(data=>{console.log(data.msg)})}
    });



    return(
      <div class="modal fade" id="myschedule" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
         <div class="modal-content" role="document">

    
        
    <div className="card ">
        <div className="card-header bg-primary">Add Schedule
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button> 
        </div>
        
        <div className="card-body border">
            <form onSubmit={formik.handleSubmit}>
                <div className=" ">
                <div className="d-flex justify-content-between   border bg-light p-3">
                  <div>Available Days</div>
                    <div>
                        <select id="input" className="form-inline" onChange={(e)=>formik.setFieldValue('day',e.target.value)}>
                        <option selected>Select</option>
                        <option>Monday</option>
                        <option>Tueday</option>
                        <option>Wednsday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturnday</option>
                        <option>Sunday</option>
                       </select>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-2 p-3 border bg-light ">
                  <div>Available Time</div>
                  
                  <DatePicker
                    selected={formik.values.startTime}
                    onChange={date => formik.setFieldValue('startTime',date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                   dateFormat="h:mm aa"
                  /> 
                 <DatePicker
                    selected={formik.values.endTime}
                    onChange={date =>  formik.setFieldValue('endTime',date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                   dateFormat="h:mm aa"
                  />
                 {/* <TimePicker
                 clockClassName='react-clock'
                    value={formik.values.endTime}
                    onChange={date =>  formik.setFieldValue('endTime',date)}
                    
                  />
                   */}
                </div>

                <div className="d-flex justify-content-between mt-2 p-3  border bg-light ">
                  <div>Per Patient Time</div>
                  <input type="number" className="form-inline w-25" placeholder="Time" onChange={(e)=>formik.setFieldValue('perPatientTime',e.target.value)}></input>
                  </div>

                  <div className="d-flex justify-content-between mt-2 p-3 border bg-light">
                    
                   <div>Status</div>
                   <div className=" form-group form-check form-check-inline" id="newpatient">
                    <input type="radio" className="form-check-input"  name="pat" onChange={(e)=>formik.setFieldValue('status','active')}/>
                     <label className="form-check-label" for="exampleCheck1">Active</label>
                  </div>
                  <div className=" form-group form-check form-check-inline" id="oldpatient">
                     <input type="radio" className="form-check-input" id="exampleCheck1" name="pat" onChange={(e)=>formik.setFieldValue('status','inactive')} />
                    <label className="form-check-label" for="exampleCheck1">In Active</label>
                  </div>
                  </div>
                </div>
                <div className="d-flex float-right">
                <button type="submit" class="btn btn-primary mt-2  ">Save</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    </div>
    </div>
   
   
)
}