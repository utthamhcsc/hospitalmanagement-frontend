import React from 'react'
import { useParams } from 'react-router-dom'
import { Getdata } from '../../../Network/Server'

export default function Profile() {
    const {userId}=useParams()
    const [data,setData]=React.useState()
    React.useEffect(()=>{
        Getdata('staff/'+userId).then(data=>setData(data));
    },[])

    return (
        <>
        <div class="card " >
  
        
  <div class="card-body p-0">
  <nav class="nav border">
  <a class="nav-link active border-bottom bg-primary" href="#">Profile</a>
  <a class="nav-link" href="#">Payroll</a>
  <a class="nav-link" href="#">Leaves</a>
  <a class="nav-link " href="#">Attendence</a>
</nav>
<div className=''>
    
      <div>                                               
<ul class="list-group p-5">
<li class="list-group-item border text-center bg-light">
                               <b> Personal Details</b>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Phone</b> <a class="pull-right text-aqua">{data && data.phone}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Emergency Contact Number</b> <a class="pull-right text-aqua">{data && data.phone}</a>
                            </li>

                            <li class="list-group-item py-2 text-sm ">
    <b>Email</b> <a class="pull-right text-aqua">{data && data.email}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Gender</b> <a class="pull-right text-aqua">{data && data.gender}</a>
                            </li>

                            <li class="list-group-item py-2 text-sm ">
    <b>Blood Group</b> <a class="pull-right text-aqua">{data && data.bloodGroup}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
    <b>Date of Birth</b> <a class="pull-right text-aqua">{new Date(data && data.dateOfBirth).toLocaleDateString()}</a>
                            </li>

                            <li class="list-group-item py-2 text-sm ">
    <b>Marital Status</b> <a class="pull-right text-aqua">{data && data.maritalStatus}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Father Name</b> <a class="pull-right text-aqua">{data && data.fatherName}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Mother Name</b> <a class="pull-right text-aqua">{data && data.motherName}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Qualification</b> <a class="pull-right text-aqua">{data && data.qualification}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
    <b>Work Experience</b> <a class="pull-right text-aqua">{data && data.workExperiance}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Specialization</b> <a class="pull-right text-aqua">{data && data.specialization}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
    <b>Note</b> <a class="pull-right text-aqua">{data && data.note}</a>
                            </li>
                         </ul>
                        {/* Address */}
                    </div>                                                                                                  
                    <ul class="list-group p-5">
                    <li class="list-group-item border text-center bg-light">
                               <b>Address</b>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Current Address</b> <a class="pull-right text-aqua">{data && data.currentAddress}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Permanent Address</b> <a class="pull-right text-aqua">{data && data.permnentAddress}</a>
                            </li>

                                                    </ul>
   {/* Bank Account Details */}
                                                    
<ul class="list-group  p-5">
<li class="list-group-item border text-center bg-light">
                               <b> Bank Account Details</b>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Account Title</b> <a class="pull-right text-aqua">{data && data.accountTitle}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Bank Name</b> <a class="pull-right text-aqua">{data && data.bankName}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Bank Branch Name</b> <a class="pull-right text-aqua">{data && data.bankBranchName}</a>
                            </li>

                            <li class="list-group-item py-2 text-sm ">
                                <b>Bank Account Number</b> <a class="pull-right text-aqua">{data && data.accountNumber}</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>IFSC Code</b> <a class="pull-right text-aqua">{data && data.ifscCode}</a>
                            </li>
                           
                                                    </ul>
                                                    <ul class="list-group  p-5">
<li class="list-group-item border text-center bg-light">
                               <b> Social Media Link</b>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Facebook URL</b> <a class="pull-right text-aqua" href="http://facebook.com/Anshul">http://facebook.com/Anshul</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>Twitter URL</b> <a class="pull-right text-aqua" href="http://facebook.com/Anshul">http://twitter.com/Anshul</a>
                            </li>
                            <li class="list-group-item py-2 text-sm ">
                                <b>LinkedIn URL</b> <a class="pull-right text-aqua" href="http://facebook.com/Anshul">http://linkedin.com/Anshul</a>
                            </li>

                            <li class="list-group-item py-2 text-sm ">
                                <b>Instagram URL</b> <a class="pull-right text-aqua" href="http://facebook.com/Anshul">http://instagram.com/Anshul</a>
                            </li>
                            </ul>

   
   
    </div>
    </div>
 </div>
        </>
    )
}
