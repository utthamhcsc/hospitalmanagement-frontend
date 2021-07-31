import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { PostFormdata } from "../../Network/Server";
import ReactDatePicker from "react-datepicker";
export default props => {
  // alert(props.data)
  const { patientId } = useParams();
  const formik = useFormik({
    initialValues: props.data || {
      amount: '',
      paymentMode: "cash",
  date: "",
  file:'',
  note: "",
  attachDocument:''
    },
    enableReinitialize: true,
    onSubmit: values => {
     // console.log(JSON.stringify(values, null, 2));
      console.log(values)
      values.opdId=patientId
      PostFormdata("myopdpayment/add", "POST", {
        ...values,
        opdId: patientId
      }).then(data => {
        if(values.id){
props.setdataSrc(item=>(item||[]).map(item1=>item1.id==data.id?data:item1))
        }else{
          props.setdataSrc(item=>[data,...item])
        }
        window.$('#addPayment').modal('hide')
      });
    },

    validationSchema: Yup.object().shape({
     // reportType: Yup.string().required("*Required Report Type")
    })
  });

  return (
    <div
      class="modal fade"
      id="addPayment"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content" role="document">
          <div className="card ">
            <div className="modal-header ">
              <h5>Add Payment</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                  <div className='row'>
                <div className="border bg-light p-3 col-md-12 row">
                  <div className='col-md-6 form-group'>
                    <label>Amount</label> 
                    <input 
                    type='text'
                    className='form-control'
                    {...formik.getFieldProps('amount')}
                    />
                  </div>
                  <div className='col-md-6 form-group'>
                  <label for="doctor">Payment Mode</label>
                        <select
                          id="input "
                          className="form-control"
                          value={formik.values.paymentMode}
                          onChange={e =>
                            formik.setFieldValue("paymentMode", e.target.value)
                          }
                        >
                           <option></option>
                          <option>Cash</option>
                          <option>Check</option>
                          <option>Net Banking</option>
                          <option>Other</option>
                        </select>
                  </div>
                  <div className='col-md-6 form-group'>
                    <label>Date</label> 
                    <ReactDatePicker 
                    autoComplete='off'
                    className='form-control' 
                    selected={new Date(formik.values.date)=='Invalid Date'?'':new Date(formik.values.date)}
                    onChange={
                      (e)=>{
                        formik.setFieldValue("date", e)
                      }
                    }
                    />
                  </div>
                  <div className='col-md-6 form-group'>
                    <label>Attach Document</label> 
                    <input type='file' 
                    className='form-control'
                    onChange={(e)=> formik.setFieldValue("file", e.target.files[0])}
                    />
                  </div>
                  <div className='col-md-6 form-group'>
                    <label>Note</label> 
                    <input
                    type='text'
                    className='form-control'
                    {...formik.getFieldProps('note')}
                    />
                  </div>
                </div>
                <button type="submit" class=" float-right btn btn-primary mt-2 ">
                  Save
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
