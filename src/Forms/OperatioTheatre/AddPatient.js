import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik, FormikProvider } from 'formik';
import * as  Yup from 'yup';
import {Getdata,Postdata,PostFormdata} from '../../Network/Server'

import {toast} from 'react-toastify'

export default (props) =>
{
    const [organisationCharge,setOrganisationCharge]=React.useState([])
    const [chargecat,setchargecat]=useState([])
const [code,setcode]=useState([])
const [patient,setPatient]=React.useState({})
const [doctor,setDoctor]=React.useState({})
const [tpa, settpa] = React.useState([]);
const [charge,setcharge]=React.useState({});
const formik=useFormik({
    enableReinitialize:true,
        initialValues:props.data||{
              patientId:'',
	  operationName:'',
	  operationType:'',
	  operationDate:'',
	  doctorId:'',
	  assistantConsultant1:'',
	  assistantConsultant2:'',
	  anasthesist:'',
	  anasthesistType:'',
	  otTechnician:'',
	  otAssistant:'',
	  tpaId:'',
	 chargeCategory:'',
	 code:'',
	 standardCharge:'',
	 appliedCharge:'',
	  note:'',
	 weight:'',
	  height:'',
	 bp:'',
	  symptoms:''
	
       },
       onSubmit:values=>{console.log(JSON.stringify(values,null,2))
            Postdata('operationtheater/add','POST',values).then(res=>{
                if(values.id)
                props.setdataSrc(data=>data.map(item=>item.o.id==res.id?{...item,o:res}:item))  
                else
                props.setdataSrc(data=>[{o:res,patientName:patient[res.patientId],doctorName:doctor[res.doctorId]},...data])
                  window.$('#AddOTPatient').modal('hide')
            })
        },
           })
           React.useEffect(()=>{
            Getdata("fetchalluser/patient").then(data => {
                setPatient(data);
                console.log(data);
              });
              Getdata("fetchalluser/doctor").then(data => {
                setDoctor(data);
                console.log(data);
              });
           
              Getdata("organisation/get").then(data => {
                settpa(data);
                console.log(data);
              });
              Getdata('chargesCategory/get/Operation Theatre').then(data=>{
                console.log(data)
                setchargecat(data||[])})
           
            }, []);
            const fetchbychargeCat=(val)=>{
                formik.setFieldValue('chargeCategory',val)
                Getdata('organisationCharges/get/Operation Theatre/'+val).then(data=>{
                    console.log(data);
                    setcode(data||[])
                })
            }

const setChargeAndCode=e=>{
    const code=e.target.value;
    const organisationCharges=JSON.parse(e.target.selectedOptions[0].getAttribute('data-value2'))
    const standardCharge=e.target.selectedOptions[0].getAttribute('data-value')||0
    console.log(organisationCharges)
    formik.setFieldValue('code',code)
    formik.setFieldValue('standardCharge',standardCharge)
    if(formik.values.tpaId==''){
        formik.setFieldValue('appliedCharge',standardCharge)
        setOrganisationCharge(organisationCharges)
    }else{
        console.log(organisationCharges)
        const appliedCharge=(organisationCharges||[]).find(item=>item.organisationId==formik.values.tpaId)
        formik.setFieldValue('appliedCharge',appliedCharge.charges||0)
    }
   
}

            const tpacharges = (val) => {
                console.log(organisationCharge)
             formik.setFieldValue('tpaId',val);
               if((organisationCharge||[]).length>0)
              {
                var myvar=(organisationCharge||[]).find(data=>data.organisationId==val);
                formik.setFieldValue('appliedCharge',myvar.charges)
              }    
            };
                     

    return(
        <div class="modal fade" id="AddOTPatient" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content" role="document">
        <div className="card ">
        <div className="card-header  align-item-center pb-0">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
               <div className="form-row">
                  <select id="input" 
                  className="form-group col-md-4 "
                  {...formik.getFieldProps('patientId')}
                  >
                  <option value=''>Select Patient</option>
                  {patient
                    ? Object.keys(patient).map(item => (
                        <option value={item}>{patient[item]}</option>
                      ))
                    : ""}
                  </select>
               <div className="form-group ml-4">
               <button type="submit"class=" form-inline ml-4"><i class="fas fa-plus "></i>New Patient</button>
            </div>
         </div>
       </div>
       <div className="card-body">
           
               <div className="row">
                   <div className="col-md-6">
                       <div className="d-flex">
                       <div className="form-row">
                        <div className="form-group col-md-6">
                            <div>Height</div>
                            <input type="number" className="form-control" value={formik.values.height} onChange={(e)=>formik.setFieldValue('height',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.height && formik.errors.height)?formik.errors.height:''}</span>
                        </div>
                        
                        <div className="form-group col-md-6">
                            <div>Weight</div>
                            <input type="number" className="form-control " value={formik.values.weight} onChange={(e)=>formik.setFieldValue('weight',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.weight && formik.errors.weight)?formik.errors.weight:''}</span>
                        </div>
                        
                       </div>
                       <div className="form-row px-1">
                        <div className="form-group col-md-6">
                            <div>BP</div>
                            <input type="number" className="form-control" value={formik.values.bp} onChange={(e)=>formik.setFieldValue('bp',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.bp && formik.errors.bp)?formik.errors.bp:''}</span>
                        </div>
                        
                        <div className="form-group col-md-6">
                            <div>Symptoms</div>
                            <input type="text" className=" form-control" value={formik.values.Symptoms} onChange={(e)=>formik.setFieldValue('symptoms',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.symptoms && formik.errors.symptoms)?formik.errors.symptoms:''}</span>
                        </div>
                        
                       </div>
                       </div>
                       <div className="form-group ">
                            <div>Note</div>
                            <textarea className="form-control" rows="3" value={formik.values.note} onChange={(e)=>formik.setFieldValue('note',e.target.value)}></textarea>
                            <span className='text-danger'>{(formik.touched.note && formik.errors.note)?formik.errors.note:''}</span>
                         </div>
                         
                   </div>
                   <div className="col-md-6 bg-light">
                       <div className="form-row">
                           <div className="form-group col-md-6">
                             <div>Operation Name</div>
                             <input type="text" className="form-control" value={formik.values.operationName} onChange={(e)=>formik.setFieldValue('operationName',e.target.value)}/>
                             <span className='text-danger'>{(formik.touched.operationName && formik.errors.operationName)?formik.errors.operationName:''}</span>
                           </div>
                           
                           <div className="form-group col-md-6">
                             <div>Operation Type</div>
                             <input type="text" className="form-control" value={formik.values.operationType} onChange={(e)=>formik.setFieldValue('operationType',e.target.value)}/>
                             <span className='text-danger'>{(formik.touched.operationType && formik.errors.operationType)?formik.errors.operationType:''}</span>
                           </div>
                           
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                             <div>Operation Date</div>
                             <div className="w-100 ">
                                   <DatePicker 
                                   minDate={new Date()}
                                   className="form-control"
                                   style={{width:'100% !important'}} 
                                   selected={new Date(formik.values.operationDate)=='Invalid Date'?'':new Date(formik.values.operationDate)} 
                                  
                                   onChange={(data)=>formik.setFieldValue('operationDate',data)}/>
                                </div>
                                <span className='text-danger'>{(formik.touched.operationDate && formik.errors.operationDate)?formik.errors.operationDate:''}</span>
                           </div>
                           <div className="form-group col-md-6">
                             <div>Consultant Doctor<small className="req text-danger">*</small></div>
                             <select id="input" className="form-control"  
                             value={formik.values.doctorId} 
                             onChange={(e)=>formik.setFieldValue('doctorId',e.target.value)}>
                                 <option selected>Select</option>
                                 {doctor
                    ? Object.keys(doctor).map(item => (
                        <option value={item}>{doctor[item]}</option>
                      ))
                    : ""}
                             </select>
                             <span className='text-danger'>{(formik.touched.consultantDoctor && formik.errors.consultantDoctor)?formik.errors.consultantDoctor:''}</span>
                           </div>
                           
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>Assistant Consultant 1</div>
                               <input type="text" className="form-control" value={formik.values.assistantConsultant1} 
                               onChange={(e)=>formik.setFieldValue('assistantConsultant1',e.target.value)}/>
                               <span className='text-danger'>{(formik.touched.assConsultant1 && formik.errors.assConsultant1)?formik.errors.assConsultant1:''}</span>
                           </div>
                           
                           <div className="form-group col-md-6">
                               <div>Assistant Consultant 2</div>
                               <input type="text" className="form-control" value={formik.values.assistantConsultant2} 
                               onChange={(e)=>formik.setFieldValue('assistantConsultant2',e.target.value)}/>
                               <span className='text-danger'>{(formik.touched.assConsultant2 && formik.errors.assConsultant2)?formik.errors.assConsultant2:''}</span>
                           </div>
                           
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>Anesthetist</div>
                               <input type="text" className="form-control" 
                               value={formik.values.anasthesist} 
                               onChange={(e)=>formik.setFieldValue('anasthesist',e.target.value)}/>
                               <span className='text-danger'>{(formik.touched.anasthesist && formik.errors.anasthesist)?formik.errors.anasthesist:''}</span>
                           </div>
                           
                           <div className="form-group col-md-6">
                               <div>Anesthesia Type</div>
                               <input type="text" className="form-control" 
                               value={formik.values.anasthesistType} 
                               onChange={(e)=>formik.setFieldValue('anasthesistType',e.target.value)}/>
                               <span className='text-danger'>{(formik.touched.anesthetistType && formik.errors.anesthetistType)?formik.errors.anesthetistType:''}</span>
                           </div>
                           
                       </div>

                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>OT Technician</div>
                               <input type="text" className="form-control" value={formik.values.otTechnician} 
                               onChange={(e)=>formik.setFieldValue('otTechnician',e.target.value)}/>
                               <span className='text-danger'>{(formik.touched.otTechnician && formik.errors.otTechnician)?formik.errors.otTechnician:''}</span>
                           </div>
                           
                           <div className="form-group col-md-6">
                               <div>OT Assistant</div>
                               <input type="text" className="form-control" value={formik.values.otAssistant}
                                onChange={(e)=>formik.setFieldValue('otAssistant',e.target.value)}/>
                               <span className='text-danger'>{(formik.touched.otAssistant && formik.errors.otAssistant)?formik.errors.otAssistant:''}</span>
                        </div>
                       
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-12">
                               <div>TPA</div>
                               <select id="input" className="form-control"
                                value={formik.values.tpaId} 
                                onChange={(e)=>tpacharges(e.target.value)}>
                                   <option selected>Select</option>
                                   {tpa
                    ? (tpa||[]).map(item => (
                        <option value={item.id}>{item.organisationName}</option>
                      ))
                    : ""}
                               </select>
                               <span className='text-danger'>{(formik.touched.tpa && formik.errors.tpa)?formik.errors.tpa:''}</span>
                           </div>
                           
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>Charge Category<small className="req text-danger">*</small></div>
                               <select id="input" className="form-control"
                                value={formik.values.chargeCategory} 
                                onChange={(e)=>{
                                    formik.setFieldValue('chargeCategory',e.target.value)
                                fetchbychargeCat(e.target.value)
                                }}>
                               <option value=''>Select</option>
                         {
                             chargecat.map(item=><option value={item.chargeCategory}>{item.chargeCategory}</option>)
                         }
                               </select>
                               <span className='text-danger'>{(formik.touched.selectCtegory && formik.errors.selectCtegory)?formik.errors.selectCtegory:''}</span>
                           </div>
                           
                           <div className="form-group col-md-6">
                               <div>Code<small className="req text-danger">*</small></div>
                               <select id="input" className="form-control" 
                               value={formik.values.code} onChange={(e)=>{setChargeAndCode(e)
                               
                               }}>
                                  <option value=''>Select</option>
                         {
                             code.map(item=><option data-value={item.standardCharge} 
                                data-value2={JSON.stringify(item.organisationCharges)} value={item.code}>{item.code}</option>)
                         }
                               </select>
                               <span className='text-danger'>{(formik.touched.code && formik.errors.code)?formik.errors.code:''}</span>
                           </div>
                           
                       </div>
                       <div className="form-row">
                           <div className="form-group col-md-6">
                               <div>Standard Charge($)<small className="req text-danger">*</small></div>
                               <input type="text" className="form-control" value={formik.values.standardCharge} 
                               onChange={(e)=>formik.setFieldValue('standardCharge',e.target.value)}/>
                               <span className='text-danger'>{(formik.touched.standardCharge && formik.errors.standardCharge)?formik.errors.standardCharge:''}</span>
                           </div>
                           
                           <div className="form-group col-md-6">
                               <div>Applied Charge($)<small className="req text-danger">*</small></div>
                               <input type="text" className="form-control" value={formik.values.appliedCharge} onChange={(e)=>formik.setFieldValue('appliedCharge',e.target.value)}/>
                               <span className='text-danger'>{(formik.touched.appliedCharge && formik.errors.appliedCharge)?formik.errors.appliedCharge:''}</span>
                           </div>
                           
                       </div>
                       <div className="d-flex float-right">
                           
                           <div className="form-group  ">  
                              <button type="submit"
                              onClick={formik.handleSubmit}
                              className="btn btn-primary ml-4">Save</button>   
                           </div>
                           
                       </div>


                   </div>
                 
               </div>
          
           
           
       </div>
    </div>
    </div>
    </div>
    </div>
   
    )
}