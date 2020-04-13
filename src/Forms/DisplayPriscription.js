import React from 'react'
import {Formik, FieldArray} from 'formik'
import { Getdata } from '../Network/Server';
export default function DisplayPriscription(props) {
  
  const [medicianCategory, setMedicineCategory] = React.useState([]);
  React.useEffect(() => {
    Getdata("medicineCat/get").then(data => {
      console.log(data);
      setMedicineCategory(data || []);
    });},[])
    return (
        <div class="modal fade" id="viewCaseHistory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
         <div class="modal-content" role="document"> 
    
    <div className="card">
       <div class="card-header text-white bg-primary "> View Case History 
       <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> 
        </div>
      <div className="card-body">  
      <div className="border-bottom p-2">
      <Formik
      initialValues={{ header:props.header||'',
    medicine:props.caseHistory||[{medicineCategory:'',medicine:'',dosage:'',instruction:''}],
    footer:props.footer||''
    
    
    }}
    enableReinitialize={true}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }>{({values,getFieldProps,handleSubmit})=><form>
       <div><b className='text-sm'>Header</b></div>
       <textarea readOnly className="form-control mt-2 border-0" rows="4" {...getFieldProps('header')}></textarea>
      
   <FieldArray name='medicine'>
       
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
                       values.medicine && values.medicine.length?
                       values.medicine.map((data,index)=><tr>
                           <td ><select readOnly     
                           className='form-control text-center border-0'
                            value={values.medicine[index].medicianCategory}>
                             {medicianCategory.map(item => (
                               
                                            <option value={item.id}>
                                              {item.medicineCategory}
                                            </option>
                                          ))}
                                          </select>
                           </td>
                           <td><input readOnly     className='form-control text-center border-0' {...getFieldProps(`medicine.${index}.medicine`)}/>
                          
                               
                          </td>
                           <td><input readOnly     className='form-control text-center border-0' {...getFieldProps(`medicine.${index}.dosage`)}/>
                             </td>
                           <td><input readOnly     className='form-control text-center border-0' {...getFieldProps(`medicine.${index}.instruction`)}></input></td>
                
                       </tr>)
                       
                       
                       :''
                   }
               
               </tbody>
       
   
   </table>}
</FieldArray>
      <div><b className='text-sm'>Footer</b></div>
       <textarea readOnly     className=" form-control mt-2 border-0" {...getFieldProps(`footer`)} rows="4"></textarea>
      </form>
      }
       </Formik>
    
      </div> 
 








      </div> 
      </div>
    </div>
    </div>
    </div>
    )
}
