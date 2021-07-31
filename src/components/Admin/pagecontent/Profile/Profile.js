import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {Postdata, PostFormdata, Getdata} from '../../../../Network/Server'
import { toast } from 'react-toastify'
export default function Profile() {
    const [data,setdata]=React.useState({});
    const [mydata,setmydata]=React.useState({});
    const [show,setShow]=React.useState(false)
    const formik=useFormik({
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

    useEffect(()=>{
        Getdata('humanResource/get/profile/'+window.localStorage.getItem('userId')).then(data=>{setdata(data.staff)
        setmydata(data)
            console.log(data)
        })
    
    },[])
        
    return (
        <>
        <div class="card" >
  
        <div class="card-header row p-0 m-0 border-0">
   <div className='col-sm-2 pt-5 text-center'>
   <img src={'dist/img/user2-160x160.jpg'} height="100" width="100" className="img-thumbnail rounded-circle" alt="User Image" alt='no img'/>
   <div>{`${data.firstName+' '+data.lastName}`}</div>
  {
(show)?<>
    <input className='form-control mt-1' 
    {...formik.getFieldProps('currentPassword')}
    placeholder='current password'/>
   <input className='form-control my-1' 
       {...formik.getFieldProps('newPassword')}
   placeholder='new password'/>
   <button className='btn btn-sm btn-primary' onClick={()=>{
     formik.handleSubmit()
       setShow(!show)
   }}>change</button>
 
   </>
: <button className='btn btn-sm btn-primary' onClick={()=>{
    setShow(!show)
}}>change password</button>
  } 
   
    </div>   
    <div className='col-sm-10 p-5 '>
        <div className="row">
            <div className='col-md-6'>
            <ul class="list-group border-0 ">
            <li class="list-group-item py-1 border-0 d-flex text-sm px-5">
            <span className='w-50'> Staff ID</span> <a class="pull-right text-aqua">{data.staffId}</a>
                            </li>
                           
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Role</span><a class="pull-right text-aqua">{data.role}</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Designation</span><a class="pull-right text-aqua">{mydata.designation}</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Department</span><a class="pull-right text-aqua">{mydata.department}</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>EPF No </span><a class="pull-right text-aqua">{data.epfNum}</a></li>
</ul>
            </div>
            <div className='col-md-6'> <ul class="list-group border-0 ">
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Basic Salary</span> <a class="pull-right text-aqua">{data.basicSalary}</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Contract Type</span> <a class="pull-right text-aqua">{data.contractType}</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Work Shift</span> <a class="pull-right text-aqua">{data.workShift}</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Location </span> <a class="pull-right text-aqua">{data.location}</a>    </li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Date Of Joining</span> <a class="pull-right text-aqua">{data.dateOfJoining}</a></li>
</ul></div>
        </div>

    </div>
  </div>
  <div class="card-body p-0">
  <nav class="nav border">
  {/* <a class="nav-link active border-bottom bg-primary" href="#">Profile</a>
  <a class="nav-link" href="#">Payroll</a>
  <a class="nav-link" href="#">Leaves</a>
  <a class="nav-link " href="#">Attendence</a> */}
</nav>
<div className='row'>
    {/* personal details */}
                                                     
<ul class="list-group  col-md-4 p-5">
<li class="list-group-item border text-center bg-light">
                               <b> Personal Details</b>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Staff ID</b> <a class="pull-right text-aqua">{data.staffId}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Role</b> <a class="pull-right text-aqua">{data.role}</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Designation</b> <a class="pull-right text-aqua">{mydata.designation}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Department</b> <a class="pull-right text-aqua">{mydata.department}</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
                                <b>EPF No</b> <a class="pull-right text-aqua">{data.epfNum}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Basic Salary</b> <a class="pull-right text-aqua">{data.basicSalary}</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Contract Type</b> <a class="pull-right text-aqua">{data.contractType}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Work Shift</b> <a class="pull-right text-aqua">{data.workShift}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Location</b> <a class="pull-right text-aqua">{data.location}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Date Of Joining</b> <a class="pull-right text-aqua">{data.dateOfJoining}</a>
                            </li>
                                                    </ul>
                                                    {/* Address */}
                                                                                                     
<ul class="list-group  col-md-4 p-5">
<li class="list-group-item border text-center bg-light">
                               <b>Address</b>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
<b>Current Address</b> <a class="pull-right text-aqua">{data.currentAddress}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Permanent Address</b> <a class="pull-right text-aqua">{data.permanentAddress}</a>
                            </li>

                                                    </ul>
   {/* Bank Account Details */}
                                                    
<ul class="list-group  col-md-4 p-5">
<li class="list-group-item border text-center bg-light">
                               <b> Bank Account Details</b>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Bank Name</b> <a class="pull-right text-aqua">{data.bankName}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Branch Name</b> <a class="pull-right text-aqua">{data.bankBranchName}</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Account Name</b> <a class="pull-right text-aqua">{data.accountTitle}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Account Number</b> <a class="pull-right text-aqua">{data.bankAccountNumber}</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
<b>IFSC Code</b> <a class="pull-right text-aqua">{data.ifscCode}</a>
                            </li>
                           
                                                    </ul>
   
   
    </div>
    </div>
 </div>
        </>
    )
}
