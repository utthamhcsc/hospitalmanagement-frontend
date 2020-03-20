import React from 'react'
import { useParams } from 'react-router-dom';
import {Getdata} from '../../../Network/Server'

export default function Profile() {
    const {userId}=useParams();
    const [data,setData]=React.useState()
    React.useEffect(()=>{

        Getdata('staff/'+userId).then(data=>setData(data));
    },[])


    return (
        <>
        <div class="card" >
  
        <div class="card-header row p-0 m-0 border-0">
   <div className='col-sm-2 pt-5 text-center'>
   <img src={'dist/img/user2-160x160.jpg'} height="100" width="100" className="img-thumbnail rounded-circle" alt="User Image" alt='no img'/>
   <div>{data && data.firstName+' '+data.lastName}</div>
   {/* <button className='btn btn-sm btn-light'>change password</button>
        */}
        </div>
    <div className='col-sm-10 p-5 '>
        <div className="row">
            <div className='col-md-6'>
            <ul class="list-group border-0 ">
            <li class="list-group-item py-1 border-0 d-flex text-sm px-5">
    <span className='w-50'> Staff ID</span> <a class="pull-right text-aqua">{data && data.staffId}</a>
                            </li>
                           
    <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Role</span><a class="pull-right text-aqua">{data && data.role}</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Designation</span><a class="pull-right text-aqua">{data && data.designation}</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Department</span><a class="pull-right text-aqua">{data && data.department}</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>EPF No </span><a class="pull-right text-aqua">0834567886543</a></li>
</ul>
            </div>
            <div className='col-md-6'> <ul class="list-group border-0 ">
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Basic Salary</span> <a class="pull-right text-aqua">750000</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Contract Type</span> <a class="pull-right text-aqua">permanent</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Work Shift</span> <a class="pull-right text-aqua">Day</a></li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Location </span> <a class="pull-right text-aqua">Ramanagaram</a>    </li>
  <li class="list-group-item py-1 border-0 d-flex text-sm px-5"><span className='w-50'>Date Of Joining</span> <a class="pull-right text-aqua">{data && data.dateOfJoining && new Date(data.dateOfJoining).toLocaleDateString()}</a></li>
</ul></div>
        </div>

    </div>
  </div>
  <div class="card-body p-0">
  <nav class="nav border">
  <a class="nav-link active border-bottom bg-primary" href="#">Profile</a>
  <a class="nav-link" href="#">Payroll</a>
  <a class="nav-link" href="#">Leaves</a>
  <a class="nav-link " href="#">Attendence</a>
</nav>
<div className='row'>
    {/* personal details */}
                                                     
<ul class="list-group  col-md-4 p-5">
<li class="list-group-item border text-center bg-light">
                               <b> Personal Details</b>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Staff ID</b> <a class="pull-right text-aqua">{data && data.staffId}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Role</b> <a class="pull-right text-aqua">{data && data.role}</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Designation</b> <a class="pull-right text-aqua">{data && data.designation}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Department</b> <a class="pull-right text-aqua">{data && data.department}</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
                                <b>EPF No</b> <a class="pull-right text-aqua">8934783274</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Basic Salary</b> <a class="pull-right text-aqua">41000</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Contract Type</b> <a class="pull-right text-aqua">Permanent</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Work Shift</b> <a class="pull-right text-aqua">Day Time</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Location</b> <a class="pull-right text-aqua">Ground Floor</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
    <b>Date Of Joining</b> <a class="pull-right text-aqua">{data && data.dateOfJoining  && new Date(data.dateOfJoining).toLocaleDateString()}</a>
                            </li>
                                                    </ul>
                                                    {/* Address */}
                                                                                                     
<ul class="list-group  col-md-4 p-5">
<li class="list-group-item border text-center bg-light">
                               <b>Address</b>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Current Address</b> <a class="pull-right text-aqua">{data && data.currentAddress}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
    <b>Permanent Address</b> <a class="pull-right text-aqua">{data && data.permnentAddress}</a>
                            </li>

                                                    </ul>
   {/* Bank Account Details */}
                                                    
<ul class="list-group  col-md-4 p-5">
<li class="list-group-item border text-center bg-light">
                               <b> Bank Account Details</b>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Bank Name</b> <a class="pull-right text-aqua">{data && data.bankName}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Branch Name</b> <a class="pull-right text-aqua">{data && data.bankBranchName}</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Account Name</b> <a class="pull-right text-aqua">{data && data.accountTitle}</a>
                            </li>
                            <li class="list-group-item py-1 text-sm px-3">
                                <b>Account Number</b> <a class="pull-right text-aqua">{data && data.accountNumber}</a>
                            </li>

                            <li class="list-group-item py-1 text-sm px-3">
                                <b>IFSC Code</b> <a class="pull-right text-aqua">{data && data.ifscCode}</a>
                            </li>
                           
                                                    </ul>
   
   
    </div>
    </div>
 </div>
        </>
    )
}
