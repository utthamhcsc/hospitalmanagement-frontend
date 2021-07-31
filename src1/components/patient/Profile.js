import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
import { toast } from 'react-toastify';


export default (props) =>
{
 const [isedit,setedit]=React.useState(true);  
 const [data,setdata]=React.useState({})
 const [show,setShow]=React.useState(false)
 let myedit=isedit;
 const formik1=useFormik({
  initialValues:{
      currentPassword:'',
      newPassword:''
  },
  onSubmit:v=>{
      console.log(v)
      PostFormdata('changepassword','POST',{...v,userId:window.localStorage.getItem('userId')})
      .then(data=>{
          console.log(data)
          if(data.err){
              toast.error(data.err,{autoClose:false})

          }
          else{
              toast.success(data.msg)
              setShow(!show)
          }
      }
      )
  }

})


 const formik = useFormik({
    enableReinitialize:true,
    initialValues:{
        ...data,role:'patient'
        }
    ,
        onSubmit:values=>{alert(JSON.stringify(values,null,2))
          values.patientId=window.localStorage.getItem('userId');
         Postdata('patientprofile/add','POST',values).then(data=>{console.log(data);setdata(data)})
        },
          validationSchema:Yup.object().shape({
           })
      })
React.useEffect(()=>{
  Getdata('patientprofile/get/patient/'+window.localStorage.getItem('userId')).then(
    data=>{
      console.log(data)
      setdata(data)
    }
  )
},[])
    return(
        <div class="modal fade" id="profile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
         <div class="modal-content" role="document">

        <div className="card  p-0">
            <div className="card-header bg-primary d-flex">
                <span className='w-75'>Profile</span>

            <button type="button" className='ml-5 btn btn-sm btn-light' onClick={()=>setedit(isedit=>!isedit)}>{!isedit?'cancel':'edit'}</button>
            <button type="button" class="close ml-5" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
            <div className="card-body p-0">
            <div className='row '>
                <div className='col-md-4 text-center pt-5 '>
                <img src={'dist/img/user2-160x160.jpg'} height="100" width="100" className="img-thumbnail rounded-circle" alt="User Image" alt='no img'/>
   <div className='px-5'>     <input type="text" disabled={isedit} {...formik.getFieldProps('name')} className={`form-control-plaintext ${!isedit?'border-bottom':''}`} id="staticEmail" />
   
   
   </div>
   {
(show)?<>
    <input className='form-control mt-1' 
    {...formik1.getFieldProps('currentPassword')}
    placeholder='current password'/>
   <input className='form-control my-1' 
       {...formik1.getFieldProps('newPassword')}
   placeholder='new password'/>
   <button className='btn btn-sm btn-light' onClick={()=>{
     formik1.handleSubmit()
       
   }}>change</button>
 
   </>
: <button className='btn btn-sm btn-light' onClick={()=>{
    setShow(!show)
}}>change password</button>
  } 
   
                </div>
                <div className='col-md-8 pt-5'>
                <div class="form-group row ">
    <label for="staticEmail" class="col-sm-4 col-form-label">Patient Id:</label>
    <div class="col-sm-6">
      <input type="text" disabled={true} {...formik.getFieldProps('patientId')} className={`text-center form-control-plaintext ${!isedit?'border-bottom':''}`} id="staticEmail" />
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Address</label>
    <div class="col-sm-6">
      <textarea type="text" disabled={isedit} {...formik.getFieldProps('address')} className={`form-control-plaintext ${!isedit?'border-bottom':''}`} id="staticEmail"  />
    </div>
  </div>
                </div>
                </div> 
                   {/* second row */}
                   <hr/>
                   <div class="form-group row px-5">
    <label for="staticEmail" class="col-sm-4 col-form-label">Gender</label>
    <div class="col-sm-6">
      <input type="text" disabled={isedit} {...formik.getFieldProps('gender')} className={`form-control-plaintext ${!isedit?'border-bottom':''}`} id="staticEmail"  />
    </div>
  </div>
  <div class="form-group row px-5">
    <label for="staticEmail" class="col-sm-4 col-form-label">Marital Status</label>
    <div class="col-sm-6">
      <input type="text" disabled={isedit} {...formik.getFieldProps('meritalStatus')} className={`form-control-plaintext ${!isedit?'border-bottom':''}`} id="staticEmail"  />
    </div>
  </div>
  <div class="form-group row px-5">
    <label for="staticEmail" class="col-sm-4 col-form-label">Phone</label>
    <div class="col-sm-6">
      <input type="text" disabled={isedit} {...formik.getFieldProps('phone')} className={`form-control-plaintext ${!isedit?'border-bottom':''}`} id="staticEmail"  />
    </div>
  </div>
  <div class="form-group row px-5">
    <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
    <div class="col-sm-6">
      <input type="text" disabled={isedit} {...formik.getFieldProps('email')} className={`form-control-plaintext ${!isedit?'border-bottom':''}`} id="staticEmail"  />
    </div>
  </div>
  <div class="form-group row px-5">
    <label for="staticEmail" class="col-sm-4 col-form-label">Age</label>
    <div class="col-sm-6">
      <input type="text" disabled={isedit} {...formik.getFieldProps('age')} className={`form-control-plaintext ${!isedit?'border-bottom':''}`} id="staticEmail"  />
    </div>
  </div>
  <div class="form-group row px-5">
    <label for="staticEmail" class="col-sm-4 col-form-label">Gardian Name</label>
    <div class="col-sm-6">
      <input type="text" disabled={isedit} {...formik.getFieldProps('guardianName')} className={`form-control-plaintext ${!isedit?'border-bottom':''}`} id="staticEmail"  />
    </div>
  </div>

  {!isedit?<button onClick={formik.handleSubmit} className='btn btn-sm form-control bg-primary'>submit</button>:''}
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}