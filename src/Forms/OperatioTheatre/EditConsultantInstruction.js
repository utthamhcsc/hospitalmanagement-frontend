import React, { useState } from 'react'
import {Formik, FieldArray} from 'formik'
import { Postdata, Getdata } from '../../Network/Server'
import ReactDatePicker from 'react-datepicker'
import { useParams } from 'react-router-dom'
export default (props)=> {
  const {patientId}=useParams()
  const [mydata,setData]=useState([])
  React.useEffect(()=>{
    Getdata("fetchalluser/doctor").then(data => {
      setData(data);
      
    });
  },[])
    return (
        <div class="modal fade " id="editConsultant" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      initialValues={{ otId:props.id,
    consultantInstruction:[props.data||{appliedDate:'',doctorId:'',instruction:'',instructionDate:new Date(),otid:props.id}],
    
    }}
    enableReinitialize={true}
      onSubmit={values =>{console.log(values);
        Postdata('otconsutantregister/add','POST',values.consultantInstruction).then(data=>{
          
          
          
        window.$('#addConsultantInstruction').modal('hide')
        })
     
    }
      }>{({values,getFieldProps,handleSubmit,setFieldValue})=><form>
      
   <FieldArray name='consultantInstruction'>
       
   {
       arrayHelpers=><table className='table'>
       
       <thead>
           <tr>
           <td><b className='text-sm'>Applied Date</b></td>
           <td><b className='text-sm'>Consultant</b></td>
           <td><b className='text-sm'>Instruction</b></td>
           <td><b className='text-sm'>Instruction Date</b></td>
           </tr>
           </thead>
           <tbody>
               
                   {
                       values.consultantInstruction && values.consultantInstruction.length?
                       values.consultantInstruction.map((data,index)=><tr>
                           <td><ReactDatePicker 
                           className='form-control' minDate={new Date()}  
                           showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" 
                           
                           selected={new Date(values.consultantInstruction[index].appliedDate)=='Invalid Date'?
                           '':new Date(values.consultantInstruction[index].appliedDate)} onChange={(date)=>setFieldValue(`consultantInstruction.${index}.appliedDate`,date)}/>
                         </td>
                         <td>
                         <select id="input" className="form-control"  {...getFieldProps(`consultantInstruction.${index}.doctorId`)} >
                 <option> select Doctor</option>
                 {
                   mydata||{}?  Object.keys(mydata).map(item=><option value={item}>{mydata[item]}</option>):''
                 }
               </select>
                         </td>
                           <td>
                           <input className='form-control' {...getFieldProps(`consultantInstruction.${index}.instruction`)}/>
                           </td>
                             <td><ReactDatePicker 
                             className='form-control' 
                             minDate={new Date()}  
                             showTimeSelect dateFormat="MMMM d, yyyy h:mm aa"
                              readOnly selected={new Date(values.consultantInstruction[index].instructionDate)=='Invalid Date'?''
                            :new Date(values.consultantInstruction[index].instructionDate)
                            } onChange={(date)=>setFieldValue(`consultantInstruction.${index}.instructionDate`,date)}/>
                         </td>
                          
                
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
