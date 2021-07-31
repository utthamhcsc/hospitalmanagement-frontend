import React from "react";
import ReactDOM from "react-dom";
import { NavLink, BrowserRouter, Link, useHistory } from "react-router-dom";
import Table from "../../../Table";
import { Getdata, Postdata } from "../../../../Network/Server";
import DisplayForm from "../../../../Forms/DisplayForm";
import AddIpdPat from '../../../../Forms/IPDForms/IPDAddpat'
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
  const [dataSrc,setdataSrc]=React.useState([]);
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
              className={"btn btn-xs btn-info"}
              data-toggle="modal"
              data-target="#viewDetails"
            >
              <i className="fa fa-eye"></i>
            </button>
            <button
              onClick={() => setindex1(rowData)}
              className={"btn btn-xs btn-warning"}
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
              className={"btn btn-xs btn-primary"}
             
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
                history.push(`/admin/myIpd/consultantRegister/${rowData.ipd.ipdId}`)
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
    Getdata("myIpd/get/status/NO").then(data => {
      console.log(data);
    setdataSrc(data);
    });
  }, []);

  return (
    <>
      <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >IPD Patients</h5>
<div className='btn-group '>
              <button
                className={"btn btn-xs  btn-primary ml-1 "}
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
                class="btn btn-primary text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-plus"></i> Add Patient
              </button>
              <button
                onClick={() =>history.push('/admin/myIpd/discharge') }
                class="btn btn-primary text-xs  btn-xs  ml-1"
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
      </div>
    </>
  );
}
