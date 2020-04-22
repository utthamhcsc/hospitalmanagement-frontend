import React from "react";
import ReactDOM from "react-dom";
import { NavLink, BrowserRouter, Link, useHistory } from "react-router-dom";
import Table from "../../../Table";
import { Getdata, Postdata } from "../../../../Network/Server";
import DisplayForm from "../../../../Forms/DisplayForm";
import AddIpdPat from '../../../../Forms/IPDForms/DocterIpdAddPatient'
export default function Ipd(props) {
  const [index, setindex] = React.useState({});
  const [index1, setindex1] = React.useState({});
  
  const history = useHistory();
  //const [patientId,setPatientId]=React.useState('');
  const column = [
    { data: "name", title: "Name" },
    { data: "ipd.ipdId", title: "Ipd No" },
    { data: "gender", title: "Gender" },
    { data: "phone", title: "Phone" },
    { data: "doctorName", title: "Consultant" },
    { data: "ipd.bedNumber", title: "Bed Number" },
    { data: "charge", title: "Charges",responsivePriority:4 },
    { data: "payment", title: "Payment" ,responsivePriority:3},
    { data: "duePayment", title: "Due Payment",responsivePriority:2 },
    { data: "ipd.creditLimit", title: "Credit Limit" },
    { data: "action", title: "Action" }
  ];
  const [dataSrc, setdataSrc] = React.useState([
    {
      name: "Rama",
      patientId: "P-20200212115220",
      gender: "male",
      mobileNumber: "8861129756",
      appointmentDate: "2020/02/04",
      totalVisit: 2
    }
  ]);
  const columnDefs = [
    {
      targets: -1,
      orderable: false,
      responsivePriority: 1,
      createdCell: (td, cellData, rowData, row, col) =>
        ReactDOM.render(
          <BrowserRouter>
            <button
              onClick={() => setindex(rowData)}
              className={"btn btn-xs btn-light"}
              data-toggle="modal"
              data-target="#viewDetails"
            >
              <i className="fa fa-eye"></i>
            </button>
            <button
              onClick={() => setindex1(rowData)}
              className={"btn btn-xs btn-light"}
              data-toggle="modal"
              data-target="#AddipdPatient"
            >
              <i className="fa fa-pencil"></i>
            </button>
            
            <button
              onClick={() =>  Postdata('myIpd/discharge','POST',rowData.ipd).then(
                data=>{
                  console.log(data)
                  setdataSrc(item=>item.filter(item1=>item1.ipd.ipdId!=data.ipdId))
                }
              )}
              className={"btn btn-xs btn-light"}
             
            >
              Discharge
            </button>
          </BrowserRouter>,
          td
        )
    },
    {
      targets: 0,
      orderable: false,
      responsivePriority: 1,
      createdCell: (td, cellData, rowData, row, col) =>
        ReactDOM.render(
          <BrowserRouter>
            <button
              className={"btn btn-link"}
              onClick={() =>
                history.push(`/doctor/myIpd/consultantRegister/${rowData.ipd.ipdId}`)
              }
            >
              {cellData}
            </button>
          </BrowserRouter>,
          td
        )
    }
  ];
  const link = <NavLink to="dfgh" />;
  React.useEffect(() => {
    Getdata("myIpd/get/doctor/"+window.localStorage.getItem('userId') +"/NO").then(data => {
      console.log(data);
    setdataSrc(data);
    });
  }, []);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="p-2 px-5" style={{ backgroundColor: "#3f51b5" }}>
          <li
            class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline"
            aria-current="page"
          >
            <h6
              className="text-sm"
              style={{ letterSpacing: "1px", lineHeight: "100%" }}
            >
              Ipd Patient
            </h6>
            <div className="btn-group p-0">
              <button
                className={"btn btn-xs  btn-light ml-1 "}
                style={{ marginLeft: "0.5px !important", opacity: 0 }}
                data-toggle="modal"
                data-target="sdf"
              >
                dfgh
              </button>
              <button
                data-toggle="modal"
                data-target="#AddipdPatient"
                onClick={() => setindex1({ipd:{}})}
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-plus"></i> Add Patient
              </button>
              <button
                onClick={() =>history.push('/doctor/myIpd/discharge') }
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
               <i className='fa fa-reorder'/> Discharge Patient
              </button>
             
            </div>
          </li>
        </ol>
      </nav>
      <div className="px-5 pb-5">
        <Table
          id="addOpdPatient"
          col={column}
          dataSrc={dataSrc}
          columnDefs={columnDefs}
        />
        <DisplayForm data={index.ipd} />
        <AddIpdPat data={index1.ipd}/>
      </div>
    </>
  );
}
