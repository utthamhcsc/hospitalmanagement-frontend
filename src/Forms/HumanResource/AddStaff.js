import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as Yup from 'yup'

import {toast} from 'react-toastify'
import ReactDatePicker from 'react-datepicker';
import { PostFormdata, Postdata } from '../../Network/Server';

export default  (props) => {
const formik=useFormik({
    initialValues:{

    staffId:'',
    role:'',
    designation:'',
    department:'',
    firstName:'',
    lastName:'',
    fatherName:'',
    motherName:'',
    gender:'',
    maritalStatus:'',
    bloodGroup:'',
    dateOfBirth:'',
    dateOfJoining:'',
    phone:'',
    email:'',
    photo:'',
    currentAddress:'',
    permnentAddress:'',
    qualification:'',
    workExperiance:'',
    specialization:'',
    note:'',
    accountTitle:'',
    accountNumber:'',
    bankName:'',
    ifscCode:'',
    bankBranchName:''
        
    },
    onSubmit:values=>{console.log(JSON.stringify(values,null,2))
        typeof(values.photo)=='string'?
        Postdata('staff/staff/','POST',values).then(data=>{toast.success('successfully added', {
            position: toast.POSITION.TOP_CENTER
          })}):
        PostFormdata('staff/','POST',values).then(data=>{toast.success('successfully added', {
     position: toast.POSITION.TOP_CENTER
   })})
},
validationSchema:Yup.object().shape({

   // staffId:'',
    role:Yup.string().required('required'),
    designation:Yup.string().required('required'),
    department:Yup.string().required('required'),
    firstName:Yup.string().required('required'),
    lastName:Yup.string().required('required'),
    fatherName:Yup.string().required('required'),
    motherName:Yup.string().required('required'),
    gender:Yup.string().required('required'),
    maritalStatus:Yup.string().required('required'),
    bloodGroup:Yup.string().required('required'),
    dateOfBirth:Yup.string().required('required'),
    dateOfJoining:Yup.string().required('required'),
    phone:Yup.string().required('required').matches(/^[0-9]{10}$/,'must be number and 10 digit'),
    email:Yup.string().email().required('required'),
    //photo:',
    currentAddress:Yup.string().required('required'),
    permnentAddress:Yup.string().required('required'),
    qualification:Yup.string().required('required'),
    workExperiance:Yup.string().required('required'),
    specialization:Yup.string().required('required'),
    note:Yup.string().required('required'),
    accountTitle:Yup.string().required('required'),
    accountNumber:Yup.string().required('required'),
    bankName:Yup.string().required('required'),
    ifscCode:Yup.string().required('required'),
    bankBranchName:Yup.string().required('required')
})
            })
   
   


  

return(
<div class="card">
                            <div class="">    

                                <h4 class="p-2 border bg-light text-md">Basic Information </h4>

                          </div>
                                <div class="card-body">
                                      
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Staff ID</label><small class="req"> *</small>
                                                <input autofocus="" id="employee_id" {...formik.getFieldProps('staffId')} name="employee_id" placeholder="" type="text" class="form-control" autocomplete="off"/>
                                            </div>
                                        </div>
                                        <div class="col-md-3">

                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Role</label><small class="req"> *</small>
                                                <select id="role" name="role" class="form-control" {...formik.getFieldProps('role')}>
                                                    <option value=''>Select</option>
                                                                                                            <option value="admin">Admin</option>
                                                                                                            <option value="accountant">Accountant</option>
                                                                                                            <option value="doctor">Doctor</option>
                                                                                                            <option value="pharmacist">Pharmacist</option>
                                                                                                            <option value="labtechnician">Pathologist</option>
                                                                                                            <option value="receptionist">Receptionist</option>
                                                                                                    </select>
                                                <span class="text-danger">{formik.touched.role?formik.errors.role:''}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Designation</label>

                                                <select id="designation" name="designation" {...formik.getFieldProps('designation')} placeholder="" type="text" class="form-control">
                                                    <option value="">Select</option>
                                                    <option value="admin">Admin</option>
                                                                                                            <option value="accountant">Accountant</option>
                                                                                                            <option value="doctor">Doctor</option>
                                                                                                            <option value="pharmacist">Pharmacist</option>
                                                                                                            <option value="labtechnician">Pathologist</option>
                                                                                                            <option value="receptionist">Receptionist</option>
                                                                                                    </select>
                                                <span class="text-danger">{formik.touched.designation?formik.errors.designation:''}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Department</label>
                                                <select id="department" name="department" {...formik.getFieldProps('department')} placeholder="" type="text" class="form-control">
                                                    <option value="select">Select</option>
                                                                                                            <option value="docter">Doctor</option>
                                                                                                            <option value="admin">Admin</option>
                                                                                                            <option value="opd">OPD</option>
                                                                                                            <option value="ipd">IPD</option>
                                                                                                            {/* <option value="6">Emergency</option>
                                                                                                            <option value="7">Finance</option>
                                                                                                            <option value="8">ICU</option>
                                                                                                            <option value="9">NICU</option>
                                                                                                            <option value="10">BURN CARE</option>
                                                                                                            <option value="11">Pathology</option> */}
                                                                                                            <option value="pharmacy">Pharmacy</option>
                                                                                                            {/* <option value="13">Radiology</option> */}
                                                                                                            <option value="ot">OT</option>
                                                                                                            {/* <option value="15">Cardiology</option>
                                                                                                            <option value="16">Gynecology</option>
                                                                                                            <option value="17">Human resource</option>
                                                                                                            <option value="18">Blood Bank</option> */}
                                                                                                            <option value="reception">Reception</option>
                                                                                                    </select> 
                                                <span class="text-danger">{formik.touched.department?formik.errors.department:''}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">

                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">First Name</label><small class="req"> *</small>
                                                <input id="name" name="name" placeholder=""  {...formik.getFieldProps('firstName')}type="text" class="form-control" />
                                                <span class="text-danger">{formik.touched.firstName?formik.errors.firstName:''}</span>
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Last Name</label>
                                                <input id="surname" name="surname" placeholder="" {...formik.getFieldProps('lastName')} type="text" class="form-control" />
                                                <span class="text-danger">{formik.touched.lastName?formik.errors.lastName:''}</span>
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Father Name</label>
                                                <input id="father_name" name="father_name" placeholder=""  {...formik.getFieldProps('fatherName')} type="text" class="form-control" />
                                                <span class="text-danger">{formik.touched.fatherName?formik.errors.fatherName:''}</span>
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Mother Name</label>
                                                <input id="mother_name" name="mother_name" placeholder="" {...formik.getFieldProps('motherName')} type="text" class="form-control" />
                                                <span class="text-danger">{formik.touched.motherName?formik.errors.motherName:''}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputFile"> Gender</label><small class="req"> *</small>
                                                <select class="form-control"  {...formik.getFieldProps('gender')} name="gender">
                                                    <option>Select</option>
                                                                                                            <option value="Male">Male</option>
                                                                                                                <option value="Female">Female</option>
                                                                                                        </select>
                                                <span class="text-danger">{formik.touched.gender?formik.errors.gender:''}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Marital Status</label>
                                                <select class="form-control" name="marital_status" {...formik.getFieldProps('maritalStatus')}>
                                                    <option >Select</option>
                                                                                                            <option value="Single">Single</option>

                                                                                                            <option value="Married">Married</option>

                                                                                                            <option value="Widowed">Widowed</option>

                                                                                                            <option value="Separated">Separated</option>

                                                                                                            <option value="Not Specified">Not Specified</option>

                                                      

                                                </select>
                                                <span class="text-danger">{formik.touched.maritalStatus?formik.errors.maritalStatus:''}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Blood Group</label>
                                                <select class="form-control" name="blood_group" {...formik.getFieldProps('bloodGroup')}>
                                                    <option >Select</option>
                                                                                                            <option value="O+">O+</option>           

                                                                                                            <option value="A+">A+</option>           

                                                                                                            <option value="B+">B+</option>           

                                                                                                            <option value="AB+">AB+</option>           

                                                                                                            <option value="O-">O-</option>           

                                                                                                            <option value="A-">A-</option>           

                                                                                                            <option value="B-">B-</option>           

                                                                                                            <option value="AB-">AB-</option>           

                                                    
                                                </select>
                                                <span class="text-danger">{formik.touched.bloodGroup?formik.errors.bloodGroup:''}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Date Of Birth</label><small class="req"> *</small>
                                                <ReactDatePicker selected={formik.values.dateOfBirth} className="form-control" showYearDropdown scrollableYearDropdown onChange={(e)=>formik.setFieldValue('dateOfBirth',e)}/>
                                                <span class="text-danger">{formik.touched.dateOfBirth?formik.errors.dateOfBirth:''}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Date Of Joining</label>
                                                <ReactDatePicker selected={formik.values.dateOfJoining} className="form-control" showYearDropdown scrollableYearDropdown onChange={(e)=>formik.setFieldValue('dateOfJoining',e)}/>
                                                <span class="text-danger">{formik.touched.dateOfJoining?formik.errors.dateOfJoining:''}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Phone</label>
                                                <input id="mobileno" name="contactno" placeholder="" {...formik.getFieldProps('phone')} type="text" class="form-control" />
                                                <span class="text-danger">{formik.touched.phone?formik.errors.phone:''}</span>
                                            </div>
                                        </div> 

                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Email</label><small class="req"> *</small>
                                                <input id="email" name="email" placeholder="" type="text" {...formik.getFieldProps('email')} class="form-control" />
                                                <span class="text-danger">{formik.touched.email?formik.errors.email:''}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputEmail1">Photo</label>
                                                <input  type='file' onChange={(e)=>formik.setFieldValue('photo',e.target.files[0])} placeholder="" class="form-control"  />
                                            </div>
                                      </div>
                                      </div>
                                    <div class="row">
                                    <div class="col-md-3">

<div class="form-group">
    <label classname='text-xs' for="exampleInputEmail1">Qualification</label>
    <textarea id="qualification" name="qualification" {...formik.getFieldProps('qualification')} placeholder="" class="form-control"></textarea>
    <span class="text-danger">{formik.touched.qualification?formik.errors.qualification:''}</span>
</div>
</div>
<div class="col-md-3">

<div class="form-group">
    <label classname='text-xs' for="exampleInputEmail1">Work Experience</label>
    <textarea id="work_exp" name="work_exp" placeholder="" {...formik.getFieldProps('workExperiance')} class="form-control"></textarea>
    <span class="text-danger">{formik.touched.workExperiance?formik.errors.workExperiance:''}</span>
</div>
</div>
<div class="col-md-3">
<div class="form-group">
    <label classname='text-xs' for="exampleInputFile">Specialization</label>
    <div><textarea name="specialization" class="form-control" {...formik.getFieldProps('specialization')}></textarea>
    </div>
    <span class="text-danger">{formik.touched.specialization?formik.errors.specialization:''}</span></div>
</div>
<div class="col-md-3">
<div class="form-group">
    <label classname='text-xs' for="exampleInputFile">Note</label>
    <div><textarea name="note" class="form-control" {...formik.getFieldProps('note')}></textarea>
    </div>
    <span class="text-danger">{formik.touched.note?formik.errors.note:''}</span></div>
</div>                          


                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputFile">Current Address</label>
                                                <div><textarea name="address" class="form-control" {...formik.getFieldProps('currentAddress')}></textarea>
                                                </div>
                                                <span class="text-danger">{formik.touched.currentAddress?formik.errors.currentAddress:''}</span></div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label classname='text-xs' for="exampleInputFile">Permanent Address</label>
                                                <div><textarea name="permanent_address" class="form-control" {...formik.getFieldProps('permnentAddress')}></textarea>
                                                </div>
                                                <span class="text-danger">{formik.touched.permnentAddress?formik.errors.permnentAddress:''}</span></div>
                                        </div>                          
                                        



                                    </div>

                              
                            


                                        </div>   
                                        
                                        <div class="tshadow-new">    
                                            <h4 class="pagetitleh2 p-2 border bg-light text-md">Bank Account Details</h4>

                                            <div class="row around10 card-body">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label classname='text-xs' for="exampleInputEmail1">Account Title</label>
                                                        <input id="account_title" name="account_title" placeholder="" type="text" {...formik.getFieldProps('accountTitle')}class="form-control" />
                                                        <span class="text-danger">{formik.touched.accountTitle?formik.errors.accountTitle:''}</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label classname='text-xs' for="exampleInputEmail1">Bank Account Number</label>
                                                        <input id="bank_account_no" name="bank_account_no" placeholder="" type="text"{...formik.getFieldProps('accountNumber')} class="form-control" />
                                                        <span class="text-danger">{formik.touched.accountNumber?formik.errors.accountNumber:''}</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label classname='text-xs' for="exampleInputEmail1">Bank Name</label>
                                                        <input id="bank_name" name="bank_name" placeholder="" type="text" class="form-control" {...formik.getFieldProps('bankName')} />
                                                        <span class="text-danger">{formik.touched.bankName?formik.errors.bankName:''}</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label classname='text-xs' for="exampleInputEmail1">IFSC Code</label>
                                                        <input id="ifsc_code" name="ifsc_code" placeholder="" type="text" class="form-control" {...formik.getFieldProps('ifscCode')}/>
                                                                                                        <span class="text-danger">{formik.touched.ifscCode?formik.errors.ifscCode:''}</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label classname='text-xs' for="exampleInputEmail1">Bank Branch Name</label>
                                                        <input id="bank_branch" name="bank_branch" placeholder="" type="text" class="form-control" {...formik.getFieldProps('bankBranchName')} />
                                                        <span class="text-danger">{formik.touched.bankBranchName?formik.errors.bankBranchName:''}</span>
                                                    </div>
                                                </div>
                                            </div>


                                        {/* close */}
                                       </div>
                                       <button onClick={formik.handleSubmit} className='btn btn-sm btn-primary'>Save</button>
                                        </div>
    );
}