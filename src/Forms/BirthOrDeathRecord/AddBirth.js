import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'

 import {toast} from 'react-toastify'
export default (props) =>{
  
    const formik=useFormik({
        enableReinitialize:true,
        initialValues:props.data||{
            
        childName:'',
        gender:'',
        weight:'',
        childPhotoFile:'',
        childPhoto:'',
        birthDate:'',
        phone:'',
        address:'',
        motherName:'',
        ipdopdNo:'',
        motherPhotoFile:'',
        motherPhoto:'',
        fatherName:'',
        fatherPhotoFile:'',
        fatherPhoto:'',
        report:'',
        file:'',
        attachDocument:'',
        responsibility:'',
        
       },
       onSubmit:values=>{console.log(JSON.stringify(values,null,2))
        PostFormdata('mybirthrecord/add','POST',{...values,birthDate:new Date(values.birthDate)=='Invalid Date'?'':new Date(values.birthDate)}).then(
            data=>{
                console.log(data)
                if(values.id){
                    props.setdataSrc(item=>item.map(item1=>item1.id==data.id?{...item1,data}:item1))
                  }else{
                    props.setdataSrc(item=>[data,...item])
                  
                  }
            window.$('#addbirth').modal('hide');

                })
        },
         validationSchema:Yup.object().shape({

            childName:Yup.string().required('Required'),
            weight:Yup.string().required('Required'),
            birthDate:Yup.date().required('Required'),
            gender:Yup.string().required('Required'),
            motherName:Yup.string().required('Required'),
            
        })
     })
React.useEffect(()=>{
    
   // Getdata('/fetchalluser/patient').then(data=>{setData(data);console.log(data)})
   



},[])


    return(
        
        <div class="modal fade" id="addbirth" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
  <div class="modal-content" role="document">
  <div className="card  text-bold">
            
            <div className="card-body login-card-body">
            <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button> 
                  <h5 className="login-box-msg">Add Birth</h5> 
                <form onSubmit={formik.handleSubmit}>
                 <div className="form-row">
                     <div className="col-3">
                     <div> Child Name <small class="req text-danger"> *</small>
                         <input type="text" className="form-control form-CONTROL" value={formik.values.childName} onChange={(e)=>formik.setFieldValue('childName',e.target.value)}/>
                         <span className='text-danger'>{(formik.touched.childName && formik.errors.childName)?formik.errors.childName:''}</span>
                     </div>
                     </div>

                     <div className="col-3">
                     <div className="ml-2">Gender<small class="req text-danger"> *</small>
                         <select id="input" className="form-control form-CONTROL" value={formik.values.gender} onChange={(e)=>formik.setFieldValue('gender',e.target.value)}>
                             <option>Select</option>
                             <option>Male</option>
                             <option>Female</option>
                         </select>
                         <span className='text-danger'>{(formik.touched.gender && formik.errors.gender)?formik.errors.gender:''}</span>
                     </div>
                     </div>

                     <div className="col-3">
                     <div  className="ml-2">Weight<small class="req text-danger"> *</small>
                         <input type="number" className="form-control form-CONTROL" value={formik.values.weight} onChange={(e)=>formik.setFieldValue('weight',e.target.value)}/>
                         <span className='text-danger'>{(formik.touched.weight && formik.errors.weight)?formik.errors.weight:''}</span>
                     </div>
                     </div>
                     <div className="col-3">
                     <div  className="ml-2">Child Photo
                         <input type="file" className="form-control form-CONTROL"  onChange={(e)=>formik.setFieldValue('childPhotoFile',e.target.files[0])}/>
                     </div>
                     </div>
                 </div>

                 <div className="form-row mt-2">

                     <div className="col-3">
                     <div>Birth Date <small class="req text-danger"> *</small></div> 
                     <div className="">
                        <DatePicker autoComplete={false} className="form-control form-CONTROL" 
                        value={formik.values.birthDate} style={{width:'100% !important'}} 
                        selected={new Date(formik.values.birthDate)=='Invalid Date'?'':new Date(formik.values.birthDate)} customInput={<input className="form-control form-CONTROL"/>}  onChange={(data)=>formik.setFieldValue('birthDate',data)}/>
                     </div>
                     <span className='text-danger'>{(formik.touched.birthDate && formik.errors.birthDate)?formik.errors.birthDate:''}</span>
                     </div>

                     <div className="col-3">
                     <div  className="ml-2">Phone
                         <input type="number" className="form-control form-CONTROL" value={formik.values.phone} onChange={(e)=>formik.setFieldValue('phone',e.target.value)} />
                     </div>
                     </div>
                     <div className="col-6">
                     <div  className="ml-2">Address
                         <input type="text" className="form-control form-CONTROL" value={formik.values.address} onChange={(e)=>formik.setFieldValue('address',e.target.value)}/>
                     </div>
                     </div>
                 </div>

                 <div className="form-row mt-2">

                     <div className="col-3">
                     <div>Mother Name<small class="req text-danger"> *</small></div> 
                     <input id="input" className="form-control form-CONTROL" 
                     value={formik.values.motherName} 
                     onChange={(e)=>formik.setFieldValue('motherName',e.target.value)}>
                           
                         </input>
                         <span className='text-danger'>{(formik.touched.motherName && formik.errors.motherName)?formik.errors.motherName:''}</span>
                     </div>

                     <div className="col-3">
                     <div  className="ml-2">IPD/OPD No
                         <input type="text" className="form-control form-CONTROL" value={formik.values.ipdopdNo} onChange={(e)=>formik.setFieldValue('ipdopdNo',e.target.value)}/>
                     </div>
                     </div>
                     <div className="col-6">
                     <div  className="ml-2">Mother Photo
                         <input type="file" className="form-CONTROL"  onChange={(e)=>formik.setFieldValue('motherPhotoFile',e.target.files[0])}/>
                     </div>
                     </div>
                 </div>

                 <div className="form-row mt-2">
                     <div className="col-6">
                         <div>Father Name</div>
                         <input type="text" className="form-control form-CONTROL" value={formik.values.fatherName} onChange={(e)=>formik.setFieldValue('fatherName',e.target.value)}/>
                     </div>
                     <div className="col-6">
                         <div  className="ml-2">Father Photo
                         <input type="file" className="form-CONTROL"  onChange={(e)=>formik.setFieldValue('fatherPhotoFile',e.target.files[0])}/>
                         </div>
                     </div>
                 </div>
                 
                 <div className="form-row mt-2">
                     <div className="col-6">
                         <div>Report</div>
                         <textarea id="input" className="form-control form-CONTROL" value={formik.values.report} onChange={(e)=>formik.setFieldValue('report',e.target.value)}/>
                     </div>
                     <div className="col-6">
                         <div  className="ml-2">Attach Document 
                         <input type="file" className="form-CONTROL"  onChange={(e)=>formik.setFieldValue('file',e.target.files[0])}/>
                         </div>
                     </div>
                 </div>
                 <div className="mt-2">
                 <div>Any Other Responsible</div>
                 <input type="text" className="form-control form-CONTROL" value={formik.values.responsibility} onChange={(e)=>formik.setFieldValue('responsibility',e.target.value)}/>
                 </div> 
                    
                             <div className="mt-3">
                            
                            
                             <button type="submit" class=" btn btn-primary btn-block">Save</button>
                            
                             </div>
                           
                      </form>
                 </div>
            </div>
            </div>
            </div>
        </div>
    )
}