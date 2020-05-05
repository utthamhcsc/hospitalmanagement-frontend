import React from 'react'
import {useFormik} from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
 import {toast} from 'react-toastify'
export default (props)=>{
    const formik = useFormik({
        enableReinitialize:true,
        initialValues:props.data||{
            donarName:'',
            agemonth:'',
            ageyear:'',
            bloodGroup:'',
            gender:'',
            fatherName:'',
            contact:'',
            address:'',
           
        },
        onSubmit:values=>{console.log(JSON.stringify(values,null,2))
          Postdata('blooddonar/add','POST',values).then(res=>{
            if(values.id){
                 props.setdataSrc(data=>data.map(item=>item.id==res.id?res:item))  
                 }else{
                 props.setdataSrc(data=>[res,...data])
             }
             window.$('#Addblooddonor').modal('hide')
          })},
          validationSchema:Yup.object().shape({
            donarName:Yup.string().required('Required'),
            bloodGroup:Yup.string().required('Required'),
            gender:Yup.string().required('Required'),
            
          })
      })

    return(
        <div class="modal fade" id="Addblooddonor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div class="card ">
            <div class="card-header bg-primary"> Add Donor Details
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
           <div class="card-body ">
               <form onSubmit={formik.handleSubmit}>
               <div className="form-row border bg-light">
                  <div className="col-8"> 
                  <div className="form-group p-2">
                      <div>Donor Name <small className="req text-danger">*</small></div>
                      <input type="text" class="form-control" value={formik.values.donarName} onChange={(e)=>formik.setFieldValue('donarName',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.donarName && formik.errors.donarName)?formik.errors.donarName:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Age </div>
                      <div className="form-row">
                          <div className="col-sm">
                      <input type="text" class="form-control" placeholder="Year" value={formik.values.ageyear} onChange={(e)=>formik.setFieldValue('ageyear',e.target.value)}/>
                      </div>
                      <div className="col-sm">
                      <input type="text" class="form-control" placeholder="Month" value={formik.values.agemonth} onChange={(e)=>formik.setFieldValue('agemonth',e.target.value)}/>
                      </div>
                      </div>
                      <span className='text-danger'>{(formik.touched.shortName && formik.errors.shortName)?formik.errors.shortName:''}</span>
                  </div>
                  </div>
                  
                  <div className="col-4">
                  <div className="form-group p-2">
                      <div>Blood Group<small className="req text-danger">*</small></div>
                      <select id="input"className="form-control" value={formik.values.bloodGroup}  onChange={(e)=>formik.setFieldValue('bloodGroup',e.target.value)}>
                      
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
                                                
                      <span className='text-danger'>{(formik.touched.bloodGroup && formik.errors.bloodGroup)?formik.errors.bloodGroup:''}</span>
                  </div>
                  
                  
                  <div className="form-group p-2 ">
                      <div>Gender<small className="req text-danger">*</small></div>
                      <select id="input"className="form-control" value={formik.values.gender}  onChange={(e)=>formik.setFieldValue('gender',e.target.value)}>
                          <option selected>Select</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select> 
                        <span className='text-danger'>{(formik.touched.gender && formik.errors.gender)?formik.errors.gender:''}</span>
 
                     </div>
                    
                     </div>
                        
                
                  
                  
                  
                  
                  
              </div>
              <div className=" border form-row mt-4 bg-light">
                  <div className="col-6">
              <div className="form-group p-2">
                      <div>Father Name</div>
                      <input type="text" class="form-control" value={formik.values.fatherName}
                       onChange={(e)=>formik.setFieldValue('fatherName',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.method && formik.errors.method)?formik.errors.method:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Contact No</div>
                      <input type="number" class="form-control" value={formik.values.contact}  onChange={(e)=>formik.setFieldValue('contact',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.reportDays && formik.errors.reportDays)?formik.errors.reportDays:''}</span>
                  </div>
                  </div>

<div className="col-6">
                        <div className="form-group p-2">
                      <div>Address</div>
                      <textarea className="form-control" rows="5"
                      {...formik.getFieldProps('address')}
                      ></textarea>
                      <span className='text-danger'>{(formik.touched.address && formik.errors.reportDays)?formik.errors.reportDays:''}</span>
                  </div>
                  </div>
            
                   
                  
              </div>
              <div className="form-group float-right mt-4">
                      <button type="submit"className="form-control bg-primary ">Save</button>
                  </div>
                  </form>
         </div>
     </div>
     </div>
     </div>
     </div>
    )
}