import React from 'react'
import AddStaff from '../../../../Forms/HumanResource/AddStaff'
import AddBasicInfo from '../../../../Forms/HumanResource/AddBasicInfo'

import {useFormik} from 'formik';
import * as Yup from 'yup'

import {toast} from 'react-toastify'
import { Postdata, PostFormdata } from '../../../../Network/Server';
import BankInfo from '../../../../Forms/HumanResource/BankInfo';
import SocialMediaLinks from '../../../../Forms/HumanResource/SocialMediaLinks';
import UploadDocuments from '../../../../Forms/HumanResource/UploadDocuments';
import PayRoll from '../../../../Forms/HumanResource/PayRoll';

export default ()=> {
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
    return (
        <>
        <div className='accordian' id='accordian'>
        <h4  class="p-2 border bg-light text-md" data-target='#basicInfo' data-toggle='collapse'>Basic Information </h4>

           <AddBasicInfo formik={formik}/> 
           <h4  class="p-2 border bg-light text-md" 
           data-target='#payroll' data-toggle='collapse'>PayRoll</h4>

           <PayRoll formik={formik}/> 
           <h4  class="p-2 border bg-light text-md"
            data-target='#bankinfo' data-toggle='collapse'>Bank Information </h4>

           <BankInfo formik={formik}/> 
           <h4  class="p-2 border bg-light text-md"
            data-target='#socialmedia' data-toggle='collapse'>Socail Media Links </h4>

           <SocialMediaLinks formik={formik}/> 
           <h4  class="p-2 border bg-light text-md"
            data-target='#uploadDocuments' data-toggle='collapse'>Upload Documents </h4>

           <UploadDocuments formik={formik}/> 

        <button type="button" className='btn btn-sm bg-primary form-control'>Submit</button>
        </div>    
        </>
    )
}
