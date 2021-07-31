import React from 'react'
import DatePicker from "react-datepicker/dist/react-datepicker"
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';
export default function SendEmail(props) {
    const {formik}=props
    return (
        <>
       <div class="card-body collapse show fade" id='basicInfo'>
         <div class="">    
           <h4 class="p-2 border bg-light text-md">Send Email/SMS </h4>
         </div>
         <div className="form-row mt-4">
         <div className="col-8">
          <label>Title <small className='text-danger'> *</small></label>
          <input type="text" className="form-control mt-2"/>
         
         <div className="mt-2">Send Through<small className='text-danger'> *</small>
         
<div className="ml-2 custom-control custom-radio custom-control-inline ">
  <input type="radio" class="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample"/>
  <label class="custom-control-label" for="defaultInline1">Email</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample"/>
  <label class="custom-control-label" for="defaultInline2">SMS</label>
</div>


         </div>
         <label className="mt-2">Message<small className='text-danger'> *</small> </label>
          <textarea id="input" rows="10" className="form-control mt-2"/>
          </div>
         

         <div className="col-4">
         
         <label className="mt-2 ml-2">Message To<small className='text-danger'> *</small></label>
         
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
