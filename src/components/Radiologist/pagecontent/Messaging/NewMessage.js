import React from 'react'
import DatePicker from "react-datepicker/dist/react-datepicker"
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';
export default function AddNewMessage(props) {
    const {formik}=props
    return (
        <>
       <div class="card-body collapse show fade" id='basicInfo'>
         <div class="">    
           <h4 class="p-2 border bg-light text-md">Compose New Message </h4>
         </div>
         <div className="form-row mt-4">
         <div className="col-8">
          <div>Title <small className='text-danger'> *</small></div>
          <input type="text" className="form-control mt-2"/>
         
         <div className="mt-2">Message <small className='text-danger'> *</small></div>
          <textarea id="input" rows="10" className="form-control mt-2"/>
          </div>
         

         <div className="col-4">
         <div>Notice Date <small className='text-danger'> *</small></div>
         <div className="w-100  ">
            <DatePicker autoComplete={false} className="form-control mt-2" style={{width:'100% !important'}} />
         </div>

         <div  className="mt-2">Publish On<small className='text-danger'> *</small></div>
         <div className="w-100 ">
            <DatePicker autoComplete={false} className="form-control mt-2" style={{width:'100% !important'}} />
         </div>
         <div className="mt-2">Message To </div>
         
          <div className="ml-2">
         <div class="custom-control custom-radio mt-2">
  <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" checked/>
  <label class="custom-control-label" for="defaultGroupExample2">Admin</label>
</div>


<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"/>
  <label class="custom-control-label" for="defaultGroupExample3">Accountant</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"/>
  <label class="custom-control-label" for="defaultGroupExample3">Doctor</label>
</div>
<div class="custom-control custom-radio ">
  <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios"/>
  <label class="custom-control-label" for="defaultGroupExample1">Pharmacist</label>
</div>


<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" checked/>
  <label class="custom-control-label" for="defaultGroupExample2">Pathalogist</label>
</div>


<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"/>
  <label class="custom-control-label" for="defaultGroupExample3">Radiologist</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"/>
  <label class="custom-control-label" for="defaultGroupExample3">Receptionist</label>
</div>
</div>
         </div>
         </div>
         <div className="d-flex float-right">
             <button type="submit"className="form-control bg-primary mt-4"> <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
Send</button>
            </div>
         
       </div>   
        
        </>
    )
}
