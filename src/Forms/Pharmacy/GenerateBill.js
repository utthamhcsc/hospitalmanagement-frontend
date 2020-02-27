import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik, FieldArray, Formik } from 'formik';
import * as Yup from 'yup';
export default () =>{

const myvalidation=Yup.object().shape({
           patientId:Yup.string().required(),
         //  billNo:'',
        //   date:Yup.date().required(),
           docter:Yup.string().required(),
           hospitalDocter:Yup.string().required(),
           note:Yup.string().required(),
           discount:Yup.number().required(),
           tax:Yup.number().required(),
           netamount:Yup.number().required(),
           medicine:Yup.array().of(Yup.object().shape({
           medicineCategory:Yup.string().required('medicine category required'),
           medicineName:Yup.string().required('medicine name required'),
           batchNum:Yup.string().required('required'),
           expiryDate:Yup.string().required('required'),
           quantity:Yup.number().required('required'),
           saleprice:Yup.number().required('required'),
           charges:Yup.number().required('required'),
       })
   ),
    
})


return(
<>
        <div class="modal fade" id="GenerateBill" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">

        <div className="card ">
        <Formik initialValues={{
           patientId:'',
           billNo:'',
           date:new Date(),
           docter:'',
           hospitalDocter:'',
           note:'',
           medicine:[{
           medicineCategory:'',
           medicineName:'',
           batchNum:'',
           expiryDate:'',
           quantity:'',
           saleprice:'',
           charges:0,
           }],discount:0,
          tax:0,
          netamount:0
   }}
   validationSchema={myvalidation}
   onSubmit={(values)=>console.log(values)}>{({values,handleChange,setFieldValue,handleSubmit,errors,touched})=>(<>
        <div class=" card-header  form-inline bg-primary p-1  border-0">
            
        <select id="input" class="form-inline col-md-3 ml-2"  onChange={(e)=>setFieldValue('patientId',e.target.value)}>
        <option>Select Patient</option>
        <option>Amar</option>
        <option>Bharat</option>
        <option>Chiatanya</option>
        <option>Dhruva</option>
        </select>
        <span className='text-danger'>{touched.patientId?errors.patientId:''}</span>   
        
        <button class=" form-inline ml-2" data-toggle='modal' data-target='#addnewpatient'><i class="fas fa-plus "></i>New Patient</button>
            
       <div class="form-check mb-2 my-1 ml-3">
       <label class="form-check-label ml-4" for="inlineFormCheck">  Bill No</label>
       <input type="number" className="form-inline ml-1 p-0 " value={values.billNo} onChange={(e)=>setFieldValue('billNo',e.target.value)}/>
       <span className='text-danger text-sm'>{touched.billNo?errors.billNo:''}</span>      
       </div>
       <label class="form-check-label ml-auto" for="inlineFormCheck"> Date</label>
       <div className="mx-2">
         <DatePicker popper-className="form-inline"style={{width:'100% !important'}} selected={values.date} onChange={(e)=>setFieldValue('date',e)}/>
         <button type="button" class="close mx-1" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
       </div> 
       </div>
       <div className="card-body p-0 m-0 bg-light  ">
         <div className="container-fluid ">
             <FieldArray name='medicine'>{arrayhelper=>(<>
             <table id="myTable" class="table  ">
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
                                medicineCategory:'',
                                medicineName:'',
                                batchNum:'',
                                expiryDate:'',
                                quantity:'',
                                saleprice:'',
                                charges:0,
                              }
                         )}><i class="fas fa-plus text-primary border-0"></i></button></td>
                     </tr>
                 </thead>
                 <tbody className="border-bottom">
                     {values.medicine && values.medicine.length>0?
                     values.medicine.map((item,index)=>
                     <tr>
                         <td className=" " >
                            <select id="input" name={`medicine.${index}.medicineCategory`} value={values.medicine[index].medicineCategory}onChange={handleChange}  className="form-inline" style={{ width: "120px" }}>
                            <option selected>Select</option>
                            <option>Syrup</option>
                            <option>Capsule</option>
                            <option>Injection</option>
                            <option>Ointment</option>
                            <option>Cream</option>
                            <option>surgical</option>
                            <option>Drops</option>
                            <option>Inhalers</option>
                            </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].medicineCategory:'':''}</span>     
                         </td>
                         <td className="">
                            <select id="input" name={`medicine.${index}.medicineName`} value={values.medicine[index].medicineName} onChange={handleChange} class="form-inline" style={{ width: "130px" }}>
                                <option selected>Select</option>
                                <option>d</option>
                                <option>d</option>
                                <option></option>
                            </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].medicineName:'':''}</span>     
                          </td>
                         <td className="">
                            <select id="input" name={`medicine.${index}.batchNum`} value={values.medicine[index].batchNum} onChange={handleChange} className="form-inline " style={{ width: "70px" }}>
                            <option>B</option>
        <option>C</option>
      </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].batchNum:'':''}</span>     
                         </td>
                         <td className="">
                           
                         <input type="text" name={`medicine.${index}.expiryDate`} value={values.medicine[index].expiryDate} onChange={handleChange} className="form-inline" style={{ width: "80px" }}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].expiryDate:'':''}</span>     
                         
                         </td>
                         <td className="">
                         <input type="text" name={`medicine.${index}.quantity`} value={values.medicine[index].quantity} onChange={handleChange} className="form-inline" style={{ width: "130px" }}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].quantity:'':''}</span>     
                         
                         </td>
                         <td className="">
                         <input type="text" name={`medicine.${index}.saleprice`} value={values.medicine[index].saleprice} onChange={handleChange}  className="form-inline" style={{ width: "90px" }}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].saleprice:'':''}</span>     
                         
                         </td>
                         <td className="">
                         <input type="text" name={`medicine.${index}.charges`} value={values.medicine[index].charges} onChange={handleChange} className="form-inline" style={{ width: "90px" }}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].charges:'':''}</span>     
                         
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
                     <div class="col ">
                         <div className=" ">Hospital Doctor</div>
                       <select id="input" class="form-inline  my-2 w-100 " value={values.docter} onChange={(e)=>setFieldValue('hospitalDocter',e.target.value)} >
                           <option selected>Select Doctor</option>
                           <option>Dr.Amith</option>
                           <option>Dr.Bharat</option>
                           <option>Dr.Chatur</option>
                       </select>
                       <span className='text-danger'>{touched.hospitalDocter ?errors.hospitalDocter:''}</span>     
                         
                    </div>
                    <div class="col">
                    <div className="">Doctor Name</div>
                       <input type="text" class="form-inline w-100 my-2 " placeholder="Doctor Name" value={values.docter} onChange={(e)=>setFieldValue('docter',e.target.value)}/>
                       <span className='text-danger'>{touched.docter ?errors.docter:''}</span>     
                     
                    </div>
                </div>
                <div className="form-row ml-4">
                        <div className="">Note</div>
                        <textarea className="w-100 my-2" rows="3" value={values.note} onChange={(e)=>setFieldValue('note',e.target.value)}></textarea>
                        <span className='text-danger'>{touched.note ?errors.note:''}</span>     
                     
                    </div>
             </div>
             <div className="col-sm-6">
                <div className="d-flex justify-content-between">
                    <div class="ml-4 ">
                     Total($)
                     </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" value={values.medicine.map(item=>Number(item.charges)).reduce((pre,nxt)=>pre+nxt)} onChange={(e)=>setFieldValue('total',e.target.value)} style={{border:'1px solid black'}}/>
                     
                     </div>
               </div>
              <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Discount($)
                   </div>
                   <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" value={values.discount} onChange={(e)=>{setFieldValue('discount',e.target.value)}} style={{border:'1px solid black',width:'89px'}} placeholder="Discount%"/>
                    <span className='text-danger'>{touched.discount ?errors.discount:''}</span>     
                     
                   </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" value={values.medicine.map(item=>Number(item.charges)).reduce((pre,nxt)=>pre+nxt)-(Number(values.discount)/100)} style={{border:'1px solid black'}}/>
                </div>
                </div>
               <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Tax($)
                   </div>
                   <div class="d-flex ">
                      <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" value={values.tax} onChange={(e)=>setFieldValue('tax',e.target.value)} style={{border:'1px solid black',width:'50px'}} placeholder="tax%"/>
                      <span className='text-danger'>{touched.tax ?errors.tax:''}</span>     
                     
                    </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" value={values.medicine.map(item=>Number(item.charges)).reduce((pre,nxt)=>pre+nxt)-(Number(values.discount)/100)+(values.tax/100)} style={{border:'1px solid black'}}/>
                   </div>
                </div>
                <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Net Amount($)
                   </div>
                    <div class="d-flex ">
                     <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" value={values.medicine.map(item=>Number(item.charges)).reduce((pre,nxt)=>pre+nxt)-(Number(values.discount)/100)+(values.tax/100)} onChange={()=>alert(values.medicine.map(item=>Number(item.charges)).reduce((pre,nxt)=>pre+nxt)-(Number(values.discount)/100)+(values.tax/100))} style={{border:'1px solid black'}}/>
                   </div>
                </div>
                <div className="d-flex float-right p-2">
                <button type="submit" onClick={handleSubmit} class="btn btn-outline-primary">Calculate</button>
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