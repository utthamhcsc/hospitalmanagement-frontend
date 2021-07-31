import React, { useState } from "react";
import { useFormik } from "formik";
import { PostFormdata, Postdata } from "../../../../Network/Server";

export default function SendIndividual() {
  const [searchData, setSearchData] = useState([]);
  const [myData, setMyData] = useState([]);
  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
      sendEmail: false,
      sendSms: false,
      messageList: [],
    },
    onSubmit: (v) => {
      v.messageList=myData.map(item=>item.email)
      console.log(v);

      Postdata("mysendemail/sendIndividual", "POST", v).then((res) => {
        console.log(res);
      });
    },
  });
  const formik1 = useFormik({
    initialValues: {
      role: "patient",
      user: "",
    },
    onSubmit: (v) => {
      console.log(v);
      PostFormdata("user/search", "POST", v).then((data) => {
        console.log(data);
        setSearchData(data);
      });
    },
  });
  return (
    <div className="tab-pane" id="tab_perticular">
      <form>
        {/* /.box-header */}
        <div className="box-body">
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label>Title</label>
                <small className="req"> *</small>
                <input
                  className="form-control"
                  {...formik.getFieldProps("title")}
                />
              </div>
              <div className="my-2 text-bold">
                Send Through<small className="text-danger"> *</small>
                <div className="ml-2 custom-control custom-checkbox custom-control-inline ">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="email"
                    onClick={(e) =>
                      formik.setFieldValue(
                        "sendEmail",
                        !formik.values.sendEmail
                      )
                    }
                    checked={formik.values.sendEmail}
                  />
                  <label class="custom-control-label" for="email">
                    Email
                  </label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="sms"
                    onChange={(e) =>
                     { formik.setFieldValue("sendSms", !formik.values.sendSms)
                  
                    }
                    }
                    checked={formik.values.sendSms}
                  />
                  <label class="custom-control-label" for="sms">
                    SMS
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <small className="req"> *</small>
                <textarea
                  rows="10"
                  {...formik.getFieldProps("message")}
                  className="form-control compose-textarea"
                />
                <span className="text-muted tot_count_individual_msg_text pull-right word_counter">
                  Character Count: 0
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="inpuFname">Message To</label>
                <small className="req"> *</small>
                <div className="input-group">
                  <div className="input-group-btn bs-dropdown-to-select-group">
                    <button
                      type="button"
                      className="btn btn-default btn-searchsm dropdown-toggle as-is bs-dropdown-to-select"
                      data-toggle="dropdown"
                    >
                      <span data-bind="bs-drp-sel-label">
                        {formik1.values.role}
                      </span>

                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" role="menu" style={{}}>
                      <li
                        onClick={() => formik1.setFieldValue("role", "patient")}
                      >
                        Patient
                      </li>
                      <li
                        onClick={() => formik1.setFieldValue("role", "admin")}
                      >
                        Admin
                      </li>
                      <li
                        onClick={() =>
                          formik1.setFieldValue("role", "accountant")
                        }
                      >
                        Accountant
                      </li>
                      <li
                        onClick={() => formik1.setFieldValue("role", "doctor")}
                      >
                        Doctor
                      </li>
                      <li
                        onClick={() =>
                          formik1.setFieldValue("role", "pharmacist")
                        }
                      >
                        Pharmacist
                      </li>
                      <li
                        onClick={() =>
                          formik1.setFieldValue("role", "pathologist")
                        }
                      >
                        Pathologist
                      </li>
                      <li
                        onClick={() =>
                          formik1.setFieldValue("role", "radiologist")
                        }
                      >
                        Radiologist
                      </li>
                      <li
                        onClick={() =>
                          formik1.setFieldValue("role", "receptionist")
                        }
                      >
                        Receptionist
                      </li>
                    </ul>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      formik1.setFieldValue("user", e.target.value)
                    }
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-primary btn-search add-btn"
                      onClick={formik1.handleSubmit}
                      type="button"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </span>
                  <div id="suggesstion-box" />
                </div>
              </div>
              <div className="dual-list list-right">
                <div className="well minheight260">
                  <div className="row">
                    <div className="col-md-12 h-50">
                      <ul className="list-group">
                        {(searchData || []).map((item) => (
                          <li className="list-group-item d-flex justify-content-between">
                            <div>{item.name}</div>
                            <div>
                              {" "}
                              <i
                                class="fa fa-plus-circle text-primary"
                                aria-hidden="true"
                                onClick={() => {
                                  setMyData([...myData, item]);
                                  setSearchData((data) =>
                                    data.filter((item1) => item1.id != item.id)
                                  );
                                }}
                              ></i>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="wellscroll">
                    <h5>selected {myData.length}</h5>
                    <ul className="list-group">
                      {(myData || []).map((item) => (
                        <li className="list-group-item d-flex justify-content-between">
                          <div>{item.name}</div>
                          <div>
                            {" "}
                            <i
                              class="fa fa-trash text-danger"
                              aria-hidden="true"
                              onClick={() => {
                                setMyData((data) =>
                                  data.filter((item1) => item1.id != item.id)
                                );
                                //setSearchData(data=>data.filter(item1=>item1.id!=item.id))
                              }}
                            ></i>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.box-body */}
        <div className="box-footer">
          <div className="pull-right">
            <button
              type="submit"
              className="btn btn-primary submit_individual"
              onClick={formik.handleSubmit}
            >
              <i className="fa fa-envelope-o" /> Send
            </button>
          </div>
        </div>
        {/* /.box-footer */}
      </form>
    </div>
  );
}
