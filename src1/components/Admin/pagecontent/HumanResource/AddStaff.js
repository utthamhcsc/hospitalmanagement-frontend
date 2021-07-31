import React, { useEffect } from 'react'
import AddStaff from '../../../../Forms/HumanResource/AddStaff'
import AddBasicInfo from '../../../../Forms/HumanResource/AddBasicInfo'

import {useFormik} from 'formik';
import * as Yup from 'yup'

import {toast} from 'react-toastify'
import { Postdata, PostFormdata, Getdata } from '../../../../Network/Server';
import BankInfo from '../../../../Forms/HumanResource/BankInfo';
import SocialMediaLinks from '../../../../Forms/HumanResource/SocialMediaLinks';
import UploadDocuments from '../../../../Forms/HumanResource/UploadDocuments';
import PayRoll from '../../../../Forms/HumanResource/PayRoll';
import { useParams } from 'react-router-dom';

export default ()=> {
    const {staffId}=useParams();
    const [data,setdata]=React.useState({})
    const [department,setDepartment]=React.useState([])
    const [designation,setDesignation]=React.useState([])
    const formik=useFormik({
        initialValues:{
           ...data
        },
        enableReinitialize:true,
        onSubmit:values=>{console.log(JSON.stringify(values,null,2))
        
            PostFormdata('humanResource/add','POST',values).then(data=>{
                console.log(data)
                if(data.err){
                    toast.error(data.err, {
                        autoClose:false,
                        position: toast.POSITION.TOP_CENTER
                        
                      }) 
                }
                else{
                    formik.resetForm();
                    toast.success('successfully added', {
                        position: toast.POSITION.TOP_CENTER
                      })
                }
           })
    },
                })

useEffect(()=>{
Getdata('humanResource/get/'+staffId).then(data=>{setdata({...data,photoFile:'',
resumeFile:'',
joiningletterFile:'',
otherDocumentFile:''})
console.log(data)
})
Getdata('designation/get').then(data=>setDesignation(data))
Getdata('department/get').then(data=>setDepartment(data))
},[])



    return (
        <>
        <div className='accordian' id='accordian'>
        <h4  class="p-2 border bg-light text-md" data-target='#basicInfo' data-toggle='collapse'>Basic Information </h4>

           <AddBasicInfo formik={formik} department={department} designation={designation}/> 
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

        <button type="button" onClick={formik.handleSubmit} className='btn btn-sm bg-primary form-control'>Submit</button>
        </div>    
        </>
    )
}
