import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import ReactDatePicker from "react-datepicker";
import { Postdata, Getdata } from "../../Network/Server";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

export default props => {
  const { patientId } = useParams();
  const [charge,setCharge]=useState([]);
  const [chargeCategory, setChargecategory] = useState([]);
  const [tpa, settpa] = useState([]);
  const [code, setcode] = useState([]);
  const formik = useFormik({
    initialValues:props.data||{
      ipdId:patientId,
      chargeType: "",
      chargeCategory: "",
      description: "",
      code: "",
      standardCharge: "",
      date: "",
      status: "",
      tpaCharge: "",
      appliedCharge: ""
    },
    enableReinitialize:'true',
    onSubmit: values => {
      console.log(values)
      values.ipdId=patientId
      Postdata("myipdcharges/add", "POST", values).then(data =>{
       console.log(data)
       if(values.id){
        props.setdataSrc(item=>(item||[]).map(item1=>item1.id==data.id?data:item1))
                }else{
                  props.setdataSrc(item=>[data,...item])
                }
                window.$('#add_chargeModal').modal('hide')
              }       
       );
    },

    validationSchema: Yup.object().shape({
      date: Yup.date().required("*Required Date"),
      chargeType: Yup.string().required("*Required Charge Type "),
      chargeCategory: Yup.string().required("*Required Charge Category")

      //attachedDocument:null
    })
  });

  const fetchByCharges = val => {
    Getdata("chargesCategory/get/" + val).then(data => {
      console.log(data);
      setChargecategory(data);
    });
  };

  const fetchBychargeTypeAndCahrgeCategory = val => {
    Getdata(
      "organisationCharges/get/" + formik.values.chargeType + "/" + val
    ).then(data => {
      console.log(data);
      setcode(data);
    });
  };

  useEffect(() => {
    Getdata("organisation/get").then(data => {
      settpa(data || []);
      console.log(data);
    });
  }, []);
  useEffect(() => {
   if(props.data && props.data.chargeType){
     fetchByCharges(props.data.chargeType)
     if(props.data.chargeCategory){
      Getdata(
        "organisationCharges/get/" + props.data.chargeType + "/" + props.data.chargeCategory
      ).then(data => {
        console.log(data);
        setcode(data);
      });
     }
   }
  }, [props.data]);
  return (
    <div
      class="modal fade in"
      id="add_chargeModal"
      role="dialog"
      aria-divledby="myModaldiv"
      aria-hidden="false"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content ">
          <div class="modal-header p-2 bg-primary">
            <div class="box-title text-sm">
              <b>Add Charges</b>
            </div>
            <button type="button" class="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div class="modal-body pt0 pb0">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 paddlr">
                <form
                  id="add_charges"
                  accept-charset="utf-8"
                  method="post"
                  class="ptt10"
                >
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
                        <div>
                          Date <small class="req"> *</small>{" "}
                        </div>
                        <ReactDatePicker
                        minDate={new Date()}
                          className="form-control"
                          selected={new Date(formik.values.date)=='Invalid Date'?'':new Date(formik.values.date)}
                          onChange={e => formik.setFieldValue("date", e)}
                        />
                      </div>
                      <span className="text-danger">
                        {formik.touched.date && formik.errors.date
                          ? formik.errors.date
                          : ""}
                      </span>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <div>
                          Charge Type<small class="req"> *</small>{" "}
                        </div>

                        <select
                          name="charge_type"
                          value={formik.values.chargeType}
                          onChange={e => {
                            formik.setFieldValue("chargeType", e.target.value);
                            fetchByCharges(e.target.value);
                          }}
                          class="form-control"
                        >
                          <option value="">Select</option>
                          <option value="Procedures">Procedures </option>
                          <option value="Investigations">
                            Investigations{" "}
                          </option>
                          <option value="Supplier">Supplier </option>
                          <option value="Operation Theatre">
                            Operation Theatre{" "}
                          </option>
                          <option value="Others">Others </option>
                        </select>
                        <span class="text-danger"></span>
                      </div>
                      <span className="text-danger">
                        {formik.touched.chargeType && formik.errors.chargeType
                          ? formik.errors.chargeType
                          : ""}
                      </span>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <div>
                          Charge Category<small class="req"> *</small>{" "}
                        </div>

                        <select
                          name="charge_category"
                          id="charge_category"
                          class="form-control w-100 select2 select2-hidden-accessible"
                          value={formik.values.chargeCategory}
                          onChange={e => {
                            formik.setFieldValue(
                              "chargeCategory",
                              e.target.value
                            );
                            fetchBychargeTypeAndCahrgeCategory(e.target.value);
                          }}
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="">Select</option>
                          {(chargeCategory || []).map(item => (
                            <option>{item.chargeCategory}</option>
                          ))}
                        </select>
                        <span class="text-danger"></span>
                      </div>
                      <span className="text-danger">
                        {formik.touched.chargeCategory &&
                        formik.errors.chargeCategory
                          ? formik.errors.chargeCategory
                          : ""}
                      </span>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <div>
                          Code<small class="req text-danger"> *</small>{" "}
                        </div>

                        <select
                          name="code"
                          id="code"
                          class="form-control w-100 select2 select2-hidden-accessible"
                          onChange={(e)=>{
                              var a=JSON.parse(e.target.value)
                              formik.setFieldValue('code',a?a.code:'')
                              formik.setFieldValue('standardCharge',a?a.standardCharge:'')
                              formik.setFieldValue('appliedCharge',a?a.standardCharge:'')
                              setCharge(a.organisationCharges||[])
                              if(formik.values.tpaCharge==''){
                               
                              }
                              else{
                                var data=(a.organisationCharges||[]).filter(data=>data.organisationId==formik.values.tpaCharge);
                                 formik.setFieldValue('appliedCharge',(data||[]).length>0?data[0].charges:'')      
                            }

                          }}
                          
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value={{}}>Select</option>

                          {(code || []).map(item => (
                            <option value={JSON.stringify(item)}>{item.code}</option>
                          ))}
                        </select>
                        <span class="text-danger"></span>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <div>Standard Charge ($)</div>
                        <input
                        
                          type="text"
                          class="form-control"
                          {...formik.getFieldProps("standardCharge")}
                        />

                        <span class="text-danger"></span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <div>TPA Charge ($)</div>
                        <select
                          class="form-control w-100 select2 select2-hidden-accessible"
                          value={formik.values.tpaCharge}
                          onChange={
                            (e)=>{
                              formik.setFieldValue('tpaCharge',e.target.value)
                              if(formik.values.code!=''){
                               charge.forEach((item)=>{
                                   if(item.organisationId==e.target.value){
                                    formik.setFieldValue('appliedCharge',item.charges)
                                   }
                               })
                              }
                            }
                          }
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="">Select</option>

                          {(tpa || []).map(item => (
                            <option value={item.id}>
                              {item.organisationName}
                            </option>
                          ))}
                        </select>{" "}
                        <span class="text-danger"></span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <div>
                          Applied Charge ($)<small class="req"> *</small>
                        </div>
                        <input
                        readOnly
                          type="text"
                          name="apply_charge"
                          id="apply_charge"
                          {...formik.getFieldProps("appliedCharge")}
                          class="form-control"
                        />
                        <span class="text-danger"></span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="add_chargesbtn"
                    onClick={formik.handleSubmit}
                    class="btn btn-primary pull-right"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
