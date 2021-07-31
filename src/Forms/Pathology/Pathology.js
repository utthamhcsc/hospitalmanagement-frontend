import React, { useState } from 'react'
import {useFormik} from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
 import {toast} from 'react-toastify'
export default (props)=>{
const [cat,setcat]=useState([]);
const [chargecat,setchargecat]=useState([])
const [code,setcode]=useState([])
    const formik = useFormik({
        initialValues:props.data||{
            testName:'',
            shortName:'',
            testType:'',
            category:'',
            unit:'',
            subCategory:'',
            reportDays:'',
            method:'',
            chargeCategory:'', 
            code:'',
            standardCharge:''
        },
        enableReinitialize:true,
        onSubmit:values=>{console.log(JSON.stringify(values,null,2))
          Postdata('pathology/add','POST',{values}).then(res=>{
            if(values.id)
            props.setdataSrc(data=>data.map(item=>item.p.id==res.id?{p:res,category:item.category}:item))  
            else
            props.setdataSrc(data=>[{p:res},...data])
              window.$('#AddpathologyTest').modal('hide')
              window.location.reload();
          })},
          validationSchema:Yup.object().shape({
            testName:Yup.string().required('required'),
            shortName:Yup.string().required('required'),
            testType:Yup.string().required('required'),
            category:Yup.string().required('required'),
            unit:Yup.number('must be number only').required('required'),
            subCategory:Yup.string().required('required'),
            reportDays:Yup.number('must be number only').required('required'),
            method:Yup.string().required('required'),
            chargeCategory:Yup.string().required('required'),
            code:Yup.string().required('required'),
            standardCharge:Yup.string().required('required')
  
          })
      })
React.useEffect(()=>{
    Getdata('pathologyCategory/get').then(data=>setcat(data||[]))
    Getdata('chargesCategory/get/Investigations').then(data=>{
        console.log(data)
        setchargecat(data||[])})
        if(props.data && props.data.chargeCategory){
            Getdata('organisationCharges/get/Investigations/'+props.data.chargeCategory).then(data=>{
                console.log(data);
                setcode(data||[])
            })
        }
    
},[])
React.useEffect(()=>{
    
        if(props.data && props.data.chargeCategory){
            Getdata('organisationCharges/get/Investigations/'+props.data.chargeCategory).then(data=>{
                console.log(data);
                setcode(data||[])
            })
        }
    
},[props.data])
const fetchbychargeCat=(val)=>{
    formik.setFieldValue('chargeCategory',val)
    Getdata('organisationCharges/get/Investigations/'+val).then(data=>{
        console.log(data);
        setcode(data||[])
    })
}







    return(
        <div class="modal fade" id="AddpathologyTest" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

         <div className="card  ">
            
            <div className="card-body login-card-body">
            <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button> 
                  <h5 className="login-box-msg">Add Pathology Test</h5> 
               <form onSubmit={formik.handleSubmit}>
               <div className="row mb-3">
                  <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Test Name <small className="req text-danger">*</small></div>
                      <input type="text" class="form-control" value={formik.values.testName} onChange={(e)=>formik.setFieldValue('testName',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.testName && formik.errors.testName)?formik.errors.testName:''}</span>
                  </div>
                  
                  <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Short Name <small className="req text-danger">*</small></div>
                      <input type="text" class="form-control" value={formik.values.shortName} onChange={(e)=>formik.setFieldValue('shortName',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.shortName && formik.errors.shortName)?formik.errors.shortName:''}</span>
                  </div>
                  
                  <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Test type<small className="req text-danger">*</small></div>
                      <input type="text" class="form-control" value={formik.values.testType} onChange={(e)=>formik.setFieldValue('testType',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.testType && formik.errors.testType)?formik.errors.testType:''}</span>
                  </div>
                  
                  <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Category Name<small className="req text-danger">*</small></div>
                      <select id="input"className="form-control" value={formik.values.category}  onChange={(e)=>formik.setFieldValue('category',e.target.value)}>
                          <option value=''>Select</option>
                          {
                              cat.map(item=><option value={item.id}>{item.name}</option>)
                          }
                        </select>  
                        <span className='text-danger'>{(formik.touched.category && formik.errors.category)?formik.errors.category:''}</span>
                  </div>
                  
              </div>
              <div className="row mb-3">
                  <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Unit</div>
                      <input type="text" class="form-control" value={formik.values.unit} onChange={(e)=>formik.setFieldValue('unit',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.unit && formik.errors.unit)?formik.errors.unit:''}</span>
                  </div>
                  
                  <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Sub Category</div>
                      <input type="text" class="form-control" value={formik.values.subCategory}  onChange={(e)=>formik.setFieldValue('subCategory',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.subCategory && formik.errors.subCategory)?formik.errors.subCategory:''}</span>
                  </div>
                  
                  <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Method</div>
                      <input type="text" class="form-control" value={formik.values.method} onChange={(e)=>formik.setFieldValue('method',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.method && formik.errors.method)?formik.errors.method:''}</span>
                  </div>
                  
                  <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Report Days</div>
                      <input type="text" class="form-control" value={formik.values.reportDays}  onChange={(e)=>formik.setFieldValue('reportDays',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.reportDays && formik.errors.reportDays)?formik.errors.reportDays:''}</span>
                  </div>
                  
              </div>
              <div className="row mb-3" >
              <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Charge Category<small className="req text-danger">*</small></div>
                      <select id="input"className="form-control"value={formik.values.chargeCategory}  onChange={(e)=>{fetchbychargeCat(e.target.value)}}>
                          <option value=''>Select</option>
                         {
                             chargecat.map(item=><option value={item.chargeCategory}>{item.chargeCategory}</option>)
                         }
                        </select>  
                        <span className='text-danger'>{(formik.touched.chargeCategory && formik.errors.chargeCategory)?formik.errors.chargeCategory:''}</span>
                  </div>
                  
                  <div className="form-group col-md-3 text-bold">
                      <div classname='text-bold'>Code <small className="req text-danger">*</small></div>
                      <select id="input"className="form-control" value={formik.values.code} onChange={(e)=>{
                          formik.setFieldValue('standardCharge',e.target.selectedOptions[0].getAttribute('data-value')||0)
                          formik.setFieldValue('code',e.target.value)}}>
                          <option value=''>Select</option>
                         {
                             code.map(item=><option data-value={item.standardCharge} value={item.code}>{item.code}</option>)
                         }
                        </select>
                        <span className='text-danger'>{(formik.touched.code && formik.errors.code)?formik.errors.code:''}</span>
                  </div>
                  
                  <div className="form-group col-md-3 text-bold ">
                      <div classname='text-bold'>Standard Charge ($)<small className="req text-danger">*</small></div>
                      <input type="text" class="form-control" readOnly value={formik.values.standardCharge}  onChange={(e)=>formik.setFieldValue('standardCharge',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.standardCharge && formik.errors.standardCharge)?formik.errors.standardCharge:''}</span>
                  </div>
                  
                  <div className="form-group col-md-3 text-bold" style={{opacity:0}}>
                      <div classname='text-bold'>Test Name</div>
                      <input type="text" class="form-control" value={formik.values.testName} onChange={(e)=>formik.setFieldValue('testName',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.testName && formik.errors.testName)?formik.errors.testName:''}</span>
                  </div>
                  
              </div>
              <div className="">
                      <button type="submit"className="btn btn-block btn-primary">Save</button>
                  </div>
                  </form>
         </div>
     </div>
     </div>
     </div>
     </div>
    )
}