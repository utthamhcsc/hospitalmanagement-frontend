
import React, { useState } from 'react'
import {useFormik} from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
import ReactDatePicker from 'react-datepicker';
export default (props)=>{
const [patient,setpatient]=useState([]);
const [doctor,setdoctor]=useState([])

    const formik = useFormik({
        initialValues:props.data||{
           file:'',
           testReport:'',
           patientId:'',
           doctorId:'',
           code:props.code,
           appliedCharge:props.standardCharge,
           standardCharge:props.standardCharge,
           chargeCategory:props.chargeCategory,
           radiologyId:props.id,
           description:'',
           date:''
        },
        enableReinitialize:true,
        onSubmit:values=>{console.log(JSON.stringify(values,null,2))
          PostFormdata('radiologypatient/add','POST',{...values,date:new Date(values.date)=='Invalid Date'?'':new Date(values.date)}).then(res=>{
            if(values.id){
           // props.setdataSrc(data=>data.map(item=>item.p.id==res.id?{p:res,category:item.category}:item))  
            }else{
          //  props.setdataSrc(data=>[{p:res},...data])
        }
              window.$('#addPatient').modal('hide')
          })},
         
      })

      React.useEffect(() => {
        Getdata("fetchalluser/patient").then(data => {
          setpatient(data);
          console.log(data);
        });
        Getdata("fetchalluser/doctor").then(data => {
            setdoctor(data);
            console.log(data);
          });
    },[])




    return(
        <div class="modal fade" id="addPatient" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div class="card ">
            <div class="card-header bg-primary"> 
            <select className='w-25' {...formik.getFieldProps('patientId')}>
                <option value=''>Select Patient</option>
                {patient
                    ? Object.keys(patient).map(item => (
                        <option value={item}>{patient[item]}</option>
                      ))
                    : ""}
            </select>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
           <div class="card-body">
              
                   <div className='row'>
                        <div className='col-md-4 form-group'>
                                <label>Reporting Date</label>
                                <ReactDatePicker className='form-control'
                                autoComplete='off'
                                minDate={new Date()}
                                selected={new Date(formik.values.date)=='Invalid Date'?'':new Date(formik.values.date)}
                                onChange={(e)=>formik.setFieldValue('date',e)}
                                />
                        </div>
                        <div className='col-md-4 form-group'>
                                <label>Referal Doctor</label>
                                <select className='form-control' {...formik.getFieldProps('doctorId')}>
                                <option value=''>Select Doctor</option>
                                {doctor
                    ? Object.keys(doctor).map(item => (
                        <option value={item}>{doctor[item]}</option>
                      ))
                    : ""}
                                </select>
                        </div>
                        <div className='col-md-4 form-group'>
                                <label>Test Report</label>
                                <input type='file' 
                                className='form-control'
                                onChange={(e)=>{
                                    formik.setFieldValue('file',e.target.files[0])
                                }}
                                />
                        </div>
                        <div className='col-md-3 form-group'>
                                <label>Charge Category</label>
                                <input 
                                readOnly
                                {...formik.getFieldProps('chargeCategory')}
                                className='form-control' />
                        </div>
                        <div className='col-md-3 form-group'>
                                <label>Code</label>
                                <input 
                                readOnly
                                {...formik.getFieldProps('code')}
                                className='form-control'/>
                        </div>
                        <div className='col-md-3 form-group'>
                                <label>Standard Charge</label>
                                <input
                                readOnly
                                {...formik.getFieldProps('standardCharge')}
                                className='form-control'/>
                        </div>
                        <div className='col-md-3 form-group'>
                                <label>Applied Charge</label>
                                <input
                                {...formik.getFieldProps('appliedCharge')}
                                className='form-control'/>
                        </div>
                        <div className='col-md-12 form-group'>
                                <label>Description</label>
                                <textarea
                                {...formik.getFieldProps('description')}
                                className='form-control'/>
                        </div>











                   </div>
              <div className="form-group float-right mt-4">
                      <button type="submit"
                      onClick={formik.handleSubmit}
                      className="form-control bg-primary ">Save</button>
                  </div>
                  
         </div>
     </div>
     </div>
     </div>
     </div>
    )
}