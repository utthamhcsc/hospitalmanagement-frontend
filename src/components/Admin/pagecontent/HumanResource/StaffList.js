import React, { useEffect, useState, useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Getdata } from "../../../../Network/Server";
import swal from "sweetalert";

export default () => {
  const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
      
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Getdata(url+'/'+val).then(item2=>setdata(data=>data.filter(item1=>item1.staffId!=val)))
        
      } 
    });
   }
  const [data,setdata]=useState([])
 // const [role,setrole]=useState('');
  const [mydata,setmydata]=useState([])
  const history=useHistory();
  const myrole=useRef('');
  const myvalue=useRef('');
const fetchByrole=(role)=>{
  //setrole(role)
  if(role!='')
setdata(mydata.filter(item=>item.role==role));
else
setdata(mydata)
}
const fetchByKeyword=(value)=>{
  let role=myrole.current.value;
if(value!=''){
if(role!=''){
  setdata(mydata.filter(item=>item.role==role && item.name==value || item.department==value ||item.designation==value));
}
else{
  setdata(mydata.filter(item=>item.name==value || item.department==value ||item.designation==value));
}



}
else
setdata(mydata)
}

  useEffect(()=>{
    Getdata('humanResource/get').then((data)=>{console.log(data);setdata(data);setmydata(data)})
  },[])
  return (
    <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Staff List</h5>
<div className='btn-group '>
          <NavLink type="button" to='/admin/humanResource/addStaff/00' className="btn btn-xs btn-primary ml-1">
            <i className="fa fa-plus" /> Add Staff{" "}
          </NavLink>
          <NavLink type="button" to='/admin/humanResource/staffAttendence' className="btn btn-xs btn-primary ml-1">
            <i className="fa fa-reorder" /> Staff Attendence
          </NavLink>
          <NavLink type="button" to='/admin/humanResource/payroll' className="btn btn-xs btn-primary ml-1">
            <i className="fa fa-reorder" /> Payroll
          </NavLink>
          <NavLink type="button" to='/admin/humanResource/leaves' className="btn btn-xs btn-primary ml-1">
            <i className="fa fa-reorder" /> Leaves
          </NavLink>
        </div>
      </li>
      </ol>
      </nav>
      <div className="row mx-0 px-3 py-2 border-bottom">
        <div className="col-md-6">
        <label className='h6'>Role</label><small className='text-danger'>*</small>
          <div className="form-group border">
              
            <select id='sel' ref={myrole}  style={{ border: "none", width: "100%",padding:'2px' }}>
              <option value="">Select</option>
              <option value="admin">Admin</option>
                                                                            <option value="accountant">Accountant</option>
                                                                            <option value="doctor">Doctor</option>
                                                                            <option value="pharmacist">Pharmacist</option>
                                                                            <option value="labtechnician">Pathologist</option>
                                                                            <option value="receptionist">Receptionist</option>
            </select>
          </div>
          <div className='text-right'>
              <button type="button" onClick={()=>fetchByrole(myrole.current.value)} className='btn btn-xs bg-primary'><i className='fa fa-search mx-1'/> Search</button>
          </div>
        </div>
        <div className="col-md-6">
        <label className='h6'>Search by Keyword</label>
          <div className="form-group border">
              
            <input autoComplete='off' ref={myvalue} placeholder='serach here....' style={{ border: "none", width: "100%",padding:'2px' }}/>
             
          </div>
          <div className='text-right'>
              <button type="button" onClick={()=>fetchByKeyword(myvalue.current.value)} className='btn btn-xs bg-primary'><i className='fa fa-search mx-1'/> Search</button>
          </div>
        </div>
      </div>
      <div className="row mx-0 px-3 py-2 ">
        <div className='table-responsive'>
<table className='table table-bordered'>
    <thead className='bg-light border-bottom'>
      <tr>
        <th className='text-left'> Staff Id </th>
        <th className='text-left'> Name </th>
        <th className='text-left'> Role </th>
        <th className='text-left'> Department </th>
        <th className='text-left'> Designation </th>
        <th className='text-left'> Mobile Number </th>
        <th className='text-left'> Action </th>
        </tr>
    </thead>
    <tbody>
       { 
       (data||[]).length>0?
       (data||[]).map((item)=><tr>
       <td className='text-left'>{item.staffId}</td>
        <td className='text-left'> {item.name} </td>
        <td className='text-left'> {item.role} </td>
        <td className='text-left'> {item.department} </td>
        <td className='text-left'> {item.designation} </td>
        <td className='text-left'> {item.phone} </td>
        <td className='text-left'> <button onClick={()=>history.push('/admin/humanResource/addStaff/'+item.staffId)} className='btn btn-xs btn-primary'><i className='fa fa-pencil'/></button>
        <button className='btn btn-xs btn-primary' onClick={
          ()=>deletealert('humanResource/delete',item.staffId)
          }><i className='fa fa-trash'/></button>
         </td>
        </tr>):<tr><td className='text-center' colSpan='7'>No Records found</td></tr>}
    </tbody>
    </table>
</div>
      </div>
    </div>
  );
};
