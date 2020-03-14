import React from 'react'
import {Formik, FieldArray} from 'formik'
import { Postdata } from '../../Network/Server'
import ReactDatePicker from 'react-datepicker'
export default (props)=> {
    return (
        <div class="modal fade " id="addConsultantInstruction" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
         <div class="modal-content" role="document"> 
    
    <div className="card ">
      <div class="card-header text-white bg-primary "> Add Consultant Instruction 
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
      </div>
      
    <div className="card-body">  
      <div className="border-bottom p-2">
      <Formik
      initialValues={{ ipdId:props.ipdId,
    consultantInstruction:[{appliedDate:'',doctorId:props.doctorId,instruction:'',instructionDate:new Date()}],
    
    }}
    enableReinitialize={true}
      onSubmit={values =>{console.log(values);
      Postdata('consultantregister/','POST',values).then(data=>{
         console.log(data);
        //window.location.reload();
      })
    }
      }>{({values,getFieldProps,handleSubmit,setFieldValue})=><form>
      
   <FieldArray name='consultantInstruction'>
       
   {
       arrayHelpers=><table className='table'>
       
       <thead>
           <tr>
           <td><b className='text-sm'>Applied Date</b></td>
           <td><b className='text-sm'>Instruction</b></td>
           <td><b className='text-sm'>Instruction Date</b></td>
           </tr>
           </thead>
           <tbody>
               
                   {
                       values.consultantInstruction && values.consultantInstruction.length?
                       values.consultantInstruction.map((data,index)=><tr>
                           <td><ReactDatePicker className='form-control'  showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" selected={values.consultantInstruction[index].appliedDate} onChange={(date)=>setFieldValue(`consultantInstruction.${index}.appliedDate`,date)}/>
                         </td>
                           <td>
                           <input className='form-control' {...getFieldProps(`consultantInstruction.${index}.instruction`)}/>
                           </td>
                             <td><ReactDatePicker className='form-control'  showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" readOnly selected={values.consultantInstruction[index].instructionDate} onChange={(date)=>setFieldValue(`consultantInstruction.${index}.instructionDate`,date)}/>
                         </td>
                          
                  {index==0? <td onClick={()=>arrayHelpers.push({appliedDate:'',doctorId:props.doctorId,instruction:'',instructionDate:new Date()})}><i className='fa fa-plus fa-lg text-primary'></i></td>
: <td onClick={() => arrayHelpers.remove(index)}><i className='fa fa-close fa-lg text-danger'></i></td>
}
                       </tr>)
                       
                       
                       :''
                   }
               
               </tbody>
       
   
   </table>}
</FieldArray>
     
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
