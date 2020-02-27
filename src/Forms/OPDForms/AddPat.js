import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'


export default () =>{
   
    const formik=useFormik({
        initialValues:{
        height:'',
        weight:'',
        bp:'',
        symptoms:'',
        note:'',
        appointmentDate:'',
        caseType:'',
        casuality:'',
        oldPatient:'',
        tpa:'',
        reference:'',
        consDoctor:'',
        standardCharge:'',
        appliedCharge:'',
        paymentMode:''
       },
       onSubmit:values=>{alert(JSON.stringify(values,null,2))
         Postdata('opdoutpatient/','POST',values).then(data=>console.log(data))},
         validationSchema:Yup.object().shape({
            height:Yup.number().required(),
            weight:Yup.number().required(),
            bp:Yup.number().required(),
            symptoms:Yup.string().required(),
            note:Yup.string().required(),
            appointmentDate:Yup.date().required(),
            caseType:Yup.string().required(),
            casuality:Yup.string().required(),
            oldPatient:Yup.string().required(),
            tpa:Yup.string().required(),
            reference:Yup.string().required(),
            consDoctor:Yup.string().required(),
            standardCharge:Yup.string().required(),
            appliedCharge:Yup.string().required(),
            paymentMode:Yup.string().required()
         })
     })



    return(
        
        <div class="modal fade" id="AddOpdPatient" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
  <div class="modal-content" role="document">
  <div className="card">
  
     <div className="card-header bg-primary align-item-center pb-0">
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>   
  
               <div className="form-row">
               <select id="input" className="form-group col-md-4 ">
                  <option selected>Select Patient</option>
                  <option>Abhishek</option>
                  <option>BAsavaraj</option>
                  <option>Charan</option>
                  <option>Devegouda</option>
               </select>
               <div className="form-group ml-4">
               <button class=" form-inline ml-2" data-toggle='modal' data-target='#addnewpatient'><i class="fas fa-plus "></i>New Patient</button>
                </div>
               </div>
               </div>
               
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                
                    <div className="row">
                        <div className="col-md-8 ">
                        <div className="form-row ">
                        <div className="form-group col-md-4  ">
                            <label for="hight">Height</label>
                            <input type="number"  className="form-control" value={formik.values.height} onChange={(e)=>formik.setFieldValue('height',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.height && formik.errors.height)?formik.errors.height:''}</span>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="hight">Weight</label>
                            <input type="number"  className="form-control" value={formik.values.weight} onChange={(e)=>formik.setFieldValue('weight',e.target.value)} />
                            <span className='text-danger'>{(formik.touched.weight && formik.errors.weight)?formik.errors.weight:''}</span>
                        </div>
                        
                        <div className="form-group col-md-4 ">
                            <label for="hight">BP</label>
                            <input type="number"  className="form-control" value={formik.values.bp} onChange={(e)=>formik.setFieldValue('bp',e.target.value)} />
                            <span className='text-danger'>{(formik.touched.bp && formik.errors.bp)?formik.errors.bp:''}</span>
                        </div>
                        </div>  
                       <div className="form-row ">
                        <div className="form-group col-md-12">
                            <label for="hight">Symptoms</label>
                            <input type="text"   className="form-control" value={formik.values.symptoms} onChange={(e)=>formik.setFieldValue('symptoms',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.symptoms && formik.errors.symptoms)?formik.errors.symptoms:''}</span>
                        </div>
                        
                        </div>  
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label for="inputCity">Note</label>
                               <textarea className="form-control bg-transparent" value={formik.values.note} onChange={(e)=>formik.setFieldValue('note',e.target.value)}  >
                               </textarea>
                           </div>  
                           <span className='text-danger'>{(formik.touched.note && formik.errors.note)?formik.errors.note:''}</span>
                           </div> 
                           </div>


                           <div className="col-md-4 bg-light">
                               <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Appointment Date</label>
                                <div className="w-100 ">
                                   <DatePicker className="form-control" value={formik.values.appointmentDate}  style={{width:'100% !important'}} selected={formik.values.appointmentDate} customInput={<input className="form-control"/>}  onChange={(data)=>formik.setFieldValue('appointmentDate',data)}/>
                                </div> 
                                <span className='text-danger'>{(formik.touched.appointmentDate && formik.errors.appointmentDate)?formik.errors.appointmentDate:''}</span>
                            </div>
                            <div className="form-group col-md-6">
                                 <label for="case">Case Type</label>
                                 <input type="text"  className="form-control ml-2" value={formik.values.caseType} onChange={(e)=>formik.setFieldValue('caseType',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.caseType && formik.errors.caseType)?formik.errors.caseType:''}</span>
                             </div>
                             
                             <div className="form-group col-md-6">
                                 <label for="case">Casuality</label>
                                 <select id="input"  className="form-control"  value={formik.values.casuality} onChange={(e)=>formik.setFieldValue('casuality',e.target.value)}>
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                                 <span className='text-danger'>{(formik.touched.casuality && formik.errors.casuality)?formik.errors.casuality:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Old Patient</label>
                                 <select id="input"  className="form-control" value={formik.values.oldPatient} onChange={(e)=>formik.setFieldValue('oldPatient',e.target.value)}>
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                                 <span className='text-danger'>{(formik.touched.oldPatient && formik.errors.oldPatient)?formik.errors.oldPatient:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">TPA</label>
                                 <select id="input" className="form-control" value={formik.values.tpa} onChange={(e)=>formik.setFieldValue('tpa',e.target.value)}>
                                 <option>CGHS</option>
                                 <option>IDBI Federal</option>
                                 <option>Star Health Insurance</option>
                                 </select>
                                 <span className='text-danger'>{(formik.touched.tpa && formik.errors.tpa)?formik.errors.tpa:''}</span>
                             </div>
                             <div className="from-group col-md-6">
                                 <label for="refrence">Reference</label>
                                 <input type="text"   className="form-control" value={formik.values.reference} onChange={(e)=>formik.setFieldValue('reference',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.reference && formik.errors.reference)?formik.errors.reference:''}</span>
                             </div>
                             <div className="from-group col-md-12">
                                 <label for="doctor">Consultant Doctor</label>
                                 <select id="input "  className="form-control" value={formik.values.consDoctor} onChange={(e)=>formik.setFieldValue('consDoctor',e.target.value)}>
                                     <option>Dr.Thapa</option>
                                     <option>Dr.Soniya</option>
                                     <option>Dr.Amit</option>
                                     </select>
                                     <span className='text-danger'>{(formik.touched.consDoctor && formik.errors.consDoctor)?formik.errors.consDoctor:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="stdcharge">Standard Charge ($)</label>
                                 <input type="number"  className="form-control" value={formik.values.standardCharge} onChange={(e)=>formik.setFieldValue('standardCharge',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.standardCharge && formik.errors.standardCharge)?formik.errors.standardCharge:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="stdcharge">Applied Charge ($)</label>
                                 <input type="number"   className="form-control" value={formik.values.appliedCharge} onChange={(e)=>formik.setFieldValue('appliedCharge',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.appliedCharge && formik.errors.appliedCharge)?formik.errors.appliedCharge:''}</span>
                             </div>
                             
                             <div className="from-group col-md-12">
                                 <label for="doctor">Payment Mode</label>
                                 <select id="input "   className="form-control" value={formik.values.paymentMode} onChange={(e)=>formik.setFieldValue('paymentMode',e.target.value)}>
                                     <option>Cash</option>
                                     <option>Check</option>
                                     <option>Net Banking</option>
                                     <option>Other</option>
                                     </select>
                                      </div>
                                      <span className='text-danger'>{(formik.touched.paymentMode && formik.errors.paymentMode)?formik.errors.paymentMode:''}</span>
                            </div> 
                            <div className="from-group col-md-12 m-4">
                            <button type="submit" class="col-md-6 btn btn-outline-primary form-control">Save & Print</button>
                             <button type="submit" class="col-md-4 ml-4 btn btn-outline-primary form-control">Save</button>
                            </div>
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