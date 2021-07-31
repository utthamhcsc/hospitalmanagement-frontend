import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
import {toast} from 'react-toastify'
export default (props) =>{
    const doctorId=window.localStorage.getItem('userId')
    const [data, setData] = React.useState({});
    const [doctor, setdoctor] = React.useState([]);
    const [tpa, settpa] = React.useState([]);
    const [bedGroup,setbedGroup]=React.useState([]);
    const [bed,setbed]=React.useState([]);
    const [department,setdepartment]=React.useState([]);
    const formik=useFormik({
      enableReinitialize:true,
    initialValues:props.data||
    {
        patientId:'',
        reference:'',
        height:'',
        weight:'',
        bp:'',
        symptoms:'',
        note:'',
        admissionDate:'',
        caseType:'',
        casulity:'',
        tpa:'',
        doctorId,
        creditLimit:'',
        bedGroup:'',
        bedNumber:'',
        oldPatient:''
    },
       onSubmit:values=>{console.log(JSON.stringify(values,null,2))
        Postdata('myIpd/add','POST',{...values,doctorId}).then(data=>{
          if(data.err){
            toast.error(
              data.err,{autoClose:false,
              
              }
            )
          }
          else{
           window.$('#AddipdPatient').modal('hide') 
          }

        })
        },
         validationSchema:Yup.object().shape({
             
        reference:Yup.string().required('required'),
        height:Yup.number('must be number only').required('required'),
        weight:Yup.number('must be number only').required('required'),
        bp:Yup.number('must be number only').required('required'),
        symptoms:Yup.string().required('required'),
        note:Yup.string().required('required'),
        admissionDate:Yup.date().required('required'),
        caseType:Yup.string().required('required'),
        casulity:Yup.string().required('required'),
        tpa:Yup.string().required('required'),
      //  consDoctor:Yup.string().required('required'),
        creditLimit:Yup.string().required('required'),
        bedGroup:Yup.string().required('required'),
        bedNumber:Yup.number('must be number only').required('required'),
      //  oldpatient:Yup.string().required('required')

         })
     })
    

    
    React.useEffect(() => {
        Getdata("fetchalluser/patient").then(data => {
          setData(data);
          console.log(data);
        });
     
        Getdata("organisation/get").then(data => {
          settpa(data);
          console.log(data);
        });
        Getdata("bedgroup/get").then(data => {
            setbedGroup(data||[]);
            console.log(data);
          });
      //  Getdata('department/get').then(data=>setdepartment(data)).catch(err=>console.log(err));
      
      }, []);
      React.useEffect(() => {
      if(props.data && props.data.department)
      fetchdoctor(props.data.department)
      }, [props.data]);


      const fetchdoctor=(id)=>{
        Getdata('humanResource/get/doctor/'+id).then(data=>{setdoctor(data)})
       }
       const fetchbed=(id)=>{
        Getdata('bed/get/bedgroup/'+id+'/0').then(data=>{setbed(data)})
       }
    return(
        <div class="modal fade" id="AddipdPatient" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">
       
        <div className="card">
            <div className="card-header bg-primary aligh-item-center pb-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>   
               <div className="form-row">
               <select id="input" className="form-group col-md-4"  {...formik.getFieldProps('patientId')} >
                 <option></option>
                 {
                   data?  Object.keys(data).map(item=><option value={item}>{data[item]}</option>):''
                 }
               </select>
               
               <div className="form-group col-md-3 ml-4">
               <button class=" form-inline ml-2" data-toggle='modal' data-target='#addnewpatient'><i class="fas fa-plus "></i>New Patient</button>
                </div>
               </div>
               </div>
              <div className="card-body ">
                
                    
                    <div className="row">
                        <div className="col-md-8 ">
                        <div className="form-row ">
                        <div className="form-group col-md-4  ">
                            <label for="hight">Hieght <small class="req text-danger"> *</small></label>
                            <input type="number" className="form-control" value={formik.values.height} onChange={(e)=>formik.setFieldValue('height',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.height && formik.errors.height)?formik.errors.height:''}</span>
                        </div>
                        
                
                        <div className="form-group col-md-4">
                            <label for="hight">Weight <small class="req text-danger"> *</small></label>
                            <input type="number" className="form-control" value={formik.values.weight} onChange={(e)=>formik.setFieldValue('weight',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.weight && formik.errors.weight)?formik.errors.weight:''}</span>
                        </div>
                        
                
                        <div className="form-group col-md-4 ">
                            <label for="hight">BP <small class="req text-danger"> *</small></label>
                            <input type="number" className="form-control" value={formik.values.bp} onChange={(e)=>formik.setFieldValue('bp',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.bp && formik.errors.bp)?formik.errors.bp:''}</span>
                        </div>
                        </div>  
                        <div className="form-row ">
                        <div className="form-group col-md-12">
                            <label for="hight">Symptoms <small class="req text-danger"> *</small></label>
                            <input type="text" className="form-control" value={formik.values.symptoms} onChange={(e)=>formik.setFieldValue('symptoms',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.symptoms && formik.errors.symptoms)?formik.errors.symptoms:''}</span>
                        </div>
                        
               
                        </div>  
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label for="inputCity">Note <small class="req text-danger"> *</small></label>
                               <textarea className="form-control bg-transparent" value={formik.values.note} rows="2" onChange={(e)=>formik.setFieldValue('note',e.target.value)}>
                               </textarea>
                               <span className='text-danger'>{(formik.touched.note && formik.errors.note)?formik.errors.note:''}</span>
                           </div> 
                           </div> 
                           </div>
                           <div className="col-md-4 bg-light">
                               <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Admission Date <small class="req text-danger"> *</small></label>
                                <div className="w-100 ">
                                   <DatePicker 
                                   minDate={new Date()}
                                   autoComplete={'off'} className="form-control" 
                                   selected={new Date(formik.values.admissionDate)=='Invalid Date'?'':new Date(formik.values.admissionDate)} style={{width:'100% !important'}}  customInput={<input className="form-control"/>}  onChange={(data)=>formik.setFieldValue('admissionDate',data)}/>
                                </div> 
                              <span className='text-danger'>{(formik.touched.admissionDate && formik.errors.admissionDate)?formik.errors.admissionDate:''}</span>
                            </div>
                            <div className="form-group col-md-6">
                                 <label for="case">Case Type</label>
                                 <input type="text" className="form-control" value={formik.values.caseType} onChange={(e)=>formik.setFieldValue('caseType',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.caseType && formik.errors.caseType)?formik.errors.caseType:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Casualty <small class="req text-danger"> *</small></label>
                                 <select id="input" className="form-control" value={formik.values.casulity} onChange={(e)=>formik.setFieldValue('casulity',e.target.value)}>
                                 <option></option>
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                                 <span className='text-danger'>{(formik.touched.casulity && formik.errors.casulity)?formik.errors.casulity:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Old Patient</label>
                                 <select id="input" className="form-control" value={formik.values.oldPatient} onChange={(e)=>formik.setFieldValue('oldPatient',e.target.value)}>
                                 <option></option>
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                                 <span className='text-danger'>{(formik.touched.oldpatient && formik.errors.oldpatient)?formik.errors.oldpatient:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">TPA <small class="req text-danger"> *</small></label>
                                 <select
                          id="input"
                          className="form-control"
                          value={formik.values.tpa}
                          onChange={e =>{
                            formik.setFieldValue("tpa", e.target.value);
                       
                        }
                          }
                        >
                          <option></option>
                          {(tpa || []).map(item => (
                            <option key={item.id} value={item.id}>
                              {item.organisationName}
                            </option>
                          ))}
                        </select>
                                 
                                 <span className='text-danger'>{(formik.touched.tpa && formik.errors.tpa)?formik.errors.tpa:''}</span>
                             </div>
                             <div className="from-group col-md-6">
                                 <label for="refrence">Credit Limit($)<small class="req text-danger"> *</small></label>
                                 <input type="text" className="form-control" value={formik.values.creditLimit} onChange={(e)=>formik.setFieldValue('creditLimit',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.creditLimit && formik.errors.creditLimit)?formik.errors.creditLimit:''}</span>
                             </div>
                             <div className="form-group col-md-12">
                                 <label for="stdcharge">Referenece</label>
                                 <input type="text" className="form-control" value={formik.values.reference} onChange={(e)=>formik.setFieldValue('reference',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.reference && formik.errors.reference)?formik.errors.reference:''}</span>
                             </div>     
                      
                             <div className="form-group col-md-12">
                                 <label for="stdcharge">Bed Group<small class="req text-danger"> *</small></label>
                                 <select id="input" className="form-control" 
                                 value={formik.values.bedGroup}
                                  onChange={(e)=>{formik.setFieldValue('bedGroup',e.target.value)
                                  fetchbed(e.target.value)
                                  }}>
                                 <option > Select Bed Group</option>
   {
     (bedGroup||[]).map(item=><option value={item.id}>{item.name+'-'+item.floorName}</option>)
   }
                                 </select>
                                 <span className='text-danger'>{(formik.touched.bedGroup && formik.errors.bedGroup)?formik.errors.bedGroup:''}</span>
                             </div>
                             <div className="from-group col-md-12">
                                 <label for="doctor">Bed Number <small class="req text-danger"> *</small></label>
                                 <select id="input " className="form-control" value={formik.values.bedNumber} onChange={(e)=>formik.setFieldValue('bedNumber',e.target.value)}>
                                 <option > Select Bed Number</option>
   {
     (bed||[]).map(item=><option value={item.id}>{item.id+'-'+item.name}</option>)
   }                                     </select>
                                     <span className='text-danger'>{(formik.touched.bedNumber && formik.errors.bedNumber)?formik.errors.bedNumber:''}</span>
                                      </div>
                            </div> 
                            <div className="from-group col-md-12 m-4">
                            <button type="submit" onClick={formik.handleSubmit} class="col-md-6 btn btn-outline-primary  btn-sm form-control">Save & Print</button>
                             <button type="submit" onClick={formik.handleSubmit} class="col-md-4 ml-4 btn btn-outline-primary form-control">Save</button>
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