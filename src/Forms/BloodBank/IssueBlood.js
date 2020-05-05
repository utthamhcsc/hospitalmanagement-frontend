import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'

 import {toast} from 'react-toastify'
export default (props) =>{
   const [data,setData]=React.useState({});
   const [doctor,setDoctor]=React.useState({});
   const [donar,setdonar]=React.useState([]);
    const formik=useFormik({
      enableReinitialize:true,
        initialValues:props.data||{
            patientId:'',
        issueDate:'',
        doctorId:'',
        doctorName:'',
        donorId:'',
        technician:'',
        bloodGroup:'',
        lot:'',
        bagNo:'',
        amount:'',
        remarks:'',
       
       },
      
	
	
       onSubmit:values=>{console.log(JSON.stringify(values,null,2))
         Postdata('bloodissue/add','POST',values).then(data=>toast.success('successfully added', {
      position: toast.POSITION.TOP_CENTER
    }))},
         validationSchema:Yup.object().shape({

            issueDate:Yup.date().required('Required'),
            doctorName:Yup.string().required('Required'),
            amount:Yup.string().required('Required'),
            donorId:Yup.string().required('Required'),
            
        })
     })
React.useEffect(()=>{
    
    Getdata('/fetchalluser/patient').then(data=>{setData(data);console.log(data)})
    Getdata('/fetchalluser/doctor').then(data=>{setDoctor(data);console.log(data)})
    Getdata('blooddonar/get').then(data=>{
        setdonar(data)
        console.log(data)
    })




},[])


    return(
        
        <div class="modal fade" id="issueblood" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
  <div class="modal-content" role="document">
  <div className="card">
  
     <div className="card-header bg-primary align-item-center pb-0">
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>   
  
               <div className="form-row">
               <select id="input" className="form-group col-md-4 " {...formik.getFieldProps('patientId')} >
                 <option value=''>Select Patient</option>
                 {
                   data?  Object.keys(data).map(item=><option value={item}>{data[item]}</option>):''
                 }
               </select>
               <div className="form-group ml-4">
               <button class=" form-inline ml-2" data-toggle='modal' data-target='#addnewpatient'><i class="fas fa-plus "></i>New Patient</button>
                </div>
               </div>
               </div>
               
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                 <div className="form-row">
                 <div className="col-3  ">
                     <div>Issue date <small className="req text-danger">*</small></div>
                     <div className="w-100 ">
                       <DatePicker className="form-control" 
                        style={{width:'100% !important'}} 
                        selected={new Date(formik.values.issueDate)=='Invalid Date'?'':new Date(formik.values.issueDate)} 
                        customInput={<input className="form-control"/>}  
                        onChange={(data)=>formik.setFieldValue('issueDate',data)}/>
                     </div>
                     <span className='text-danger'>{(formik.touched.issueDate && formik.errors.issueDate)?formik.errors.issueDate:''}</span>
 
                     <div>Donor Name <small className="req text-danger">*</small></div>
                     <select id="input" className="form-control" 
                     value={formik.values.donorId} 
                     onChange={(e)=>{formik.setFieldValue('donorId',e.target.value)
                     formik.setFieldValue('bloodGroup',e.target.selectedOptions[0].getAttribute('data-value'))
                     }}>
                         <option>select donar</option>
                         {
donar.map(item=><option value={item.id} data-value={item.bloodGroup}>{item.donarName}</option>)
                         }
                     </select> 
                     <span className='text-danger'>{(formik.touched.donorId && formik.errors.donorId)?formik.errors.donorId:''}</span>
 
                     <div>Amount <small className="req text-danger">*</small></div>
                     <input type="text" className="form-control" value={formik.values.amount} onChange={(e)=>formik.setFieldValue('amount',e.target.value)}></input>
                     <span className='text-danger'>{(formik.touched.amount && formik.errors.amount)?formik.errors.amount:''}</span>
 
                  </div>
                  <div className="col-3 ">
                  <div>Hospital Doctor </div>
                     <select id="input" className="form-control"
                     value={formik.values.doctorId}
                     onChange={(e)=>{
formik.setFieldValue('doctorId',e.target.value)
formik.setFieldValue('doctorName',doctor[e.target.value])
                     }}
                     >
                     <option value=''>select doctor</option>
                 {
                   doctor?  Object.keys(doctor).map(item=><option value={item}>{doctor[item]}</option>):''
                 }
                     </select> 
                     
                     <div>Blood Group</div>
                     <input className='form-control' readOnly value={formik.values.bloodGroup}/>
                     <div className="">
                      <div>Remarks</div>
                      <textarea id="input" rows="2" className="form-control"
                      {...formik.getFieldProps('remarks')}
                      ></textarea>
                  </div>
                     
                  </div>
                  <div className="col-3 ">
                  <div> Doctor Name <small className="req text-danger">*</small></div>
                     <input type="text" className="form-control" value={formik.values.doctorName} onChange={(e)=>formik.setFieldValue('doctorName',e.target.value)}></input>
                     <span className='text-danger'>{(formik.touched.doctorName && formik.errors.doctorName)?formik.errors.doctorName:''}</span>
 
                     <div>Lot</div>
                     <input type="text" className="form-control"
                     {...formik.getFieldProps('lot')}
                     ></input>
                     
                     
                  </div>

                  <div className="col-3">
                  <div> Technician </div>
                     <input type="text" className="form-control"
                     {...formik.getFieldProps('technician')}
                     ></input>
                     
                     <div>Bag No</div>
                     <input type="text" className="form-control"
                     {...formik.getFieldProps('bagNo')}
                     ></input>

                     
                     
                     
                  </div>
                 

                  
                  </div>

                               
                        
                        
                  <div className="">
                      <div className="d-flex float-right">
                            
                             <button type="submit" class=" btn btn-outline-primary form-control ml-2 ">Save</button>
                             </div>
                            </div>
                            
                            
                        
                        


                             
                              
                      </form>
                 </div>
            </div>
            </div>
            </div>
        </div>
    )
}