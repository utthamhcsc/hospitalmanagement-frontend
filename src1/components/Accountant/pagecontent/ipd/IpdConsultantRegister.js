import React from "react";
import ReactDOM from "react-dom";
import { NavLink, BrowserRouter, Link, useHistory, useParams } from "react-router-dom";
import Table from "../../../Table";
import { Getdata, Postdata } from "../../../../Network/Server";
import DisplayForm from "../../../../Forms/DisplayForm";
import AddConsultantInstruction from "../../../../Forms/IPDForms/AddConsultantInstruction";
import EditConsultantInstruction from "../../../../Forms/IPDForms/EditConsultantInstruction";

export default (props) =>{
  const [index, setindex] = React.useState({});
  const history = useHistory();
  const {patientId}=useParams();
  //const [patientId,setPatientId]=React.useState('');
  const column = [
    { data: "appliedDate", title: "Applied Date",render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString() },
    { data: "instruction", title: "Instruction" },
    { data: "doctorName", title: "Consultant" },
    { data: "instructionDate", title: "Instruction Date" ,render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()},
    { data: "action", title: "Action" }
  ];
  const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs = [
    {
      targets: -1,
      orderable: false,
      responsivePriority: 1,
      createdCell: (td, cellData, rowData, row, col) =>
        ReactDOM.render(<BrowserRouter>
          <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} title='view Details' data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
         
         
         
          </BrowserRouter>,
          td
        )
    }
  ];
  const link = <NavLink to="dfgh" />;
  React.useEffect(() => {
    Getdata("myipdconsultantregister/get/"+patientId).then(data => {
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
              Consultant Register
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
               
                onClick={() =>
                history.push(`/accountant/myIpd/prescription/${patientId}`)
              }
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Prescription
              </button>
              
              <button
               
                onClick={() =>
                history.push(`/accountant/myIpd/charges/${patientId}`)
              }
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Charges
              </button>
              <button
               
                onClick={() =>
                history.push(`/accountant/myIpd/diagnosis/${patientId}`)
              }
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Diagnoses
              </button>
              <button
               
                onClick={() =>
                history.push(`/accountant/myIpd/payment/${patientId}`)
              }
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Payment
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
       
      </div>
    </>
  );
}
