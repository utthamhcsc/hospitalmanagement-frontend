import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter,useParams} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import DisplayForm from '../../../Forms/DisplayForm'
import AddPat from '../../../Forms/OPDForms/AddPat'
import Addprescription from '../../../Forms/Addprescription'
import ReactTooltip from 'react-tooltip'
import DisplayPriscription from '../../../Forms/DisplayPriscription'
import AddCharges from '../../../Forms/AddCharges'
export default function OpdCharges(props)
{
    let { patientId } = useParams();
    const [index,setindex]=React.useState({});
    const column=[{data:'date',title:'Date'},{data:'chargeType',title:'Charge Type'},{data:'chargeCategory',title:'Charge Category'},{data:'standardCharge',title:'Stardard Charge'},{data:'TPACharge',title:'TPA Charge'},{data:'appliedCharge',title:'Applied Charge'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([{name:'opd123',patientId:'2019/12/12',gender:'Dr Covinda',mobileNumber:'Refe123',appointmentDate:'corona',totalVisit:2}]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
   
      <ReactTooltip/>
   </BrowserRouter>,td)},
   {targets:0,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
    <BrowserRouter>
      <NavLink to='/jaisriram'>{cellData}</NavLink>
   </BrowserRouter>,td)}
  ]
const Link=<NavLink to='dfgh'/>


const BillPrint=(data)=>{
    alert(data);
    var mywindow = window.open('', 'my div', 'height=400,width=600');
        mywindow.document.write('<html><head><title>my div</title>');
        /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
        mywindow.document.write('</head><body >');
        mywindow.document.write(document.getElementById(data).innerHTML);
        mywindow.document.write('</body></html>');

        mywindow.print();
        mywindow.close();

        return true;
}







//React.useEffect(()=>{Getdata('opdoutpatient').then(data=>{console.log(data);setdataSrc(data)});},[])
React.useEffect(()=>{
  //alert(patientId)
  Getdata('opdoutpatient/patient/'+patientId).then(data=>{setdataSrc(data);console.log(data)});},[])
return (
<>
<nav aria-label="breadcrumb" >
<ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
<li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
<h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Opd Bill</h6>
<div className='btn-group p-0'>
<button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
{/* 
<NavLink to={`/receptionist/opdPatient/${patientId}`} class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder ml-1'/> Visits</NavLink>   */}
<NavLink to={`/receptionist/diagnosis/${patientId}`} class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder ml-1'/> Diagnosis</NavLink>  
<NavLink to={`/receptionist/patient/charges/${patientId}`} class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder ml-1'/> Charges</NavLink>  
</div>
</li>
</ol>
</nav>
<div className='px-5 pb-5' id='bill_print'>
<div className='row'>
<div class="col-md-6">
                                        <h4 class="box-title mt0">Charges</h4>
                                        <div class="table-responsive" style={{border: '1px solid #dadada',borderRadius: '2px', padding: '10px'}}>

                                            <table class="nobordertable table table-striped">
                                                <tbody><tr>
                                                    <th width="16%">Charges </th>
                                                    <th width="16%">Category</th>
                                                    <th width="19%">Date</th> 
                                                    <th width="16%" class="pttright reborder">Amount ($) </th>
                                                </tr>
                                                                                                <tr class="box box-solid total-bg">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td class="text-right">Total :   $0</td>

                                                </tr>
                                            </tbody></table>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <h4 class="box-title mt0">Payment</h4>
                                        <div class="table-responsive" style={{border: `1px solid #dadada`,borderRadius: `2px`, padding: `10px`}}>

                                            <table class="nobordertable table table-striped">
                                                <tbody><tr>
                                                    <th width="20%" class="">Payment Mode</th>
                                                    <th width="16%" class="">Payment Date</th>
                                                    <th width="16%" class="text-right">Paid Amount ($) </th>
                                                </tr>

                                                                                                <tr class="box box-solid total-bg">
                                                    <td></td>
                                                    <td></td>

                                                    <td class="text-right">Total  :   $0</td>

                                                </tr>
                                            </tbody></table>

                                        </div>
                                                            
                      <div className="">                  
                        <ul class="list-group mt-2 border p-2">

                             <li class="list-group-item  text-center bg-light ">
                               <b> Bill Summary</b>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0">
                                <b>Consultant Charges (Paid) ($)</b> <a class="pull-right text-aqua">800</a>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0 ">
                                <b>Total Charges ($)</b> <a class="pull-right text-aqua">0</a>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0 ">
                                <b>Other Charges ($)</b><input type="number" className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0">
                                <b>Discount(%)</b> <input type="number" className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0">
                                <b>Discount($)</b> <input type="number" className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0">
                                <b>Tax(%)</b> <input type="number" className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0">
                                <b>Tax ($)</b> <input type="number" className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0">
                                <b>Gross Total ($)</b> <a class="pull-right text-aqua">0</a>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0">
                                <b>Total Payment ($)</b> <a class="pull-right text-aqua">0</a>
                            </li>

                            <li class="list-group-item py-2 text-sm border-0">
                                <b>Net Payable Amount ($)</b> <a class="pull-right text-aqua">500</a>
                            </li>
                         </ul>
                         </div>
                         <span class="pull-right">Bill Generated By : Sonia Bush (9002)</span>
                         <a href="#" class="btn btn-sm btn-info mt-2" onclick="printBill('13', '19')">Calculate</a>
                         {/* <button  class="btn btn-sm btn-info mt-2" onClick={()=>BillPrint('bill_print')}>Print</button>
  */}
                    </div>
               </div>
           </div>
        </>
    )
}
