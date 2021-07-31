import React, { useState, useEffect } from "react";
import { Formik, FieldArray } from "formik";
import { Postdata, Getdata } from "../..//Network/Server";
import * as Yup from "yup";


export default props => {
  const [medicianCategory, setMedicineCategory] = useState([]);
  const [medicine,setmedicine]=React.useState([])
  const [dosage,setdosage]=React.useState([])
  var medicine1=[]
  var dosage1=[]
 
  const getpharmacyId=(id,index)=>{ 
    
    console.log('******************************************************'+index)
    Getdata('pharmacy/fetchbycategoryId/'+id).then(data=>{
        
       var mydata=[...medicine];
       
       mydata[index]=data;
       
setmedicine(mydata)
    })
  Getdata('medicinedosage/get/'+id).then(data=>{
           var mydata=[...dosage];
      
      mydata[index]=data;
      
    setdosage(mydata)
  })
  console.log('******************************************************')
        }
        
  useEffect(() => {
    if(props.data && props.data.caseHistory && props.data.caseHistory.length>0)
{
  (props.data.caseHistory||[]).forEach(async(item,index) => {
   
    if(item.medicianCategory){
   await   Getdata('pharmacy/fetchbycategoryId/'+item.medicianCategory).then(data=>{
        
        
        
        medicine[index]=data;
        
 
     })
   await Getdata('medicinedosage/get/'+item.medicianCategory).then(data=>{
           
       
    dosage[index]=data;
       
   
   })
   
    }
    //console.log('#################################################')
  });
   setdosage(dosage)
   setmedicine(medicine)

}
  }, [props.data]);
  useEffect(() => {
    Getdata("medicineCat/get").then(data => {
      console.log(data);
      setMedicineCategory(data || []);
    });
   





  }, []);

  

  return (
    <div
      class="modal fade "
      id="viewDetails"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content" role="document">
          <div className="card ">
            <div class="modal-header  ">
              {" "}
              View Prescription
              <button
                type="button"
                class="close "
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="card-body">
              <div className="border-bottom p-2">
                <Formik
                  initialValues={{...props.data,my:''}}
                  enableReinitialize={true}
                  onSubmit={values => {
                    console.log(values);
                    Postdata("myopdprescription/add", "POST", values).then(
                      data => {
                        console.log(data);
                        // window.location.reload();
                      }
                    );
                  }}
                >
                  {({
                    values,
                    setFieldValue,
                    getFieldProps,
                    handleSubmit,
                    touched,
                    errors
                  }) => (
                    <form>
                      <div>
                        <b className="text-sm">Header</b>
                      </div>
                      <textarea
                        className="form-control mt-2"
                        rows="4"
                        {...getFieldProps("header")}
                      ></textarea>

                      <FieldArray name="caseHistory">
                        {arrayHelpers => (
                          <table className="table">
                            <thead>
                              <tr>
                                <td>
                                  <b className="text-sm">Medicine Category</b>
                                </td>
                                <td>
                                  <b className="text-sm">Medicine</b>
                                </td>
                                <td>
                                  <b className="text-sm">Dosage</b>
                                </td>
                                <td>
                                  <b className="text-sm">Instruction</b>
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              {values &&
                              values.caseHistory &&
                              values.caseHistory.length
                                ? values.caseHistory.map((data, index) => {
                                 return   <tr>
                                      <td>
                                        <select
                                          className="form-control"
                                          value={data.medicianCategory}
                                          onChange={(e)=>{setFieldValue(
                                            `caseHistory.${index}.medicianCategory`,e.target.value
                                          )
                                        getpharmacyId(e.target.value,index)
                                        }
                                        }
                                        >
                                            <option id='demo1'></option>
                                          {medicianCategory.map(item => (
                                            <option value={item.id}>
                                              {item.medicineCategory}
                                            </option>
                                          ))}
                                        </select>
                                      </td>

                                      <td>
                                        <select
                                          className="form-control"
                                          {...getFieldProps(
                                            `caseHistory.${index}.medicine`
                                          )}
                                        >
                          {
                            (medicine[index]||[]).map(item=><option>{item.medicineName}</option>)
                          }              
                                        </select>
                                        <span class="text-danger">
                                            {touched.medicianCategory
                                              ? errors.medicianCategory
                                              : ""}
                                          </span>

                                      </td>

                                      <td>
                                        <select
                                          className="form-control"
                                          {...getFieldProps(
                                            `caseHistory.${index}.dosage`
                                          )}
                                        >
                                          <span class="text-danger">
                                            {touched.medicine
                                              ? errors.medicine
                                              : ""}
                                          </span>

                                          <option selected>Select</option>
                                          {
                            (dosage[index]||[]).map(item=><option>{item.dosage}</option>)
                          } 
                                        </select>
                                      </td>

                                      <td>
                                        <input
                                          className="form-control"
                                          {...getFieldProps(
                                            `caseHistory.${index}.instruction`
                                          )}
                                        ></input>
                                      </td>
                                      <span class="text-danger">
                                        {touched.dosage ? errors.dosage : ""}
                                      </span>

                                      {index == 0 ? (
                                        <td
                                          onClick={() =>
                                            arrayHelpers.push({
                                              medicianCategory: "",
                                              medicine: "",
                                              dosage: "",
                                              instruction: ""
                                            })
                                          }
                                        >
                                          <i className="fa fa-plus fa-lg text-primary"></i>
                                        </td>
                                      ) : (
                                        <td
                                          onClick={() =>{
                                            arrayHelpers.remove(index)
                                           
                                          setmedicine((data)=>data.filter((item,i)=>index!=i))
                                          }
                                          }
                                        >
                                          <i className="fa fa-close fa-lg text-danger"></i>
                                        </td>
                                      )}
                                      <span class="text-danger">
                                        {touched.instruction
                                          ? errors.instruction
                                          : ""}
                                      </span>
                                    </tr>
                                })
                                : ""}
                            </tbody>
                          </table>
                        )}
                      </FieldArray>
                      <div>
                        <b className="text-sm">Footer</b>
                      </div>
                      <textarea
                        className="form-control mt-2"
                        {...getFieldProps(`footer`)}
                        rows="4"
                      ></textarea>
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm mt-2"
                        onClick={handleSubmit}
                      >
                        save
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
