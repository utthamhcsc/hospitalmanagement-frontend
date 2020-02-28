import React from 'react'
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
import {toast} from 'react-toastify'
export default ()=>{
    const formik = useFormik({
        initialValues:{
            testName:'',
            shortName:'',
            testType:'',
            categoryName:'',
            subCategory:'',
            reportDays:'',
            chargeCategory:'',
            code:'',
            standardCharge:''
        },
        onSubmit:values=>{console.log(JSON.stringify(values,null,2))
          Postdata('rediology/','POST',values).then(data=>toast.success('successfully added', {
      position: toast.POSITION.TOP_CENTER
    }))},
          validationSchema:Yup.object().shape({
            testName:Yup.string().required('required'),
            shortName:Yup.string().required('required'),
            testType:Yup.string().required('required'),
            categoryName:Yup.string().required('required'),
            subCategory:Yup.string().required('required'),
            reportDays:Yup.number().required('required'),
            chargeCategory:Yup.string().required('required'),
            code:Yup.string().required('required'),
            standardCharge:Yup.string().required('required')
          })
      })

    return(
        <div class="modal fade" id="AddRadiologyTest" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">
        <div className="card ">
            <div className="card-header bg-primary">Add Test Details
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
            <div class="card-body ">
            <form onSubmit={formik.handleSubmit}>
                <div className="d-flex justify-content-between border bg-light p-2">
                  <div className="form-group">
                    <div>Test Name <small className="req text-danger">*</small>
                      <input type="text"className="form-control" value={formik.values.testName} onChange={(e)=>formik.setFieldValue('testName',e.target.value)}/>
                    </div>
                    <span class="text-danger">{formik.touched.testName?formik.errors.testName:''}</span>
                  </div>
                  <div className="form-group">
                    <div>Short Name <small className="req text-danger">*</small>
                      <input type="text"className="form-control" value={formik.values.shortName} onChange={(e)=>formik.setFieldValue('shortName',e.target.value)}/>
                     </div>
                     <span class="text-danger">{formik.touched.shortName?formik.errors.shortName:''}</span>
                   </div>
                        <div className="form-group">
                            <div>Test Type<small className="req text-danger">*</small>
                            <input type="text"className="form-control" value={formik.values.testType}  onChange={(e)=>formik.setFieldValue('testType',e.target.value)}/>
                            </div>
                            <span class="text-danger">{formik.touched.testType?formik.errors.testType:''}</span>
                        </div>
                        <div className="form-group">
                            <div>Category Name <small className="req text-danger">*</small>
                            <select id="input"className="form-control" value={formik.values.categoryName} onChange={(e)=>formik.setFieldValue('categoryName',e.target.value)}>
                          <option selected>Select</option>
                          <option>X-Ray</option>
                          <option>Sonography</option>
                          <option>CT-Scan</option>
                          <option>Molecular Diagnostics</option>
                          <option>MRI</option>
                          <option>ECG</option>
                        </select>                            
                        </div>
                        <span class="text-danger">{formik.touched.categoryName?formik.errors.categoryName:''}</span>
                        </div>
                 </div>
                 <div className="d-flex justify-content-between border p-2 bg-light mt-4">
                    
                    <div className="form-group">
                        <div>Sub Category <small className="req text-danger">*</small>
                        <input type="text"className="form-control" value={formik.values.subCategory} onChange={(e)=>formik.setFieldValue('subCategory',e.target.value)}/>
                        </div>
                        <span class="text-danger">{formik.touched.subCategory?formik.errors.subCategory:''}</span>
                    </div>
                    <div className="form-group">
                        <div>Report Days <small className="req text-danger">*</small>
                        <input type="text"className="form-control" value={formik.values.reportDays} onChange={(e)=>formik.setFieldValue('reportDays',e.target.value)}/>
                        </div>
                        <span class="text-danger">{formik.touched.reportDays?formik.errors.reportDays:''}</span>
                    </div>
                    <div className="form-group">
                        <div>Charge Category<small className="req text-danger">*</small>
                        <select id="input"className="form-control" value={formik.values.chargeCategory} onChange={(e)=>formik.setFieldValue('chargeCategory',e.target.value)}>
                          <option selected>Select</option>
                          <option>Clinical Microbiology</option>
                          <option>Clinical Chemistry</option>
                          <option>Hemotology</option>
                          <option>Molecular Diagnostics</option>
                        </select> 
                        </div>
                        <span class="text-danger">{formik.touched.chargeCategory?formik.errors.chargeCategory:''}</span>
                    </div>
                    <div className="form-group">
                        <div>Code <small className="req text-danger">*</small>
                        <select id="input"className="form-control" value={formik.values.code} onChange={(e)=>formik.setFieldValue('code',e.target.value)}>
                      <option selected>Select</option>
                      <option>Clinical Microbiology</option>
                      <option>Clinical Chemistry</option>
                      <option>Hemotology</option>
                      <option>Molecular Diagnostics</option>
                   </select> 
                                          
                    </div>
                    <span class="text-danger">{formik.touched.code?formik.errors.code:''}</span>
                    </div>
                    <div className="form-group">
                        <div>Standard Charge($)<small className="req text-danger">*</small>
                        <input type="number"className="form-control" value={formik.values.standardCharge} onChange={(e)=>formik.setFieldValue('standardCharge',e.target.value)}/>
                        </div>
                        <span class="text-danger">{formik.touched.standardCharge?formik.errors.standardCharge:''}</span>
                    </div>   
             </div>
             <div className="d-flex float-right">
             <button type="submit"className="form-control bg-primary mt-4">Save</button>
            </div>
            </form>
            </div>
        </div>
        </div>
            </div>
            </div>
        
    
    )
}