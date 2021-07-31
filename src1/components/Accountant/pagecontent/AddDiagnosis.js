import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import { useFormik } from "formik";
import { Postdata, PostFormdata } from "../../../Network/Server";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
export default props => {
  // alert(props.data)
  const { patientId } = useParams();
  const formik = useFormik({
    initialValues: props.data || {
      reportType: "",
      reportDate: "",
      document: "",
      description: "",
      opdId: ""
    },
    enableReinitialize: true,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      if(typeof(values.document)=='string')
      delete values.document
      console.log(values)
      PostFormdata("opdDiagnosis/", "POST", {
        ...values,
        opdId: patientId
      }).then(data => {
        if(values.id){
props.setdataSrc(item=>item.map(item1=>item1.id==data.id?data:item1))
        }else{
          props.setdataSrc(item=>[data,...item])
        }
        window.$('#addDiagnosis').modal('hide')
      });
    },

    validationSchema: Yup.object().shape({
      reportType: Yup.string().required("*Required Report Type")
    })
  });

  return (
    <div
      class="modal fade"
      id="addDiagnosis"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content" role="document">
          <div className="card ">
            <div className="card-header bg-primary">
              Add Diagnosis
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
                <div className="border bg-light p-3">
                  <div>Report Type</div>
                  <input
                    type="text"
                    className="form-control mt-1"
                    value={formik.values.reportType}
                    onChange={e =>
                      formik.setFieldValue("reportType", e.target.value)
                    }
                  ></input>
                  <span className="text-danger">
                    {formik.touched.reportType && formik.errors.reportType
                      ? formik.errors.reportType
                      : ""}
                  </span>
                  <div className="mt-2">Report Date</div>
                  <div className=" ">
                    <DatePicker
                      className="form-control "
                      style={{ width: "100% !important" }}
                      selected={
                        new Date(formik.values.reportDate) == "Invalid Date"
                          ? ""
                          : new Date(formik.values.reportDate)
                      }
                      customInput={<input className="form-control" />}
                      onChange={data =>
                        formik.setFieldValue("reportDate", data)
                      }
                    />
                  </div>
                  <span className="text-danger">
                    {formik.touched.date && formik.errors.date
                      ? formik.errors.date
                      : ""}
                  </span>

                  <div className="mt-2">Document</div>
                  <input
                    type="file"
                    className="form-control mt-1"
                    onChange={e =>
                      formik.setFieldValue("document", e.target.files[0])
                    }
                  ></input>
                  <div className="mt-2">Description</div>
                  <textarea
                    className="form-control mt-1"
                    rows="3"
                    value={formik.values.description}
                    onChange={e =>
                      formik.setFieldValue("description", e.target.value)
                    }
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-2 ">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
