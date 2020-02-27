import React from 'react'
import {useFormik} from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
export default ()=>{
    const formik = useFormik({
        initialValues:{
            testName:'',
            shortName:'',
            testType:'',
            categoryName:'',
            unit:'',
            subCategory:'',
            reportDays:'',
            method:'',
            chargeCategory:'',
            code:'',
            standardCharge:''
        },
        onSubmit:values=>{alert(JSON.stringify(values,null,2))
          Postdata('pathology/','POST',values).then(data=>console.log(data))},
          validationSchema:Yup.object().shape({
            testName:Yup.string().required(),
            shortName:Yup.string().required(),
            testType:Yup.string().required(),
            categoryName:Yup.string().required(),
            unit:Yup.number().required(),
            subCategory:Yup.string().required(),
            reportDays:Yup.number().required(),
            method:Yup.string().required(),
            chargeCategory:Yup.string().required(),
            code:Yup.string().required(),
            standardCharge:Yup.string().required()
  
          })
      })

    return(
        <div class="modal fade" id="AddPathologyTest" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div class="card ">
            <div class="card-header bg-primary"> Add Test Details
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
           <div class="card-body">
               <form onSubmit={formik.handleSubmit}>
               <div className="d-flex justify-content-between border bg-light">
                  <div className="form-group p-2">
                      <div>Test Name <small className="req text-danger">*</small></div>
                      <input type="text" class="form-control" value={formik.values.testName} onChange={(e)=>formik.setFieldValue('testName',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.testName && formik.errors.testName)?formik.errors.testName:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Short Name <small className="req text-danger">*</small></div>
                      <input type="text" class="form-control" value={formik.values.shortName} onChange={(e)=>formik.setFieldValue('shortName',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.shortName && formik.errors.shortName)?formik.errors.shortName:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Test type<small className="req text-danger">*</small></div>
                      <input type="text" class="form-control" value={formik.values.testType} onChange={(e)=>formik.setFieldValue('testType',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.testType && formik.errors.testType)?formik.errors.testType:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Category Name<small className="req text-danger">*</small></div>
                      <select id="input"className="form-control" value={formik.values.categoryName}  onChange={(e)=>formik.setFieldValue('categoryName',e.target.value)}>
                          <option selected>Select</option>
                          <option>Clinical Microbiology</option>
                          <option>Clinical Chemistry</option>
                          <option>Hemotology</option>
                          <option>Molecular Diagnostics</option>
                        </select>  
                        <span className='text-danger'>{(formik.touched.categoryName && formik.errors.categoryName)?formik.errors.categoryName:''}</span>
                  </div>
                  
              </div>
              <div className="d-flex justify-content-between border mt-4 bg-light">
                  <div className="form-group p-2">
                      <div>Unit</div>
                      <input type="text" class="form-control" value={formik.values.unit} onChange={(e)=>formik.setFieldValue('unit',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.unit && formik.errors.unit)?formik.errors.unit:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Sub Category</div>
                      <input type="text" class="form-control" value={formik.values.subCategory}  onChange={(e)=>formik.setFieldValue('subCategory',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.subCategory && formik.errors.subCategory)?formik.errors.subCategory:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Method</div>
                      <input type="text" class="form-control" value={formik.values.method} onChange={(e)=>formik.setFieldValue('method',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.method && formik.errors.method)?formik.errors.method:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Report Days</div>
                      <input type="text" class="form-control" value={formik.values.reportDays}  onChange={(e)=>formik.setFieldValue('reportDays',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.reportDays && formik.errors.reportDays)?formik.errors.reportDays:''}</span>
                  </div>
                  
              </div>
              <div className="d-flex justify-content-between border mt-4 bg-light" >
              <div className="form-group p-2">
                      <div>Charge Category<small className="req text-danger">*</small></div>
                      <select id="input"className="form-control"value={formik.values.chargeCategory}  onChange={(e)=>formik.setFieldValue('chargeCategory',e.target.value)}>
                          <option selected>Select</option>
                          <option>Clinical Microbiology</option>
                          <option>Clinical Chemistry</option>
                          <option>Hemotology</option>
                          <option>Molecular Diagnostics</option>
                        </select>  
                        <span className='text-danger'>{(formik.touched.chargeCategory && formik.errors.chargeCategory)?formik.errors.chargeCategory:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Code <small className="req text-danger">*</small></div>
                      <select id="input"className="form-control" value={formik.values.code} onChange={(e)=>formik.setFieldValue('code',e.target.value)}>
                          <option selected>Select</option>
                          <option>Clinical Microbiology</option>
                          <option>Clinical Chemistry</option>
                          <option>Hemotology</option>
                          <option>Molecular Diagnostics</option>
                        </select>
                        <span className='text-danger'>{(formik.touched.code && formik.errors.code)?formik.errors.code:''}</span>
                  </div>
                  
                  <div className="form-group p-2 ">
                      <div>Standard Charge ($)<small className="req text-danger">*</small></div>
                      <input type="text" class="form-control" value={formik.values.standardCharge}  onChange={(e)=>formik.setFieldValue('standardCharge',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.standardCharge && formik.errors.standardCharge)?formik.errors.standardCharge:''}</span>
                  </div>
                  
                  <div className="form-group p-2" style={{opacity:0}}>
                      <div>Test Name</div>
                      <input type="text" class="form-control" value={formik.values.testName} onChange={(e)=>formik.setFieldValue('testName',e.target.value)}/>
                      <span className='text-danger'>{(formik.touched.testName && formik.errors.testName)?formik.errors.testName:''}</span>
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