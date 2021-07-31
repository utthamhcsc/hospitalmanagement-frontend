import React from "react";
import ReactDOM from "react-dom";
import { NavLink, BrowserRouter, Link, useHistory, useParams } from "react-router-dom";
import Table from "../../../Table";
import { Getdata, Postdata } from "../../../../Network/Server";
import DisplayForm from "../../../../Forms/DisplayForm";
import AddPayment from "../../../../Forms/IPDForms/AddPayment";
import swal from 'sweetalert'
export default (props)=> {
  
  const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
     
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Getdata(url+'/'+val).then(setdataSrc(data=>data.filter(item=>item.id!=val)))
      
      } 
    });
   }
  let history=useHistory();
  let { patientId } = useParams();
  const [index,setindex]=React.useState({});
const column=[{data:'date',title:'Date',render:
(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()
},{data:'amount',title:'Amount'},
{data:'note',title:'Note'},
{data:'paymentMode',title:'Payment Mode'},
{data:'attachDocument',title:'Document'},
{data:'action',title:'Action'}]
const [dataSrc,setdataSrc]=React.useState([]);const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
  <BrowserRouter>
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-info'} title='view Details' data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
 
  <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-warning'} title='add prescription'  data-toggle='modal' data-target='#addPayment'><i className='fa fa-pencil' data-tip='hello'></i></button>
  
  <button onClick={()=>deletealert(`myipdpayment/delete`,`${rowData.id}`)} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>

  </BrowserRouter>,td)}
]
const Link=<NavLink to='dfgh'/>
//React.useEffect(()=>{Getdata('opdoutpatient').then(data=>{console.log(data);setdataSrc(data)});},[])
React.useEffect(()=>{
//alert(patientId)
Getdata('myipdpayment/get/'+patientId).then(data=>{setdataSrc(data);console.log(data)});},[])


  return (
    <>
    <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >IPD Payment</h5>
<div className='btn-group '>          <button
                className={"btn btn-xs  btn-primary ml-1 "}
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
                class="btn btn-primary text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Prescription
              </button>
              
              <button
               
                onClick={() =>
                history.push(`/admin/myIpd/charges/${patientId}`)
              }
                class="btn btn-primary text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Charges
              </button>
              <button
               
                onClick={() =>
                history.push(`/admin/myIpd/consultantRegister/${patientId}`)
              }
                class="btn btn-primary text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Consutant Register
              </button>
              <button
               
                onClick={() =>
                history.push(`/admin/myIpd/diagnosis/${patientId}`)
              }
                class="btn btn-primary text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-reorder"></i> Diagnoses
              </button>
            
              <button
                data-toggle="modal"
                data-target="#addPayment"
                
                class="btn btn-primary text-xs  btn-xs  ml-1"
              >
                {" "}
                <i class="fa fa-plus"></i> Add Payment
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
    <AddPayment data={index} setdataSrc={setdataSrc}/>
      </div>
      </div>
    </>
  );
}
