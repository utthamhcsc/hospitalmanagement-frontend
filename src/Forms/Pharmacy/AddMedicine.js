import React from 'react'
import {useFormik} from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
 import {toast} from 'react-toastify'
export default ()=>{
    const formik = useFormik({
         initialValues:
        {
            medicineName:'',
            medicineCategory:'',
            medicineCompany:'',
            medicineComposition:'',
            medicineGroup:'',
            unit:'',
            minLevel:'',
            reOrderLevel:'',
            vat:'',
            packing:'',
            note:'',
            medicinePhoto:'',
            vatAc:''
       },
        onSubmit:values=>{console.log(JSON.stringify(values,null,2))
          PostFormdata('medician/','POST',values).then(data=>toast.success('successfully added', {
      position: toast.POSITION.TOP_CENTER
    }))},
          validationSchema:Yup.object().shape({
            medicineName:Yup.string().required('required'),
            medicineCategory:Yup.string().required('required'),
            medicineCompany:Yup.string().required('required'),
            medicineComposition:Yup.string().required('required'),
            medicineGroup:Yup.string().required('required'),
            unit:Yup.number('must be number only').required('required'),
            minLevel:Yup.number('must be number only').required('required'),
            reOrderLevel:Yup.number('must be number only').required('required'),
            vat:Yup.string().required('required'),
            packing:Yup.string().required('required'),
            note:Yup.string().required('required'),
           // medicinePhoto:Yup.string().required(),
            vatAc:Yup.string().required('required')
          })
      })
    
    return(
        <div class="modal fade" id="addmedicine" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div class="card ">
           <h5 class="card-header bg-primary ">
               <span className="mx-4">Add Medicine Details</span>
           <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </h5>
         <div class="card-body ">
             <form onSubmit={formik.handleSubmit}>
              <div className="d-flex justify-content-between border bg-light m-2 p-2">
                <div className="form-group  ">
                 <label for="ExampleInputMedicineName">Medicine Name</label>
                 <input type="text" name="" className="form-control" value={formik.values.medicineName}  onChange={(e)=>formik.setFieldValue('medicineName',e.target.value)} />
                 <span class="text-danger">{formik.touched.medicineName?formik.errors.medicineName:''}</span>
                </div>
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Category</label><small className="req ml-2 text-danger">*</small>
                     <select id="input" className="form-control" value={formik.values.medicineCategory} onChange={(e)=>formik.setFieldValue('medicineCategory',e.target.value)} >
                     <option selected>Select</option>
                     <option>Syrup</option>
                     <option>Capsule</option>
                     <option>Injectio</option>
                     <option>Ointment</option>
                     <option>Cream</option>
                     <option>Surgicals</option>
                     <option>Drops</option>
                     <option>Inhalers</option>
                     <option>Implants/Patches</option>
                     <option>Liquids</option>
                     <option>Preparations</option>
                     <option>Diaper</option>
                     <option>Tablets</option>
                 </select>
                 <span class="text-danger">{formik.touched.medicineCategory?formik.errors.medicineCategory:''}</span>
                 </div>
                 
                 <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Company</label>
                 <input type="text" className="form-control" value={formik.values.medicineCompany} onChange={(e)=>formik.setFieldValue('medicineCompany',e.target.value)} />
                 <span class="text-danger">{formik.touched.medicineCompany?formik.errors.medicineCompany:''}</span>
                </div>
                
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Composition</label>
                 <input type="text" name="" className="form-control" value={formik.values.medicineComposition}  onChange={(e)=>formik.setFieldValue('medicineComposition',e.target.value)} />
                 <span class="text-danger">{formik.touched.medicineComposition?formik.errors.medicineComposition:''}</span>
                </div>
                
             </div>
             <div className="d-flex justify-content-between  border bg-light m-2 p-2">
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Group</label><small className="req ml-2 text-danger">*</small>
                 <input type="text" name="" className="form-control" value={formik.values.medicineGroup}  onChange={(e)=>formik.setFieldValue('medicineGroup',e.target.value)} />
                 <span class="text-danger">{formik.touched.medicineGroup?formik.errors.medicineGroup:''}</span>
                 </div>
                 
                 <div className="form-group">
                 <label for="ExampleInputMedicineName">Unit</label>
                 <input type="text" className="form-control" value={formik.values.unit} onChange={(e)=>formik.setFieldValue('unit',e.target.value)} />
                 <span class="text-danger">{formik.touched.unit?formik.errors.unit:''}</span>
                </div>
                
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Min Level</label>
                 <input type="text" name="" className="form-control" value={formik.values.minLevel}  onChange={(e)=>formik.setFieldValue('minLevel',e.target.value)}/>
                 <span class="text-danger">{formik.touched.minLevel?formik.errors.minLevel:''}</span>
                </div>
                
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Re-Order Level</label><small className="req ml-2 text-danger">*</small>
                 <input type="text" name="" className="form-control" value={formik.values.reOrderLevel}  onChange={(e)=>formik.setFieldValue('reOrderLevel',e.target.value)} />
                 <span class="text-danger">{formik.touched.reOrderLevel?formik.errors.reOrderLevel:''}</span>
                 </div>
                 
             </div>
             <div className="d-flex justify-content-between  border bg-light m-2 p-2">
               <div className="form-group">
                 <label for="ExampleInputMedicineName">Vat (%)</label>
                 <input type="text" className="form-control" value={formik.values.vat} onChange={(e)=>formik.setFieldValue('vat',e.target.value)}/>
                 <span class="text-danger">{formik.touched.vat?formik.errors.vat:''}</span>
                </div>
                
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Unit / Packing</label>
                 <input type="text" name="" className="form-control" value={formik.values.unit} onChange={(e)=>formik.setFieldValue('packing',e.target.value)}/>
                 <span class="text-danger">{formik.touched.packing?formik.errors.packing:''}</span>
                </div>
                
                <div className="form-group ml-4">
                 <label for="ExampleInputMedicineName">Vat A/C</label><small className="req ml-2 text-danger">*</small>
                     <input type="text" name="" className="form-control" value={formik.values.vatAc} onChange={(e)=>formik.setFieldValue('vatAc',e.target.value)}/>
                     <span class="text-danger">{formik.touched.vatAc?formik.errors.vatAc:''}</span>
                 </div>
                 
                 <div className="form-group ml-4">
                 <label for="ExampleInputMedicineName">Medicine Photo</label>
                 <div>
                 <input type="file" className=" " placeholder="( JPG | JPEG | PNG )" onChange={(e)=>formik.setFieldValue('medicinePhoto',e.target.files[0])}/>
                 <span class="text-danger">{formik.touched.medicinePhoto?formik.errors.medicinePhoto:''}</span>
                 </div>
                </div>
                
             </div>
             <div className="d-flex justify-content-between">
               
                
                 
             </div>
             <div className="d-flex dodda beku border bg-light m-2 p-4 ">

             <div className="col-md-12">
                 <label for="note">Note</label>
                 <textarea className="form-control" rows="3" value={formik.values.note} onChange={(e)=>formik.setFieldValue('note',e.target.value)}></textarea>
                 <span class="text-danger">{formik.touched.note?formik.errors.note:''}</span>
             </div>
            
             </div>
             <div className="d-flex float-right">
             <button type="submit" className="btn btn-sm  bg-primary ">Save</button>
             </div>
             </form>
          </div>
          
        </div>
    
        </div>
        </div>
        </div>
        
    )
}