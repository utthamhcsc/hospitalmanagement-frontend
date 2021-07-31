import React, { useState, useEffect } from "react";
import { Formik, FieldArray, useFormik, } from "formik";
import { Postdata, Getdata } from "../..//Network/Server";
import * as Yup from "yup";
import { useParams } from "react-router-dom";


export default props => {
  const {patientId}=useParams();
  const [medicianCategory, setMedicineCategory] = useState([]);
  const [medicine,setmedicine]=React.useState([])
  const [dosage,setdosage]=React.useState([])
  const [show,setshow]=React.useState(false)
  var medicine1=[]
  var dosage1=[]
 const formik=useFormik({
   enableReinitialize:true,
   initialValues:props.data||{
    ipdId:"",header:'',
    caseHistory:[{medicianCategory:'',medicine:'',dosage:'',instruction:''}],
    footer:''
    
    
   },
   onSubmit:v=>{
     v.ipdId=patientId
    Postdata("myipdprescription/add", "POST", {...v,ipdId:patientId,date:new Date()}).then(
      data => {
        console.log(data);
        if(v.id){
          props.setdataSrc(item=>(item||[]).map(item1=>item1.id==data.id?data:item1))
                  }else{
                    props.setdataSrc(item=>[data,...item])
                  }
        window.$('#addPriscription').modal('hide')
      }
    );
   }
   
 })
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
   setshow(true)
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
      id="addPriscription"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content" role="document">
          <div className="card ">
            <div class="modal-header ">
              {" "}
             <h5> Add Prescription</h5>
              <button
                type="button"
                class="close "
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
{true?
            <div className="card-body">
              <div className="border-bottom p-2">
                
                    
                      <div>
                        <b className="text-sm">Header</b>
                      </div>
                      <textarea
                        className="form-control mt-2"
                        rows="4"
                        {...formik.getFieldProps("header")}
                      ></textarea>

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
                              {formik.values &&
                              formik.values.caseHistory &&
                              formik.values.caseHistory.length
                                ? formik.values.caseHistory.map((data, index) => {
                                 return   <tr>
                                      <td>
                                        <select
                                          className="form-control"
                                          value={data.medicianCategory}
                                          onChange={(e)=>{formik.setFieldValue(
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
                                          {...formik.getFieldProps(
                                            `caseHistory.${index}.medicine`
                                          )}
                                        >
                                          
                                          <option selected>Select</option>
                          {
                            (medicine[index]||[]).map(item=><option>{item.medicineName}</option>)
                          }              
                                        </select>
                                        <span class="text-danger">
                                            {formik.touched.medicianCategory
                                              ? formik.errors.medicianCategory
                                              : ""}
                                          </span>

                                      </td>

                                      <td>
                                        <select
                                          className="form-control"
                                          {...formik.getFieldProps(
                                            `caseHistory.${index}.dosage`
                                          )}
                                        >
                                          <span class="text-danger">
                                            {formik.touched.medicine
                                              ? formik.errors.medicine
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
                                          {...formik.getFieldProps(
                                            `caseHistory.${index}.instruction`
                                          )}
                                        ></input>
                                      </td>
                                      <span class="text-danger">
                                        {formik.touched.dosage ? formik.errors.dosage : ""}
                                      </span>

                                      {index == 0 ? (
                                        <td
                                          onClick={() =>
                                      formik.setFieldValue('caseHistory',[...formik.values.caseHistory,{
                                        medicianCategory: "",
                                        medicine: "",
                                        dosage: "",
                                        instruction: ""
                                      }])   
                                          }
                                        >
                                          <i className="fa fa-plus fa-lg text-primary"></i>
                                        </td>
                                      ) : (
                                        <td
                                          onClick={() =>{
                                            formik.setFieldValue('caseHistory',(formik.values.caseHistory||[]).filter((item,i)=>i!=index)
                                              )
                                          setmedicine((data)=>data.filter((item,i)=>index!=i))
                                          }
                                          }
                                        >
                                          <i className="fa fa-close fa-lg text-danger"></i>
                                        </td>
                                      )}
                                      <span class="text-danger">
                                        {formik.touched.instruction
                                          ? formik.errors.instruction
                                          : ""}
                                      </span>
                                    </tr>
                                })
                                : ""}
                            </tbody>
                          </table>
                      <div>
                        <b className="text-sm">Footer</b>
                      </div>
                      <textarea
                        className="form-control mt-2"
                        {...formik.getFieldProps(`footer`)}
                        rows="4"
                      ></textarea>
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm mt-2"
                        onClick={formik.handleSubmit}
                      >
                        save
                      </button>
                   
                 
              </div>
            </div>
          :''  
          }
          </div>
        </div>
      </div>
    </div>
  );
};
