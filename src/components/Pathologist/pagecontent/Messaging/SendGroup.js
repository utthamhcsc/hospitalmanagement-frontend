import React from 'react'
import { useFormik } from 'formik'
import { Postdata } from '../../../../Network/Server'

export default function SendGroup() {
  const formik=useFormik({
    initialValues:{
      title:'',
      message:'',
      sendEmail:false,
      sendSms:false,
      messageTo:[],
    },onSubmit:v=>{console.log(v)
    Postdata('mysendemail/add','POST',v).then(res=>{
      console.log(res)
    })
    }
  }
  )
 
    return (
        <div className="tab-pane active" id="tab_group">
        <form >
          {/* /.box-header */}
          <div className="box-body">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label>Title</label><small className="req"> *</small>
                  <input className="form-control" {...formik.getFieldProps('title')} />
                </div>
                <div className="form-group">
                  <label className="pr20">Send Through<small className="req"> *</small></label>
                  <label className="checkbox-inline">
                    <input type="checkbox" name='email' onChange={e=>formik.setFieldValue('sendEmail',!formik.values.sendEmail)}  checked={formik.values.sendEmail}/> Email                                              </label>
                  <label className="checkbox-inline">
                    <input type="checkbox" name='sms' onChange={e=>formik.setFieldValue('sendSms',!formik.values.sendSms)}  checked={formik.values.sendSms} />SMS                                              </label>
                  <span className="text-danger" />
                </div>
                <div className="mt-2">Message <small className='text-danger'> *</small>
          <textarea id="input" rows="10" className="form-control mt-2" {...formik.getFieldProps('message')}/>
          </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                  <div className='text-left'>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Message To</label><small className="req"> *</small>
                  <div className="well minheight303">
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
              </div>
            </div>
          </div>
          {/* /.box-body */}
          <div className="box-footer">
            <div className="pull-right">
              <button onClick={formik.handleSubmit} className="btn btn-primary submit_group" ><i className="fa fa-envelope-o" /> Send</button>
            </div>
          </div>
          {/* /.box-footer */}
        </form>
      </div>
    )
}
