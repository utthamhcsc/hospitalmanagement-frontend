import React from "react";
import ReactDOM from "react-dom";
import { NavLink, BrowserRouter, Link, useHistory, useParams } from "react-router-dom";
import Table from "../../../Table";
import { Getdata, Postdata } from "../../../../Network/Server";
import DisplayForm from "../../../../Forms/DisplayForm";
import AddDiagnosis from "../../../../Forms/IPDForms/AddDiagnosis";

export default (props)=> {
  const [index1, setindex1] = React.useState({});
  const history = useHistory();
  const {patientId}=useParams();
  const [index,setindex]=React.useState();
  const column=[{data:'reportType',title:'Report Type'},
  {data:'reportDate',title:'Report Date',
  render:( data, type, row, meta )=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()

},{data:'description',title:'Description'},{data:'action',title:'Action'}]
  const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
  <BrowserRouter>
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} title='view Details' data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
 
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-light'} 
data-toggle='modal' data-target='#addDiagnosis'>
    <i className='fa fa-pencil' data-tip='hello'></i></button>
  
  <button onClick={()=>Getdata(`myipddiagnosis/delete/${rowData.id}`).then(data=>setdataSrc(item=>item.filter(item=>item.id!=data.id)))} className={'btn btn-xs btn-light'} ><i className='fa fa-trash'></i></button>
 
  </BrowserRouter>,td)}]
  
  React.useEffect(()=>{Getdata('myipddiagnosis/get/'+patientId).then(data=>setdataSrc(data));},[])

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
             <i class="fas fa-diagnoses    "></i> Ipd Diagnoses
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
                history.push(`/admin/myIpd/prescription/${patientId}`)
              }
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Prescription
              </button>
              
              <button
               
                onClick={() =>
                history.push(`/admin/myIpd/charges/${patientId}`)
              }
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Charges
              </button>
              <button
               
                onClick={() =>
                history.push(`/admin/myIpd/consultantRegister/${patientId}`)
              }
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Consutant Register
              </button>
             
              <button
               
                onClick={() =>
                history.push(`/admin/myIpd/payment/${patientId}`)
              }
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Payment
              </button>
              <button
                data-toggle="modal"
                data-target="#addDiagnosis"
                onClick={() => setindex({})}
                class="btn btn-light text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-plus"></i> Add Diagnoses
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
        <DisplayForm data={index} />
        <AddDiagnosis data={index} setdataSrc={setdataSrc}/>
      </div>
    </>
  );
}
