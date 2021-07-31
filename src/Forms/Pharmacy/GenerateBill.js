import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik, FieldArray, Formik } from 'formik';
import * as Yup from 'yup';
import { Getdata, Postdata } from '../../Network/Server';
export default (props) =>{
   const [pharmacyIds,setMedicineNames]=React.useState({})
   const [batch,setBatch]=React.useState({})
   const [batchDetails,setBatchDetails]=React.useState({})
   const getpharmacyId=React.useCallback((id,index)=>{ 
       Getdata('pharmacy/getbycategoryId/'+id).then(data=>setMedicineNames({...pharmacyIds,[index]:data}))
         })
         const getBatchId=React.useCallback((id,index)=>{ 
            Getdata('medicineBatchDetails/getbypharmacyId/'+id).then(data=>setBatch({...batch,[index]:data}))
              })
              
         const getbybathnum=React.useCallback((id,index)=>{ 
            return Getdata('medicineBatchDetails/getbybathnum/'+id)
            // setBatchDetails({...batch,[index]:data})
               })
              
  

const myvalidation=Yup.object().shape({
           patientId:Yup.string().required(),
         //  billNo:'',
        //   date:Yup.date().required(),
           doctor:Yup.string().required(),
           //doctorName:Yup.string().required(),
           note:Yup.string().required(),
           discount:Yup.number().required(),
           tax:Yup.number().required(),
           netamount:Yup.number().required(),
           medicine:Yup.array().of(Yup.object().shape({
           medicineCategoryId:Yup.string().required('medicine category required'),
           pharmacyId:Yup.string().required('medicine name required'),
           batchNum:Yup.string().required('required'),
           expiryDate:Yup.string().required('required'),
           quantity:Yup.number().required('required'),
           saleprice:Yup.number().required('required'),
           amount:Yup.number().required('required'),

       })
   ),
    
})


return(
<>
        <div class="modal fade" id="generateBill" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div className="card ">
        <Formik initialValues={{
           patientId:'',
           billNo:'',
           date:new Date(),
           doctor:'',
           doctorName:'',
           note:'',
           medicine:[{
            medicineBatch:'',
           medicineCategoryId:'',
           medicineCategory:'',
           medicineName:'',
           pharmacyId:'',
           batchNum:'',
           expiryDate:'',
           availableQuantity:'',
           quantity:0,
           saleprice:0,
           amount:0,
           }],
           total:0,
           discount:0,
          tax:0,
          netAmount:0
   }}
  // validationSchema={myvalidation}
   onSubmit={(values)=>
   {Postdata('pharmacyBillBasic/add','POST',values).then(data=>{
if(data.status==1){
   window.location.reload();
}
   })
   console.log(values)
   }}>{({values,handleChange,setFieldValue,handleSubmit,errors,touched})=>(<>
        <div class=" card-header form-inline  p-2  border-0">
        
         <div className='form-group'>   
        <select id="input" class="form-control"  onChange={(e)=>{
           var data=e.target.value.split(",");
           setFieldValue('patientId',data[0]);
      setFieldValue('patientName',data[1]);
      }}>
        <option value=''>Select Patient</option>
        {
           props.patient?props.patient.map(data=><option key={data.userId} value={data.userId+','+data.name}>{data.name}</option>):''
        }
        </select>
        <span className='text-danger'>{touched.patientId?errors.patientId:''}</span>   
        </div>
        <div className='form-group'>
        <button class=" form-control ml-2" data-toggle='modal' data-target='#addnewpatient'><i class="fas fa-plus "></i>New Patient</button>
          </div>  
       
       <div className='form-group ml-auto'>
       <label class="" for="inlineFormCheck"> Date</label>
       <div className="mx-2">
         <DatePicker className="form-control" selected={new Date(values.date)=='Invalid Date'?'':new Date(values.date)} onChange={(e)=>setFieldValue('date',e)}/>
        </div> 
       </div>
       <button type="button" class="close mx-1" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>  
       </div>
       <div className="card-body p-0 m-0 bg-light  ">
         <div className="container-fluid ">
             <FieldArray name='medicine'>{arrayhelper=>(<>
             <table id="myTable" className="table  table-responsive">
                 <thead>
                     
                      <tr>
                         <td>Medicine category</td>
                         <td >Medicine Name </td>
                         <td>Batch No</td>
                         <td>Expiry Date</td>
                         <td>quantity|Availability</td>
                         <td>Sale Price($) </td>
                         <td>Amount($)</td>
                         <td>
                         <button onClick={()=>arrayhelper.push(
                             {
                              medicineBatch:'',
                              medicineCategoryId:'',
                              medicineCategory:'',
                              medicineName:'',
                              pharmacyId:'',
                              batchNum:'',
                              expiryDate:'',
                              availableQuantity:'',
                              quantity:0,
                              saleprice:0,
                              amount:0,
                              }
                         )}><i class="fas fa-plus text-primary border-0"></i></button></td>
                     </tr>
                 </thead>
                 <tbody className="border-bottom">
                     {values.medicine && values.medicine.length>0?
                     values.medicine.map((item,index)=>
                     <tr>
                         <td className=" " >
                            <select id="input"
                             name={`medicine.${index}.medicineCategoryId`} 
                             value={values.medicine[index].medicineCategoryId+','+values.medicine[index].medicineCategory}
                             onChange={(e)=>{ 
                             var data=e.target.value.split(",")
                           setFieldValue(`medicine.${index}.medicineCategoryId`,data[0])
                           setFieldValue(`medicine.${index}.medicineCategory`,data[1])
                           
                             getpharmacyId(data[0],index);}}  className="form-control" >
                            <option value=''>Select</option>
                            {
                             props.medicineCategory?props.medicineCategory.map((data)=><option value={data.id+','+data.medicineCategory}>{data.medicineCategory}</option>)
                             :''
                            } </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].medicineCategoryId:'':''}</span>     
                         </td>
                         <td className="">
                            <select id="input" 
                            name={`medicine.${index}.pharmacyId`} 
                            value={values.medicine[index].pharmacyId+','+values.medicine[index].medicineName} 
                            onChange={(e)=>{
                               var data=e.target.value.split(",")
                               setFieldValue(`medicine.${index}.pharmacyId`,data[0]); 
                               setFieldValue(`medicine.${index}.medicineName`,data[1]);
                            getBatchId(data[0],index);
                            }} class="form-control">
                                 <option value=''>Select</option>
                            {   
                             pharmacyIds[index]?pharmacyIds[index].map((data)=><option value={data[0]+','+data[1]}>{data[1]}</option>)
                             :''
                            }  </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].pharmacyId:'':''}</span>     
                          </td>
                         <td className="">
                            <select id="input" name={`medicine.${index}.batchNum`} 
                            value={values.medicine[index].batchNum} 
                            onChange={(e)=>{handleChange(e); 
                            getbybathnum(e.target.value,index).then(data=>{
                               console.log(data)
                               setFieldValue(`medicine.${index}.medicineBatch`,data.id)
                               setFieldValue(`medicine.${index}.expiryDate`,data.expiryDate)
                               setFieldValue(`medicine.${index}.availableQuantity`,data.availableQuantity)
                               setFieldValue(`medicine.${index}.saleprice`,data.saleprice)
                            })}} className="form-control " >
                               <option value=''>Select</option>
                            {   
                             batch[index]?batch[index].map((data)=><option value={data[0]}>{data[1]}</option>)
                             :''
                            }
      </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].batchNum:'':''}</span>     
                         </td>
                         <td className="">
                           
                         <input type="text" name={`medicine.${index}.expiryDate`} 
                         readOnly
                         value={new Date(values.medicine[index].expiryDate).getMonth()+'/'+new Date(values.medicine[index].expiryDate).getFullYear()} 
                         className="form-control" />
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].expiryDate:'':''}</span>     
                         
                         </td>
                         <td className="">
                            <div className='input-group'>
                         <input type="text" name={`medicine.${index}.quantity`} 
                         value={values.medicine[index].quantity} 
                         onChange={(e)=>{setFieldValue(`medicine.${index}.quantity`,e.target.value);
                           setFieldValue(`medicine.${index}.amount`, new Number(e.target.value) * new Number(values.medicine[index].saleprice))
                        
                        }}
                          className="form-control" />
                          <div className='input-group-append'>
                          <span className="input-group-text "> {values.medicine[index].availableQuantity}
      </span>                       </div>
                          </div>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].quantity:'':''}</span>     
                         
                         </td>
                         <td className="">
                         <input type="text" name={`medicine.${index}.saleprice`}
                          value={values.medicine[index].saleprice} onChange={(e)=>{handleChange(e);
                          
                        }}
                        readOnly 
                           className="form-control" />
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].saleprice:'':''}</span>     
                         
                         </td>
                         <td className="">
                         <input type="text" name={`medicine.${index}.amount`} 
                         value={values.medicine[index].amount} 
                         readOnly
                         onChange={handleChange} className="form-control" />
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].amount:'':''}</span>     
                         
                         </td>
                         <td>
                             <button  onClick={()=>arrayhelper.remove(index)}><i class="fas fa-minus-circle text-danger"></i></button>
                         </td>


                     </tr>
 
                     ):''

                     }
                 </tbody>
                 
                 </table>
                 </>)}</FieldArray>
                                 
         </div>
         <div className="row ">
             <div className="col-sm-6 ">
                  <div class="form-row ml-4">
                     <div class="col-md-6 from-group">
                         <div className=" ">Hospital Doctor</div>
                       <select id="input" class="form-control" 
                        onChange={(e)=>{
                        var data=e.target.value.split(",");
                        setFieldValue('doctor',data[0]);
                       setFieldValue('doctorName',data[1]);
                       }} >
                           <option value=''>Select Doctor</option>
                           {
           props.doctor?props.doctor.map(data=><option key={data.userId} value={data.userId+','+data.name}>{data.name}</option>):''
        }
       </select>
                       <span className='text-danger'>{touched.doctor ?errors.doctor:''}</span>     
                         
                    </div>
                    <div class="col-md-6 form-group">
                    <div className="">Doctor Name</div>
                       <input type="text" class="form-control" 
                       placeholder="Doctor Name" value={values.doctorName} 
                       onChange={(e)=>setFieldValue('doctorName',e.target.value)}/>
                       <span className='text-danger'>{touched.doctor ?errors.doctor:''}</span>     
                     
                    </div>
                </div>
                <div className="form-row ml-4">
                        <div className="">Note</div>
                        <textarea className="form-control" rows="3" value={values.note} 
                        onChange={(e)=>setFieldValue('note',e.target.value)}></textarea>
                        <span className='text-danger'>{touched.note ?errors.note:''}</span>     
                     
                    </div>
             </div>
             <div className="col-sm-6">
                <div className="d-flex justify-content-between">
                    <div class="ml-4 ">
                     Total($)
                     </div>
                    <div class="d-flex ">
                      <input type="number" readOnly className=" bg-light border-top-0 border-left-0 border-right-0"
                       value={values.total} onChange={(e)=>setFieldValue('total',e.target.value)} style={{border:'1px solid black'}}/>
                     </div>
               </div>
              <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Discount($)
                   </div>
                   <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0"
                    value={values.discount} 
                    onChange={(e)=>{setFieldValue('discount',e.target.value);
                    setFieldValue('netamount', values.netamount-(new Number(e.target.value)/100))}}
                     style={{border:'1px solid black',width:'89px'}} placeholder="Discount%"/>
                    <span className='text-danger'>{touched.discount ?errors.discount:''}</span>     
                     
                   </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" 
                    readOnly
                     value={values.total-(values.discount/100)}></input></div>
                </div>
               <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Tax($)
                   </div>
                   <div class="d-flex ">
                      <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" 
                     value={values.tax} 
                     onChange={(e)=>{setFieldValue('tax',e.target.value);
                     
                   setFieldValue('netamount', values.netamount+(new Number(e.target.value)/100))
                   }
                   }   style={{border:'1px solid black',width:'50px'}} placeholder="tax%"/>
                      <span className='text-danger'>{touched.tax ?errors.tax:''}</span>     
                     
                    </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0"
                    readOnly 
                    value={values.total-(values.discount/100)+(values.tax/100)}/>
</div>
                </div>
                <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Net Amount($)
                   </div>
                    <div class="d-flex ">
                     <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" 
                     value={values.netamount} readOnly onChange={(e)=>setFieldValue('netamount',e.target.value)}/>
                     </div>
                </div>
                <div className="d-flex float-right p-2">
                <button type="submit" onClick={()=>{
                   setFieldValue('total', values.medicine.reduce((prev,next)=>new Number(prev)+new Number(next.amount),0));
                   setFieldValue('netamount', values.medicine.reduce((prev,data)=>new Number(prev)+new Number(data.amount)+values.tax-values.discount,0))
                  
                }} class="btn btn-outline-primary">Calculate</button>
                
                <button type="submit" onClick={()=>{
                   setFieldValue('total', values.medicine.reduce((prev,next)=>new Number(prev)+new Number(next.amount),0));
                   setFieldValue('netamount', values.medicine.reduce((prev,data)=>new Number(prev)+new Number(data.amount)+values.tax-values.discount,0))
                  handleSubmit()
                }} class="btn btn-outline-primary">save</button>
                </div>
             </div>
</div>
</div>

</>)}</Formik>
</div>
    
    </div>
    </div>
    </div>
      </>
      
   )
}