import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Getdata } from '../../../../Network/Server';
import AddCharges from '../../../../Forms/OPDForms/AddCharges';

export default function Bill() {
    const {patientId}=useParams();
    const [payment,setpayment]=useState([])
    const [charge,setcharge]=useState([])
    const [opd,myopd]=useState({})
    const [mycharge,setmycharge]=useState('')
    const [mypayment,setmypayment]=useState('')
    const [discount,setdiscount]=useState('')
    const [tax,settax]=useState('')
    const [otherCharge,setOtherCharge]=useState('')

    React.useEffect(()=>{
        //alert(patientId)
        Getdata('myopdpayment/get/'+patientId)
        .then(data=>{setpayment(data||[]);console.log(data);
        setmypayment(data.reduce((prev,next)=>next.amount+prev,0))
        });
        Getdata('myopdcharges/get/'+patientId)
        .then(data=>{setcharge(data||[]);console.log(data)
        setmycharge(data.reduce((prev,next)=>next.appliedCharge+prev,0))
        });
        Getdata('myopd/get/opd/'+patientId)
        .then(data=>{myopd(data);console.log(data)});
    
    },[])
       



    return (
        
        <>
        <nav aria-label="breadcrumb" >
        <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
        <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
        <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Opd Bill</h6>
        <div className='btn-group p-0'>
        <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
        <NavLink to={`/receptionist/myopd/diagnosis/${patientId}`}  
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/> Diagnosis</NavLink>  
    <NavLink to={`/receptionist/myopd/charges/${patientId}`} 
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Charges</NavLink>  
    <NavLink to={`/receptionist/myopd/payment/${patientId}`} 
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Payment</NavLink>  
    <NavLink to={`/receptionist/myopd/bill/${patientId}`} 
    class="btn btn-light text-xs  btn-xs  ml-1"><i className='fa fa-reorder'/>  Bill</NavLink>  
   
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

                                                        {
                                                            charge.map(item=>
                                                                <tr>
                                                                    <td>{item.chargeType}</td>
                                                                    <td>{item.chargeCategory}</td>
                                                                    <td>{new Date(item.date)=='Invalid Date'?'':new Date(item.date).toLocaleDateString()}</td>
                                                                    <td>{item.appliedCharge}</td>
                                                                    </tr>
                                                            )
                                                        }
                                                                                                        <tr class="box box-solid total-bg">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                    <td class="text-right">Total : {mycharge}</td>
        
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
                                                        {
                                                            payment.map(item=>
                                                                <tr>
                                                                    <td>{item.paymentMode}</td>
                                                                    <td>{new Date(item.date)=='Invalid Date'?'':new Date(item.date).toLocaleDateString()}</td>
                                                                    <td>{item.amount}</td>
                                                                    </tr>
                                                            )
                                                        }
        
                                                                                                        <tr class="box box-solid total-bg">
                                                            <td></td>
                                                            <td></td>
        
                                                            <td class="text-right">Total  :   {mypayment}</td>
        
                                                        </tr>
                                                    </tbody></table>
        
                                                </div>
                                                                    
                              <div className="">                  
                                <ul class="list-group mt-2 border p-2">
        
                                     <li class="list-group-item  text-center bg-light ">
                                       <b> Bill Summary</b>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0">
                                        <b>Consultant Charges (Paid) ($)</b> <a class="pull-right text-aqua">{opd && opd.appliedCharge}</a>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0 ">
                                                    <b>Total Charges ($)</b> <a class="pull-right text-aqua">{mycharge}</a>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0 ">
                                        <b>Other Charges ($)</b><input type="number" 
                                        value={otherCharge}
                                        onChange={(e)=>setOtherCharge(e.target.value)}
                                        className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0">
                                        <b>Discount(%)</b> <input type="number" 
                                        onChange={(e)=>{
                                            setdiscount((mycharge+(opd?opd.appliedCharge:0)-e.target.value)/100)
                                        }}
                                        className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0">
                                        <b>Discount($)</b> <input type="number"
                                        value={discount}
                                        className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0">
                                        <b>Tax(%)</b> 
                                        <input type="number" 
                                        onChange={(e)=>{
                                            settax((mycharge+(opd?opd.appliedCharge:0)-discount+e.target.value)/(100))
                                        }}
                                        className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0">
                                        <b>Tax ($)</b> <input type="number" 
                                        value={tax}
                                        className="pull-right text-aqua border-top-0 border-left-0 border-right-0"/>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0">
                                        <b>Gross Total ($)</b> <a class="pull-right text-aqua">{tax}</a>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0">
                                        <b>Total Payment ($)</b> <a class="pull-right text-aqua">{mypayment}</a>
                                    </li>
        
                                    <li class="list-group-item py-2 text-sm border-0">
                                        <b>Net Payable Amount ($)</b> <a class="pull-right text-aqua">{mycharge+(opd?opd.appliedCharge:0)+tax-discount-mypayment}</a>
                                    </li>
                                 </ul>
                                 </div>
                                 <span class="pull-right"></span>
                                 <a href="#" class="btn btn-sm btn-info mt-2" onclick="printBill('13', '19')">Calculate</a>
                                 {/* <button  class="btn btn-sm btn-info mt-2" onClick={()=>BillPrint('bill_print')}>Print</button>
          */}
                            </div>
                       </div>
                   </div>
                </>
        
    )
}
