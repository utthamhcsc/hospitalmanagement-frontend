import React from 'react';
import {useFormik} from 'formik'
import {Postdata} from '../../Network/Server'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'

export default (prop)=>
{
    const history=useHistory();
    const routedata={
  patient:'patient/appointment',
  receptionist:'receptionist/appointment',
  doctor:'doctor/appointment',
  admin:'admin/appointment',
  pharmacist:'pharmacist/pharmacy'          
  }
    const formik=useFormik({
    initialValues:{ 
      signupDate:new Date(),
      name:'',
    password:''},
  validationSchema:()=>
yup.object().shape({
  name:yup.string().required(),
  password:yup.string().required()
})
  ,
  onSubmit:values=>
  {
  //  alert(JSON.stringify(values));
    Postdata('login','POST',values).then(data=>{
      console.log(data.msg)
      if(data.msg.status==1){
        
          toast.success(data.msg.msg, {
          position: toast.POSITION.TOP_CENTER
        });
        window.localStorage.setItem('islogin',true)
        window.localStorage.setItem('userId',data.msg.details.userId);
        window.localStorage.setItem('name',data.msg.details.name);
        window.localStorage.setItem('role',data.msg.details.role)
       // window.location.href='/dashboard/appointment'
       window.location.href=routedata[data.msg.details.role];
      }
      else
      {
        toast.error(data.msg.msg, {
          autoClose:false,
        position: toast.POSITION.TOP_CENTER
        }); 
      }
    })}
  
})
return(
<React.Fragment>
<div className="modal fade"   id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog border" role="document">
    <div className="modal-content ">
      <div className="card-header bg-success">Login
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button></div>
      <div className="modal-body " >
         
          <form class="text-center p-3" onSubmit={formik.handleSubmit}> 
        
          <div className="m-4 p-4 ">
          <div class="form-group d-flex align-items-baseline">
          <i class="fa fa-user " aria-hidden="true"></i>
         <input type="text" class={`form-control  border-top-0 border-left-0  border-right-0 bg-transparent pl-2 ${formik.errors.name?'border-danger':''}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UserName" onChange={(e)=>formik.setFieldValue('name',e.target.value)}/>
        </div>
        <span className='text-danger'>{formik.errors.name}</span>
  <div class="form-group d-flex align-items-baseline">
    <i class="fa fa-key " aria-hidden="true"></i>
     <input type="password" class={`form-control  border-top-0 border-left-0  border-right-0 bg-transparent pl-2 ${formik.errors.password?'border-danger':''}`} id="exampleInputPassword1" placeholder="Password" onChange={(e)=>formik.setFieldValue('password',e.target.value)}/>
     
  </div>
  
  <span className='text-danger'>{formik.errors.password}</span>
  </div>
  <button type="submit" class="btn btn-outline-success w-25 ">Login</button>
</form>
{
 // <div class="text-center p-0">
 // <button type="button" class="btn btn-link  text-center ">Forgot Password ?</button>
  //<span class="d-block mb-3 text-black">- - - - - OR - - - - -</span>
  //<span class="bg-primary p-1 mr-3"><i class="fab fa-facebook"></i></span> 
//<span class="bg-danger p-1 mr-3"><i class="fab fa-google-plus"></i></span>
//</div>
}
      </div>
    </div>
  </div>
</div>
</React.Fragment>)
}