import React from 'react'
import {useFormik} from 'formik'
import {toast} from 'react-toastify'
import * as Yup from 'yup'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {PostFormdata} from '../Network/Server'
export default ()=>{
    const formik=useFormik({
        initialValues:{
            patientName:'',
            gender:'',
            dateOfBirth:'',
            age:'',
            bloodGroup:'',
            maritalStatus:'',
            phone:'',
            email:'',
            patientPhoto:'',
            address:'',
            remarks:'',
            knownAllergies:'',
            guardianName:'',
            year:'',
            month:''

        },
        onSubmit:(values)=>{
            PostFormdata('patientregistration','POST',values).then((data)=>{
               toast.success('successfully registerd', { position: toast.POSITION.TOP_CENTER}) 
            formik.resetForm();

            }).catch((err)=>toast.error('try again',{ position: toast.POSITION.TOP_CENTER}));
                   },
                   validationSchema:()=>
                    Yup.object().shape({
                     patientName:Yup.string().required(),
                     gender:Yup.string().required(),
                     dateOfBirth:Yup.date().required(),
                     age:Yup.string().notRequired(),
                     bloodGroup:Yup.string().required(),
                     maritalStatus:Yup.string().required(),
                     phone:Yup.number().required(),
                     email:Yup.string().email().required(),
                   //  photo:Yup.object().required(),
                     address:Yup.string().required(),
                     remarks:Yup.string().required(),
                     knownAllergies:Yup.string().required(),
                     guardianName:Yup.string().required()
                    
                    })
                

                    })
    const calculate=(d)=>{
               formik.setFieldValue('dateOfBirth',d);
               var today = new Date();
    var birthDate = new Date(d);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
      
    }
    if(m<0){m=m+12}
    formik.setFieldValue('year',age);
    formik.setFieldValue('month',m);
    formik.setFieldValue('age',age +' years'+m+' months');
 }
    return(
        <div class="modal fade" id="addnewpatient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content modal-media-content">
            <div class="modal-header modal-media-header bg-primary p-2">
            <h4 class="box-title">  Patient Details</h4> 
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              
            </div>

            <form id="formaddpa" onSubmit={formik.handleSubmit}>    
                <div class="modal-body pt0 pb0">
                    <div class="ptt10">

                        <div class="row row-eq">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Name</label><small class="req"> *</small> 
                                            <input id="name" type="text" class="form-control" onChange={(e)=>formik.setFieldValue('patientName',e.target.value)}/>  
    <span class="text-danger">{formik.touched.patientName?formik.errors.patientName:''}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Guardian Name</label>
                                            <input type="text" name="guardian_name" placeholder=""  class="form-control" onChange={(e)=>formik.setFieldValue('guardianName',e.target.value)}/>
                                            <span class="text-danger">{formik.touched.guardianName?formik.errors.guardianName:''}</span>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-sm-12">  
                                        <div class="row">  
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label> Gender</label>
                                                    <select class="form-control" name="gender" id="addformgender" onChange={(e)=>formik.setFieldValue('gender',e.target.value)}>
                                                        <option value="">Select</option>
                                                                                                                    <option value="Male">Male</option>
                                                                                                                        <option value="Female">Female</option>
                                                                                                                </select>
                                                </div>
                                                <span class="text-danger">{formik.touched.gender?formik.errors.gender:''}</span>
                                            </div>

                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="dob">Date Of Birth</label> 
                                                    <DatePicker selected={formik.values.dateOfBirth}  onChange={(d)=>{calculate(d)}}/>                                                </div>
                                                    <span class="text-danger">{formik.touched.dateOfBirth?formik.errors.dateOfBirth:''}</span>
                                            </div>

                                            <div class="col-sm-5" id="calculate">
                                                <div class="form-group">
                                                    <label>Age</label>
                                                    <div style={{clear: 'both',overflow: 'hidden'}}>
                                                        <input type="text" placeholder="Year" name="age" id="age_year" value={formik.values.year} onChange={(e)=>formik.setFieldValue('year',e.target.value)} class="form-control" style={{width:'43%',float: "left"}} autocomplete="off"/>
                                                        <input type="text" id="age_month" placeholder="Month" name="month" value={formik.values.month} onChange={(e)=>formik.setFieldValue('month',e.target.value)} class="form-control" style={{width: '53%',float: 'left',marginLeft: "4px"}} autocomplete="off"/>
                                                    </div>
                                                    <span class="text-danger">{formik.touched.age?formik.errors.age:''}</span>
                                                </div>
                                            </div> 
                                        </div>  
                                    </div>
                                    <div class="col-md-6 col-sm-12"> 
                                        <div class="row"> 
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label>Blood Group</label>
                                                    <select name="blood_group" class="form-control" onChange={(e)=>formik.setFieldValue('bloodGroup',e.target.value)}>
                                                        <option value="">Select</option>
                                                                                                                    <option value="O+">O+</option>
                                                                                                                        <option value="A+">A+</option>
                                                                                                                        <option value="B+">B+</option>
                                                                                                                        <option value="AB+">AB+</option>
                                                                                                                        <option value="O-">O-</option>
                                                                                                                        <option value="A-">A-</option>
                                                                                                                        <option value="B-">B-</option>
                                                                                                                        <option value="AB-">AB-</option>
                                                                                                                </select>   
                                                </div>
                                                <span class="text-danger">{formik.touched.bloodGroup?formik.errors.bloodGroup:''}</span>
                                            </div>

                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label for="pwd">Marital Status</label>
                                                    <select name="marital_status" class="form-control" onChange={(e)=>formik.setFieldValue('maritalStatus',e.target.value)}>
                                                        <option value="">Select</option>
                                                                                                                    <option value="Single">Single</option>
                                                                                                                    <option value="Married">Married</option>
                                                                                                                    <option value="Widowed">Widowed</option>
                                                                                                                    <option value="Separated">Separated</option>
                                                                                                                    <option value="Not Specified">Not Specified</option>
                                                                                                            </select>
                                                </div>
                                                <span class="text-danger">{formik.touched.maritalStatus?formik.errors.maritalStatus:''}</span>
                                            </div>   

                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleInputFile">
                                                        Patient Photo                                                    </label>
                                                        <input type='file' class='form-control' onChange={(e)=>formik.setFieldValue('patientPhoto',e.target.files[0])}/>
                                                                                               </div> 
                                                                                               <span class="text-danger">{formik.errors.photo}</span>
                                        </div> 
                                    </div> 

</div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <label for="pwd">Phone</label>
                                            <input id="number" autocomplete="off" name="mobileno" type="text" onChange={(e)=>formik.setFieldValue('phone',e.target.value)} placeholder="" class="form-control" />
                                        </div>
                                        <span class="text-danger">{formik.touched.phone?formik.errors.phone:''}</span>
                                    </div> 

                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="text"  onChange={(e)=>formik.setFieldValue('email',e.target.value)} name="email" class="form-control" autocomplete="off"/>
                                        </div>
                                        <span class="text-danger">{formik.touched.email?formik.errors.email:''}</span>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="address">Address</label> 
                                            <input name="address" placeholder="" class="form-control" onChange={(e)=>formik.setFieldValue('address',e.target.value)}/>                                        </div> 
                                            <span class="text-danger">{formik.touched.address?formik.errors.address:''}</span>
                                    </div>


                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="pwd">Remarks</label> 
                                            <textarea name="note" id="note" class="form-control" autocomplete="off" onChange={(e)=>formik.setFieldValue('remarks',e.target.value)}></textarea>
                                        </div>
                                        <span class="text-danger">{formik.touched.remarks?formik.errors.remarks:''}</span>
                                    </div>   
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="email">Any Known Allergies</label> 
                                            <textarea name="known_allergies" id="" placeholder="" class="form-control" onChange={(e)=>formik.setFieldValue('knownAllergies',e.target.value)}></textarea>
                                        </div> 
                                        <span class="text-danger">{formik.touched.knownAllergies?formik.errors.knownAllergies:''}</span>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="box-footer">
                    <div class="pull-right">
                        <button type="submit" id="formaddpabtn" data-loading-text="Processing..." class="btn btn-success form-control">Save</button>
                    </div>
                </div>

            
            </form>
        </div>
    </div>    
</div>






    )
}