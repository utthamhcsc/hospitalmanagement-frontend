import React from 'react'
import DatePicker from "react-datepicker/dist/react-datepicker"
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';
import { Postdata } from '../../../../Network/Server';
export default function AddNewMessage(props) {
  const formik=useFormik({
    initialValues:{
      title:'',
      message:'',
      publishDate:new Date(),
      noticeDate:new Date(),
      messageTo:[],
    },onSubmit:v=>{console.log(v)
    Postdata('mymessagecontroller/add','POST',v).then(res=>{
      console.log(res)
    })
    }
  }
  )
    return (
        <>
       <div class="card-body collapse show fade" id='basicInfo'>
         <div style={{backgroundColor:'#3f51b5'}}>    
           <h4 class="p-2 border text-white text-md">Compose New Message </h4>
         </div>
         <div className="form-row mt-4">
         <div className="col-8">
          <div>Title <small className='text-danger'> *</small></div>
          <input type="text" className="form-control mt-2" {...formik.getFieldProps('title')}/>
         
         <div className="mt-2">Message <small className='text-danger'> *</small></div>
          <textarea id="input" rows="10" className="form-control mt-2" {...formik.getFieldProps('message')}/>
          </div>
         

         <div className="col-4">
         <div>Notice Date <small className='text-danger'> *</small></div>
         <div className="w-100  ">
            <DatePicker autoComplete={'off'} 
            className="form-control mt-2" style={{width:'100% !important'}}
            minDate={new Date()}
            selected={new Date(formik.values.noticeDate)=='Invalid Date'?'':new Date(formik.values.noticeDate)}
           onChange={e=>formik.setFieldValue('noticeDate',e)}
           />
         </div>

         <div  className="mt-2">Publish On<small className='text-danger'> *</small></div>
         <div className="w-100 ">
            <DatePicker autoComplete={'off'} className="form-control mt-2" 
            style={{width:'100% !important'}} 
            minDate={new Date()}
            selected={new Date(formik.values.publishDate)=='Invalid Date'?'':new Date(formik.values.publishDate)}
           onChange={e=>formik.setFieldValue('publishDate',e)}
            />
         </div>
         <div className="mt-2">Message To </div>
         
          <div className="ml-2">
          <div class="custom-control custom-checkbox mt-2">
  <input type="checkbox" class="custom-control-input" id="admin" 
   checked={formik.values.messageTo.find(data=>data.role=='admin')}
   onChange={e=>{
   if(e.target.checked){
 formik.setFieldValue('messageTo',[...formik.values.messageTo,{role:'admin'}])
   }
 else{
  formik.setFieldValue('messageTo',formik.values.messageTo.filter(data=>data.role!='admin'))
 }
   }}
  name="admin" />
  <label class="custom-control-label" for="admin">Admin</label>
</div>


<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input"
  checked={formik.values.messageTo.find(data=>data.role=='accountant')}
  onChange={e=>{
    if(e.target.checked){
      formik.setFieldValue('messageTo',[...formik.values.messageTo,{role:'accountant'}])
        }
      else{
       formik.setFieldValue('messageTo',formik.values.messageTo.filter(data=>data.role!='accountant'))
      }
        }}
  id='accountant' name="accountant"/>
  <label class="custom-control-label" for="accountant">Accountant</label>
</div>

<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="doctor"
  checked={formik.values.messageTo.find(data=>data.role=='doctor')}
  onChange={e=>{
    if(e.target.checked){
      formik.setFieldValue('messageTo',[...formik.values.messageTo,{role:'doctor'}])
        }
      else{
       formik.setFieldValue('messageTo',formik.values.messageTo.filter(data=>data.role!='doctor'))
      }
        }}
  
  name="doctor"/>
  <label class="custom-control-label" for="doctor">Doctor</label>
</div>
<div class="custom-control custom-checkbox ">
  <input type="checkbox" class="custom-control-input"
checked={formik.values.messageTo.find(data=>data.role=='pharmacist')}
  onChange={e=>{
    if(e.target.checked){
    formik.setFieldValue('messageTo',[...formik.values.messageTo,{role:'pharmacist'}])
        }
      else{
       formik.setFieldValue('messageTo',formik.values.messageTo.filter(data=>data.role!='pharmacist'))
      }
        }}
  
  id="pharmacist" name="pharmacist"/>
  <label class="custom-control-label" for="pharmacist">Pharmacist</label>
</div>


<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" 
  checked={formik.values.messageTo.find(data=>data.role=='pathologist')}
  onChange={e=>{
    if(e.target.checked){
      formik.setFieldValue('messageTo',[...formik.values.messageTo,{role:'pathologist'}])
        }
      else{
       formik.setFieldValue('messageTo',formik.values.messageTo.filter(data=>data.role!='pathologist'))
      }
        }}
  
  id="pathologist" name="pathologist" />
  <label class="custom-control-label" for="pathologist">Pathalogist </label>
</div>


<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input"
  checked={formik.values.messageTo.find(data=>data.role=='radiologist')}
  onChange={e=>{
    if(e.target.checked){
      formik.setFieldValue('messageTo',[...formik.values.messageTo,{role:'radiologist'}])
        }
      else{
       formik.setFieldValue('messageTo',formik.values.messageTo.filter(data=>data.role!='radiologist'))
      }
        }}
  
  id="radiologist" name="radiologist"/>
  <label class="custom-control-label" for="radiologist">Radiologist </label>
</div>

<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" 
  checked={formik.values.messageTo.find(data=>data.role=='receptionist')}
  onChange={e=>{
    if(e.target.checked){
      formik.setFieldValue('messageTo',[...formik.values.messageTo,{role:'receptionist'}])
        }
      else{
       formik.setFieldValue('messageTo',formik.values.messageTo.filter(data=>data.role!='receptionist'))
      }
        }}
  
  id="receptionist" name="receptionist"/>
  <label class="custom-control-label" for="receptionist">Receptionist </label>
</div>

</div>
         </div>
         </div>
         <div className="d-flex float-right">
             <button onClick={formik.handleSubmit} className="form-control bg-primary mt-4"> <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
Send</button>
            </div>
         
       </div>   
        
        </>
    )
}
