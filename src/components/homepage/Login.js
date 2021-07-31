import React from 'react';
import {useFormik} from 'formik'
import {Postdata} from '../../Network/Server'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, Link, NavLink } from 'react-router-dom';
import * as yup from 'yup'
import Forgotpassword from './forgot-password';

export default (prop)=>
{
    const history=useHistory();
    const routedata={
  patient:'patient/appointment',
  receptionist:'receptionist',
  doctor:'doctor',
  admin:'admin',
  pharmacist:'pharmacist' ,
  pathologist:'pathologist',
  radiologist: 'radiologist',
  accountant:'accountant'        
  }
    const formik=useFormik({
    initialValues:{ 
      signupDate:new Date(),
      name:'',
    password:''},
  validationSchema:()=>
yup.object().shape({
  name:yup.string().email().required('error'),
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
          autoClose:true,
        position: toast.POSITION.TOP_CENTER
        }); 
      }
    })}
  
})
return(
<React.Fragment>
<div className="modal"   id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-zoomin" role="document">
    <div className="modal-content rounded bg-transparent">
  
  
  {/* /.login-logo */}
  <div className="card   m-0">
    <div className="card-body login-card-body">
    <button type="button" class="close " data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> 
      <h5 className="login-box-msg">Sign in </h5>
      <form onSubmit={formik.handleSubmit} method="post">
        <div className="input-group mb-3">
          <input type="email"  className={`form-control ${(formik.touched.name && formik.errors.name)?'is-invalid':''}`} placeholder="Email" {...formik.getFieldProps('name')} autoComplete='off'/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
          <div class="invalid-feedback">
          Please choose a username.
        </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" {...formik.getFieldProps('password')}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div> */}
          {/* /.col */}
          <div className="col-12 mb-3">
            <button type="submit" className="btn btn-success btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      {/* <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div> */}
      {/* /.social-auth-links */}
      <p className="mb-1">
        <Link  onClick={()=>{window.$('#login').modal('hide');window.$('#forgotpassword').modal('show')}}>I forgot my password</Link>
      </p>
     
    </div>
    {/* /.login-card-body */}
  </div>
</div>

      
    
  </div>
</div>
<Forgotpassword/>
</React.Fragment>)
}