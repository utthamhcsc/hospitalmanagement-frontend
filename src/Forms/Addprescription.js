import React from 'react'
import Table from '../components/Table'
import {Formik, FieldArray} from 'formik'
import { Postdata } from '../Network/Server'
import * as Yup from 'yup';
export default (props)=> {

  const myvalidation=Yup.object().shape({
    caseHistory: Yup.array().of(Yup.object().shape({
  patientId:Yup.string().required(),
  medicianCategory:Yup.string().required('Category Required'),
  medicine:Yup.string().required('Medicine Required'),
  dosage:Yup.string().required('Dosage Required'),
  instruction:Yup.number().required('Instruction Required'),
  }))
  })


 return (
        <div class="modal fade " id="addPriscription" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
         <div class="modal-content" role="document"> 
    
    <div className="card ">
      <div class="card-header text-white bg-primary "> Add Prescription 
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
      </div>
      
    <div className="card-body">  
      <div className="border-bottom p-2">
      <Formik
      initialValues={{ opdId:props.opdId,header:'',
    caseHistory:[{medicianCategory:'',medicine:'',dosage:'',instruction:''}],
    footer:''
    
    
    }}
    enableReinitialize={true}
    validationSchema={myvalidation}
      onSubmit={values =>{console.log(values);
      Postdata('prescription/','POST',values).then(data=>{
         console.log(data);
        window.location.reload();
      })
    }
      }>{({values,getFieldProps,handleSubmit,touched,errors})=><form>
       <div><b className='text-sm'>Header</b></div>
       <textarea className="form-control mt-2" rows="4" {...getFieldProps('header')}></textarea>
      
   <FieldArray name='caseHistory'>
       
   {
       arrayHelpers=><table className='table'>
       
       <thead>
           <tr>
           <td><b className='text-sm'>Medicine Category</b></td>
           <td><b className='text-sm'>Medicine</b></td>
           <td><b className='text-sm'>Dosage</b></td>
           <td><b className='text-sm'>Instruction</b></td>
           </tr>
           </thead>
           <tbody>
               
                   {
                       values.caseHistory && values.caseHistory.length?
                       values.caseHistory.map((data,index)=><tr>
                           <td><select className='form-control' {...getFieldProps(`caseHistory.${index}.medicianCategory`)}>
                           <option selected>Select</option>
                           <option>Syrup</option>
                           <option>Capsule</option>
                           <option>Diaper</option>
                           <option>ointment</option>
                           <option>Injection</option>
                           <option>Cream</option>
                           <option>Drops</option>
                           <option>Inhalers</option>   
                           <option>Tablet</option>   
                           </select></td>
                           
                           <td><select className='form-control' {...getFieldProps(`caseHistory.${index}.medicine`)}>
                           <span class="text-danger">{touched.medicianCategory?errors.medicianCategory:''}</span>

                           <option selected>Select</option>
                           <option>DIA FORMIN FORTE</option>
                           <option>DOLOROLE FORTE</option>
                           <option>FLAGYL</option>    
                           </select></td>
                           
                           <td><select className='form-control'  {...getFieldProps(`caseHistory.${index}.dosage`)}>
                           <span class="text-danger">{touched.medicine?errors.medicine:''}</span>

                           <option selected>Select</option>
                           <option>10MI</option>
                           <option>5MI</option>
                           <option>1TS</option>
                           </select></td>
                           
                           <td><input className='form-control'  {...getFieldProps(`caseHistory.${index}.instruction`)}></input></td>
                           <span class="text-danger">{touched.dosage?errors.dosage:''}</span>

                  {index==0? <td onClick={()=>arrayHelpers.push({medicianCategory:'',medicine:'',dosage:'',instruction:''})}><i className='fa fa-plus fa-lg text-primary'></i></td>: <td onClick={() => arrayHelpers.remove(index)}><i className='fa fa-close fa-lg text-danger'></i></td>
                  
}
<span class="text-danger">{touched.instruction?errors.instruction:''}</span>

                       </tr>)
                       
                       
                       :''
                   }
               
               </tbody>
       
   
   </table>}
</FieldArray>
      <div><b className='text-sm'>Footer</b></div>
       <textarea className="form-control mt-2" {...getFieldProps(`footer`)} rows="4"></textarea>
       <button className='btn btn-primary btn-sm mt-2' onClick={handleSubmit}>save</button>
      </form>
      }
       </Formik>
    
      </div> 
      </div>
    </div>
    </div>
    </div>    
    </div>)
}
