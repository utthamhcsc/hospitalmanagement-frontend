import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'

 import {toast} from 'react-toastify'
export default (props) =>{
   const [data,setData]=React.useState({});
  
    const formik=useFormik({
        enableReinitialize:true,
        initialValues:props.data||{

    
        patientId:'',
        deathDate:'',
        guardianName:'',
        ipdopdNo:'',
        report:'',
        receiverName:''
        
    },
       onSubmit:values=>{console.log(JSON.stringify(values,null,2))
        PostFormdata('mydeathrecord/add','POST',{...values,deathDate:new Date(values.deathDate)=='Invalid Date'?'':new Date(values.deathDate)}).then(
            data=>{
                console.log(data)
                if(values.id){
                    props.setdataSrc(item=>item.map(item1=>item1.id==data.id?{...item1,p:data}:item1))
                  }else{
                    props.setdataSrc(item=>[{p:data},...item])
                  
                  }
            window.$('#addexpense').modal('hide');

            }
        );},
         validationSchema:Yup.object().shape({

            patientId:Yup.string().required('Required'),
            
          //  deathDate:Yup.date().required('Required'),
            
            guardianName:Yup.string().required('Required'),
            
        })
     })
React.useEffect(()=>{
    
    Getdata('/fetchalluser/patient').then(data=>{setData(data);console.log(data)})
    




},[])


    return(
        
        <div class="modal fade" id="adddeath" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
  <div class="modal-content" role="document">
  <div class="card ">
            <div class="card-header bg-primary"> Add Death Record
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
                    <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                 <div className="form-row">
                     <div className="col-3">
                     <div> Patient Name <small class="req text-danger"> *</small>
                     <select id="input" className="form-control mt-1" value={formik.values.patientId} onChange={(e)=>formik.setFieldValue('patientId',e.target.value)}>
                             <option>Select</option>
                            {
                                data?Object.keys(data).map(item=><option value={item}>{data[item]}</option>):''
                            }
                         </select>
                         <span className='text-danger'>{(formik.touched.patientId && formik.errors.patientId)?formik.errors.patientId:''}</span>
                     </div>
                     </div>

                     <div className="col-3">
                     <div className="ml-2">IPD/OPD No
                     <input type="text" className="form-control mt-1" value={formik.values.ipdopdNo} onChange={(e)=>formik.setFieldValue('ipdopdNo',e.target.value)}/> 
                     </div>
                     </div>

                     <div className="col-3">
                     <div  className="ml-2">Death date<small class="req text-danger"> *</small>
                     <div className="w-100 ">
                        <DatePicker autoComplete={false} 
                        className="form-control"
                        minDate={new Date()}
                        style={{width:'100% !important'}} selected={
                            new Date(formik.values.deathDate)=='Invalid Date'?
                    '':new Date(formik.values.deathDate) 
                    }  onChange={(data)=>formik.setFieldValue('deathDate',data)}/>
                     </div>
                     <span className='text-danger'>{(formik.touched.deathDate && formik.errors.deathDate)?formik.errors.deathDate:''}</span>
                     </div>
                     </div>
                     <div className="col-3">
                     <div  className="ml-2">Guardian Name<small class="req text-danger"> *</small>
                         <input type="text" className="form-control mt-1" value={formik.values.guardianName} onChange={(e)=>formik.setFieldValue('guardianName',e.target.value)}/>
                         <span className='text-danger'>{(formik.touched.guardianName && formik.errors.guardianName)?formik.errors.guardianName:''}</span>
                     </div>
                     </div>
                 </div>

                 
                 
                 
                 <div className="mt-2">
                 <div>Report</div>
                 <textarea id="input" rows="2" className="form-control mt-1" value={formik.values.report} onChange={(e)=>formik.setFieldValue('report',e.target.value)}/>
                 </div> 

                 <div className="mt-2">
                 <div>Reciever Name</div>
                 <input type="text" className="form-control mt-1" value={formik.values.receiverName} onChange={(e)=>formik.setFieldValue('receiverName',e.target.value)}/>
                 </div> 
                    
                             <div className="d-flex float-right  mt-3">
                            
                            
                             <button type="submit" class="ml-4 btn btn-outline-primary form-control mt-1">Save</button>
                            
                             </div>
                           
                      </form>
                 </div>
            </div>
            </div>
            </div>
        </div>
    )
}