import React,{useState,useEffect} from 'react';
import {useFormik, yupToFormErrors} from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Getdata,Postdata} from '../Network/Server'
import * as yup from 'yup'

export default (props)=>
{

  const [doctor,setdoctor]=React.useState([])
  const [data,setData]=React.useState({});
  const [pid,setPid]=useState(true);
 const mydata=(Object.entries(props.data).length === 0 )?
 {   patientId:'',
 date:'',
 appointmentStatus:'pending',
 patientName:'',
 gender:'',
 email:'',
 mobileNumber:'',
 message:'',
 department:'',
 doctor:'',
 doctorId:'',
 address:''
}:{...props.data};

 const formik = useFormik({
   
 enableReinitialize:true,
 initialValues:{
      
  ...mydata
   },
    onSubmit:values=>{console.log(JSON.stringify(values,null,2))
    Postdata('myappointment/add','POST',values).then(data=>{
      if(data.err){
formik.setErrors(data)
      }else{
        values.id?
        props.setdataSrc(item=>item.map(item1=>{
          if(item1.id==data.id)return data;else return item1;
  
        })):
        props.setdataSrc(item=>[data,...item])
        window.$('#bookappointment').modal('hide')
      }
    })
  
  }
 // 
  
    
    ,
      validationSchema:()=>yup.object().shape({
      date:yup.date().required(),
      patientName:!pid?yup.string().required():yup.string().notRequired(),
      gender:!pid?yup.string().required():yup.string().notRequired(),
      email:!pid?yup.string().email().required():yup.string().notRequired(),
      mobileNumber:!pid?yup.string().required().matches(/^[0-9]{10,10}$/,'must be 10 digit and number'):yup.string().notRequired(),
      message:yup.string().required(),
      //department:yup.string().required(),
     // doctor:yup.string().required(),
      address:!pid?yup.string().required():yup.string().notRequired()
    })


  })
  React.useEffect(()=>{
    
    if(!mydata.department=='')
    fetchdoctor(mydata.department)
    
  },[props.data])
   const fetchdoctor=(id)=>{
    Getdata('humanResource/get/doctor/'+id).then(data=>{setdoctor(data)})
   }
return(<React.Fragment>
<div className="modal fade "  id="bookappointment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content rounded bg-transparent">
      
       
      
    <div className="card   m-0">
    <div className="card-body login-card-body">
    <button type="button" class="close " data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> 
      <h5 className="login-box-msg">Book My Appointment</h5>
        
        
  <div className=" form-group form-check form-check-inline" id="newpatient">
    <input type="radio" className="form-check-input"  name="pat" onClick={()=>{setPid(false);formik.setErrors({})}} checked={!pid}/>
    <label className="form-check-label" for="exampleCheck1">New Patient</label>
  </div>
   <div className=" form-group form-check form-check-inline" id="oldpatient">
    <input type="radio" className="form-check-input" id="exampleCheck1" name="pat" onClick={()=>{setPid(true);;formik.setErrors({}) }} checked={pid}/>
    <label className="form-check-label" for="exampleCheck1">Old Patient</label>
  </div>
<div className='pt-2 text-danger'>{formik.errors.err}</div>
  <form onSubmit={formik.handleSubmit}>
  <div className="input-group mb-3" style={pid?{display:'flex'}:{display:'none'}}>
          <input type="text"  className={`form-control ${(formik.touched.patientId && formik.errors.patientId)?'is-invalid':''}`} placeholder="Enter PatientId...." {...formik.getFieldProps('patientId')} autoComplete='off'/>
          <div className="input-group-append rounded">
            <div className="input-group-text">
              <span className="fa fa-id-badge" />
            </div>
          </div>
          
        </div>
<div className="input-group mb-3" style={!pid?{display:'flex'}:{display:'none'}}>
  <input type="text" className={`form-control ${(formik.touched.patientName && formik.errors.patientName)?'is-invalid':''}`} name="patientName" {...formik.getFieldProps('patientName')}placeholder="Enter Patient Name" />
  <div className="input-group-append ">
    <span className="input-group-text " id="basic-addon2"><i className="fa fa-user " aria-hidden="true"></i></span>
  </div>
  <div class="invalid-feedback">
          {formik.errors.patientName}
        </div>
</div>
   <div className="input-group mb-3" style={!pid?{display:'flex'}:{display:'none'}}>
     <div className="input-group-prepend">
    <span className="input-group-text border" id="basic-addon1">+91</span>
  </div>
  <input type="text" className="form-control "name="mobileNumber" {...formik.getFieldProps('mobileNumber')} placeholder="Mobile Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
   <div className="input-group-append " >
    <span className="input-group-text  " id="basic-addon2"><i className="fa fa-mobile" aria-hidden="true"></i></span>
  </div>
  </div>
   
  <div className="input-group mb-3" style={!pid?{display:'flex'}:{display:'none'}}>
  <input type="text" className="form-control " name="email" {...formik.getFieldProps('email')} placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div className="input-group-append ">
  <span className="input-group-text  " id="basic-addon2"><i className="fas fa-envelope-square" aria-hidden="true"></i></span>
  </div>
  </div>
  
  <div className="input-group mb-3" style={!pid?{display:'flex'}:{display:'none'}}>
  <input type="text" className="form-control " name="address" {...formik.getFieldProps('address')} placeholder="Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div className="input-group-append ">
  <span className="input-group-text  " id="basic-addon2"><i className="fas fa-home " aria-hidden="true"></i></span>
  </div>
  </div>
  
  <div className="input-group mb-3" style={!pid?{display:'flex'}:{display:'none'}}>
  <select className="form-control border" name="gender" {...formik.getFieldProps('gender')}placeholder="Gender" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <option className="">Gender</option>
  <option className="">Male</option>
  <option className="">Female</option>
  </select>
  </div>
  
  <div className="input-group mb-3">
  <select className="form-control border" 
  name="department" value={formik.values.department} onChange={(e)=>{fetchdoctor(e.target.value);formik.setFieldValue('department',e.target.value)}} placeholder="Department" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <option > Select Department</option>
   {
     (props.department||[]).map(item=><option value={item.id}>{item.name}</option>)
   }
  </select>
  </div>
  <div className="input-group mb-3">
  <select className="form-control border" name="doctor" {...formik.getFieldProps('doctorId')} placeholder="Doctor" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <option value=''> Select Doctor</option>
  {
    (doctor||[]).map(data=><option value={data.doctorId}>{data.firstName+' '+data.lastName}</option>)
  }
   </select>
  </div>
  <div className='input-group mb-3'>
  <DatePicker minDate={new Date()} autoComplete={'off'} selected={new Date(formik.values.date)=='Invalid Date'?'':new Date(formik.values.date)} name='date' placeholderText='enter date' onChange={(e)=>formik.setFieldValue('date',e)} className="form-control border" />
  </div>
  <div className="input-group mb-3">
  <textarea className="form-control border" name="message" {...formik.getFieldProps('message')}  rows="4" placeholder="Problem" >
    Problem
  </textarea>
  </div>
   <button type="submit" className="btn btn-primary  btn-block ">Submit</button>
</form>
</div>
</div>
</div>
</div>
</div>
</React.Fragment>);
}