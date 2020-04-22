import React from 'react'

import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';
export default function AddBasicInfo(props) {
    const {formik}=props
    return (
        <>
       
<div class="card-body collapse show fade" id='basicInfo'>
      
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

                <select id="designation" name="designation" {...formik.getFieldProps('designationId')} placeholder="" type="text" class="form-control">
                    <option value="">Select</option>
                    {
                        (props.designation||[]).map((item)=><option key={item.id} value={item.id}>{item.name}</option>

                        )
                    }
                                                                    </select>
                <span class="text-danger">{formik.touched.designation?formik.errors.designation:''}</span>
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label classname='text-xs' for="exampleInputEmail1">Department</label>
                <select id="department" name="department" {...formik.getFieldProps('departmentId')} placeholder="" type="text" class="form-control">
                    <option value="">Select</option>
                    {
                        (props.department||[]).map((item)=><option key={item.id} value={item.id}>{item.name}</option>

                        )
                    }    </select> 
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
                <ReactDatePicker
                minDate={new Date()}
                selected={new Date(''+formik.values.dateOfBirth)=='Invalid Date'?'':new Date(formik.values.dateOfBirth)} className="form-control" showYearDropdown onChange={(e)=>formik.setFieldValue('dateOfBirth',e)}/>
                <span class="text-danger">{formik.touched.dateOfBirth?formik.errors.dateOfBirth:''}</span>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col-md-3">
            <div class="form-group">
                <label classname='text-xs' for="exampleInputEmail1">Date Of Joining</label>
                <ReactDatePicker 
                minDate={new Date()}
                selected={new Date(''+formik.values.dateOfJoining)=='Invalid Date'?'':new Date(formik.values.dateOfJoining)} className="form-control"  showYearDropdown onChange={(e)=>formik.setFieldValue('dateOfJoining',e)}/>
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
                <input  type='file' onChange={(e)=>formik.setFieldValue('photoFile',e.target.files[0])} placeholder="" class="form-control"  />
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

        </>
    )
}
