import React from "react";
import { useFormik } from "formik";
import { Postdata, Getdata } from "../../../Network/Server";
export default function(props) {
  const [tpa, settpa] = React.useState([]);
  const [doctor, setDoctor] = React.useState([]);
 const [data,setData]=React.useState([]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...props.data
    },
    onSubmit: values => {
      console.log({...values,doctorName:data[values.doctorId]});
      Postdata('doctorOpdCharge/add','POST',{...values,doctorName:data[values.doctorId]}).then(res=>{
       console.log(res)
        if(values.id)
         props.setdataSrc(data=>data.map(item=>item.id==res.id?res:item))
        else
          props.setdataSrc(data=>[res,...data])
          
      })
      //props.setdataSrc(data=>data.map(item=>item.id==values.id?values:values.id?values))
      //    props.setdataSrc(data=>[...data,values])
      window.$('#addDoctorCharge').modal('hide')
    }
  });
  const applytoAll = () => {
    formik.values.organisationCharges.forEach((item, index) =>
      formik.setFieldValue(
        `organisationCharges.${index}.charges`,
        formik.values.standardCharge
      )
    );
  };
  React.useEffect(() => {
      
    Getdata("fetchalluser/doctor").then(data =>{
        setData(data);
        setDoctor(
          Object.keys(data||{}).map(item => {
            return {
                doctorId:item,
              name:data[item],
                         };
          })
        )
         } );
    Getdata("organisation/get").then(data =>
      settpa(
        (data || []).map(item => {
          return {
            organisationId: item.id,
            charges:0,
            organisationName: item.organisationName
          }
        })
      )
    );
  }, []); 
  
  React.useEffect(() => {
    //alert(JSON.stringify(props.data.organisationCharges,null,2))
    if (props.data.organisationCharges)
      formik.setFieldValue(
        "organisationCharges",
        tpa.map(item => {
          let a = "";
          props.data.organisationCharges.forEach(element => {
            if (element.organisationId == item.organisationId) {
              // alert(JSON.stringify(element,null,2))
              a = element;
            }
          });
          if (a == "") {
            a = {...item,organisationId:item.organisationId};
          }
          return a;
        })
      );
  }, [props.data]);

  return (
    <div
      className="modal fade in"
      id="addDoctorCharge"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content modal-media-content">
          <div className="modal-header bg-primary align-items-baseline p-2">
            <h6 className="box-title">Add Doctor Charge</h6>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body pt0 pb0">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 paddlr">
                <form
                  id="formadd"
                  acceptCharset="utf-8"
                  method="post"
                  className="ptt10"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Doctor</label>
                        <small className="req"> *</small>
                        <select
                          name="charge_type"
                          {...formik.getFieldProps("doctorId")}
                          className="form-control"
                        >
                          <option value>Select</option>
                          {
                              doctor.map(item=><option value={item.doctorId}>{item.name}</option>)
                          }
                          
                                                  </select>
                        <span className="text-danger" />
                      </div>
                      
                      <div className="form-group">
                        <label>Standard Charge ($)</label>
                        <small className="req"> *</small>
                        <input
                          type="text"
                          name="standard_charge"
                          id="standard_charge"
                          className="form-control"
                          {...formik.getFieldProps("standardCharge")}
                        />
                        <span className="text-danger" />
                      </div>
                     
                    
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <label>Scheduled Charges For TPA</label>
                      <button
                        type="button"
                        className="btn btn-xs btn-warning mx-1"
                        onClick={applytoAll}
                      >
                        Apply to all
                      </button>
                      <div className="chargesborbg border py-2">
                        <div className="form-group">
                          <table className="">
                            <tbody className="p-4">
                              {tpa.map((item, index) => (
                                <tr className="p-1">
                                  <td
                                    className="col-sm-6 text-sm"
                                    style={{
                                      verticalAlign: "bottom",
                                      textAlign: "right"
                                    }}
                                  >
                                    {item.organisationName}
                                  </td>
                                  <td className="col-sm-6">
                                    <input
                                      type="text"
                                      name="schedule_charge[]"
                                      autoComplete="off"
                                      style={{
                                        borderTop: "none",
                                        borderLeft: "none",
                                        borderRight: "none"
                                      }}
                                      value={`organisationCharges.${index}.charges`}
                                      {...formik.getFieldProps(`organisationCharges.${index}.charges`)}
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <span className="text-danger" />
                        </div>
                        </div>

                    </div>
                  </div>
                  {/*./row*/}
                </form>
              </div>
              {/*./col-md-12*/}
            </div>
            {/*./row*/}
          </div>

          <div className="box-footer">
            <button
              type="submit"
              id="formaddbtn"
              onClick={formik.handleSubmit}
              className="btn btn-primary pull-right"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
