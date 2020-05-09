import React, { useState, useCallback } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik ,FieldArray} from 'formik';
import * as Yup from 'yup'
import { Getdata, Postdata, PostFormdata } from '../../Network/Server';
export default (props) =>{
    const [pharmacyIds,setMedicineNames]=React.useState({})
    const getpharmacyId=React.useCallback((id,index)=>{ 
        Getdata('pharmacy/getbycategoryId/'+id).then(data=>setMedicineNames({...pharmacyIds,[index]:data}))
       // console.log(pharmacyIds[index])
          })
    
const schema=Yup.object().shape({
    supplierId:Yup.string().required(),
   // billNo:Yup.string().required(),
    date:Yup.date().required(),
    //doctor:Yup.string().required(),
   // hospitalDocter:Yup.string().required(),
    note:Yup.string().required(),
    medicine:Yup.array().of(Yup.object().shape({
    medicineCategory:Yup.string().required('required'),
    pharmacyId:Yup.string().required('required'),
    batchNum:Yup.number().required('required'),
    expiryDate:Yup.string().required('required'),
    mrp:Yup.number().required('required'),
    batchamt:Yup.number().required('required'),
    quantity:Yup.number().required('required'),
    packingqty:Yup.number().required('required'),
    purchasePrice:Yup.number().required('required'),
    saleprice:Yup.number().required('required'),
    amount:Yup.number().required('required'),
    })),discount:Yup.number().required('required'),
    tax:Yup.number().required('required'),
    netamount:Yup.number().required('required'),
    //attachDocument:'',
    total:Yup.number().required('required')
 })

   return(
    <Formik enableReinitialize={true} initialValues={
        
            (props.data)?{medicine:[props.data]}:
            {medicine:[{

                medicineCategoryId:'',
                medicineCategory:'',
                medicineName:'',
                pharmacyId:'',
                batchNum:'',
                expiryDate:'',
                mrp:'',
                batchamt:'',
                inwardDate:new Date(),
                quantity:0,
                packingqty:0,
                availableQuantity:0,
                purchasePrice:0,
                saleprice:0,
                amount:0,
            }],
           
        }

        }
       // validationSchema={schema}
        onSubmit={(values)=>{console.log(values);
            
            Postdata('medicineBatchDetails/add','POST',values.medicine).then(data=>{
                if(data.status==1){
                    //resetForm()
                    console.log(data)
                }
            })
        }
        }           > 
        {({values,handleChange,setFieldValue,handleSubmit,errors,touched,getFieldProps})=>(   
        <div class="modal fade" id="editpurchasemedicine" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">
        <div className="card ">
        <div class=" card-header bg-primary p-0 align-items-center border-0">
        <button type="button" class="close mx-4" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
        
         <div className='d-flex justify-content-between p-0'>   
         <div className='form-inline ml-2'>
       
        <span className='text-danger'>{touched.supplierId ?errors.supplierId:''}</span>
            </div>
            <div className='form-inline'>
                        <label class=" ml-auto " for="inlineFormCheck">Purchase Date</label>
        <div className="m-2">
         </div> 
         </div>
         </div>
        
        </div>
        <div className="card-body p-0 m-0 bg-light  ">
         <div className="container-fluid ">
         <FieldArray name='medicine'>{arrayhelper=>(
             <table id="myTable" class="table table-responsive">
                 <thead>
                      <tr>
                         <td>Medicine category</td>
                         <td >Medicine Name </td>
                         <td>Batch No</td>
                         <td>Expiry Date</td>
                         <td>MRP($)</td>
                         <td>Batch Amt</td>
                         <td>Sale Price($) </td>
                         <td>Packing Qty</td>
                         <td>Quantity</td>
                         <td>Purchase Price($)</td>
                         <td>Amount</td>
                                      </tr>
                 </thead>
                 <tbody className="border-bottom">
                     {
                         values.medicine.map((item,index)=> <tr>
                         <td className=" " >
                            <select id="input" name='medicineCategory' 
                            value={values.medicine[index].medicineCategoryId+','+values.medicine[index].medicineCategory} 
                            onChange={(e)=>{
                                var data=e.target.value.split(',')
                                setFieldValue(`medicine.${index}.medicineCategoryId`,data[0]);
                                setFieldValue(`medicine.${index}.medicineCategory`,data[1]);

                                getpharmacyId(data[0],index);
                        }} className="form-control">
                            <option value=','>Select</option>
                            {
                             props.medicineCategory?props.medicineCategory.map((data)=><option value={data.id+','+data.medicineCategory}>{data.medicineCategory}</option>)
                             :''
                            }
                            </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].medicineCategoryId:'':''}</span>     
                       
                         </td>
                         <td className="">
                            <select id="input" name='pharmacyId' 
                            value={values.medicine[index].pharmacyId+','+values.medicine[index].medicineName} 
                            onChange={(e)=>{
                                var data=e.target.value.split(',')
                                setFieldValue(`medicine.${index}.pharmacyId`,data[0]);
                                setFieldValue(`medicine.${index}.medicineName`,data[1]);

                               // getpharmacyId(data[0],index);
                        }}
                            className='form-control'>
                            <option value=''>Select</option>
                            {   
                             pharmacyIds[index]?pharmacyIds[index].map((data)=><option value={data[0]+','+data[1]}>{data[1]}</option>)
                             :''
                            }
                            </select>
                        <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].pharmacyId:'':''}</span>     
                       
                         </td>
                         <td className="">
                            <input id="input" name='batchNum' className="form-control " value={values.medicine[index].batchNum} onChange={(e)=>setFieldValue(`medicine.${index}.batchNum`,e.target.value)}/>              
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].batchNum:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <DatePicker  className="form-control"  selected={values.medicine[index].expiryDate} onChange={(e)=>setFieldValue(`medicine.${index}.expiryDate`,e)} dateFormat='MMM/yyyy'/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].expiryDate:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='MRP'  className="form-control"  value={values.medicine[index].mrp} onChange={(e)=>setFieldValue(`medicine.${index}.mrp`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].mrp:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='batchamt'  className="form-control"  value={values.medicine[index].batchamt} onChange={(e)=>setFieldValue(`medicine.${index}.batchamt`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].batchamt:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='saleprice' className="form-control"  value={values.medicine[index].saleprice} onChange={(e)=>setFieldValue(`medicine.${index}.saleprice`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].saleprice:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='pckqty' className="form-control" value={values.medicine[index].packingqty} onChange={(e)=>setFieldValue(`medicine.${index}.packingqty`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].packingqty:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='quantity' className="form-control" 
                         value={values.medicine[index].quantity} 
                         onChange={(e)=>{setFieldValue(`medicine.${index}.quantity`,e.target.value);
                         setFieldValue(`medicine.${index}.availableQuantity`,e.target.value);
                         
                         setFieldValue(`medicine.${index}.amount`, new Number(e.target.value) *new Number(values.medicine[index].purchasePrice))
                      
                       }}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].quantity:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='purchaseprice' className="form-control" 
                          value={values.medicine[index].purchasePrice} 
                          onChange={(e)=>{setFieldValue(`medicine.${index}.purchasePrice`,e.target.value);
                        
                          setFieldValue(`medicine.${index}.amount`, new Number(e.target.value) * new Number(values.medicine[index].quantity))
                          }}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].purchasePrice:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='amount' className="form-control" 
                         value={values.medicine[index].amount} 
                         onChange={(e)=>setFieldValue(`medicine.${index}.amount`,e.target.value)} 
                         readOnly/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].amount:'':''}</span>     
                       
                         </td>
                         <td>
                             <button value={item} onClick={()=>arrayhelper.remove(index)}><i class="fas fa-minus-circle text-danger"></i></button>
                         </td>


                     </tr>
                    
                    )
                     }
                 </tbody>
                 </table>
         )}</FieldArray>
         </div>
         <div className="row ">
             <div className="col-sm-6">
                <div className="d-flex float-right p-2">
             
                <button onClick={()=>{
handleSubmit()
                }} class="btn btn-outline-primary">Save</button>
                </div>
               </div>
</div>
</div>
</div>
    </div>
    </div>
    </div>
    
    )} 
      </Formik>
   )
}