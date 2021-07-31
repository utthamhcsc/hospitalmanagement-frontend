import React from 'react'
import {useFormik} from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
 import {toast} from 'react-toastify'
import ReactDatePicker from 'react-datepicker';
export default (props)=>{
    const formik = useFormik({
       enableReinitialize:true,
        initialValues:{
            donateDate:'',
            lot:'',
            bagNo:'',
            quantity:'',
            institution:'',
            donareId:props.data.id,
            bloodGroup:props.data.bloodGroup
           
            
        },
        onSubmit:values=>{console.log(JSON.stringify(values,null,2))
          Postdata('donateblood/add','POST',values).then(data=>toast.success('successfully added', {
      position: toast.POSITION.TOP_CENTER
    }))
window.$('#adddonorblood').modal('hide');
},
          validationSchema:Yup.object().shape({
            donateDate:Yup.string().required('Required'),
            bagNo:Yup.string().required('Required'),
            quantity:Yup.string().required('Required'),
            
          })
      })

    return(
        <div class="modal fade" id="adddonorblood" >
        <div class="modal-dialog modal-lg" role="document">
         <div class="modal-content" role="document">

        <div class="card ">
            <div class="modal-header "> <h5> Donor Blood Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
           <div class="card-body ">
               <form onSubmit={formik.handleSubmit}>
               <div className="d-flex justify-content-between border bg-light">
                  
                  <div className="form-group p-2">
                      <div>Donor Date <small className="req text-danger">*</small></div>
                      <ReactDatePicker minDate={new Date()} className='form-control' 
                      selected={new Date(formik.values.donateDate)=='Invalid Date'?'':new Date(formik.values.donateDate)}
                      onChange={(e)=>formik.setFieldValue('donateDate',e)}/>
                      <span className='text-danger'>{(formik.touched.donateDate && formik.errors.donateDate)?formik.errors.donateDate:''}</span>
                  </div>
                  
                  <div className="form-group p-2">
                      <div>Lot <small className="req text-danger">*</small></div>
                      
                      <input type="text" class="form-control"  value={formik.values.lot} onChange={(e)=>formik.setFieldValue('lot',e.target.value)}/>
                     
                      
                      <span className='text-danger'>{(formik.touched.lot && formik.errors.lot)?formik.errors.lot:''}</span>
                  
                  </div>
                  <div className="form-group p-2">
                      <div>Bag No <small className="req text-danger">*</small></div>
                      
                      <input type="text" class="form-control"  value={formik.values.bagNo} onChange={(e)=>formik.setFieldValue('bagNo',e.target.value)}/>
                     
                      
                      <span className='text-danger'>{(formik.touched.bagNo && formik.errors.bagNo)?formik.errors.bagNo:''}</span>
                  
                  </div>
                  <div className="form-group p-2">
                      <div>Quantity(in ml) <small className="req text-danger">*</small></div>
                      
                      <input type="number" class="form-control"  value={formik.values.quantity} onChange={(e)=>formik.setFieldValue('quantity',e.target.value)}/>
                     
                      
                      <span className='text-danger'>{(formik.touched.quantity && formik.errors.quantity)?formik.errors.quantity:''}</span>
                  
                  </div>
                  
                  
                  
                
                  
                  
                  
                  
                  
              </div>
              <div className=" border form-row mt-4 bg-light">
                 
<div className="col-12">
                        <div className="form-group p-2">
                      <div>Instruction</div>
                      <textarea className="form-control" rows="5"
                      {...formik.getFieldProps('institution')}
                      ></textarea>
                      <span className='text-danger'>{(formik.touched.reportDays && formik.errors.reportDays)?formik.errors.reportDays:''}</span>
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