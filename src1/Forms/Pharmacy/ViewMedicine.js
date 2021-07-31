import React from 'react'
import { Route } from 'react-router-dom'
import { Getdata } from '../../Network/Server';

export default (props)=> {
const [showMedicine,setShowMedicine]=React.useState(true);
const [showstock,setShowStock]=React.useState(false);
const [showbadstock,setShowbadstock]=React.useState(false);
const [stock,setstock]=React.useState([]);
const fetchmedidicinestock=(id)=>{
  Getdata('medicineBatchDetails/fetchbypharmacyId/'+id).then(data=>setstock(data));
}
const deletestock=(id)=>{
  Getdata('medicineBatchDetails/delete/'+id).then(data=>setstock(item=>item.filter(item1=>item1.id!=data)));
}
    return (

      <div className="modal fade in" id="viewMedicine" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" >
        <div className="modal-dialog modal-dialog-scollable modal-xl"  role="document">
           <div className="modal-content modal-media-content" style={{width:'100vw !important'}}>
            <div className="modal-header modal-media-header p-2 clear-fix">
              
            <h6 className="box-title">Medicine Details</h6> 
            
            <div>
              {
                (!showMedicine)? <button type="button" 
                 onClick={()=>{setShowMedicine(true);setShowStock(false);setShowbadstock(false)}}
                 className="btn btn-xs btn-light ml-1" >View Medicine Details </button>
           

                :''

              
              }
               {
                (!showstock)? 
                <button type="button" 
                onClick={()=>{setShowMedicine(false);
                  fetchmedidicinestock(props.id)
                  setShowStock(true);
                  setShowbadstock(false);}} 
                className="btn btn-xs btn-light ml-1"  >View Stock </button>
               
                :''

              
              }
             {
                (!showbadstock)? 
                <button type="button" 
                onClick={()=>{setShowMedicine(false);
                  setShowStock(false);
                  setShowbadstock(true)}} 
                  className="btn btn-xs btn-light ml-1" 
                  >View Bad stock </button>
               

                :''

              
              }
            
           
              <button type="button" className="btn btn-xs btn-light ml-1" data-toggle="tooltip" title="Close" data-dismiss="modal">close</button>
             </div>
            </div>
            <div className="modal-body pt0 pb0">
             { showMedicine?<div className="row">
                    <div className="col-lg-1 col-md-2 col-sm-4">
                      <img id="medicine_image" src="https://demo.smart-hospital.in/uploads/medicine_images/no_medicine_image.png" style={{width: '100px', height: '100px'}} />
                    </div>    
                    <div className="col-lg-11 col-md-10 col-sm-8 table-responsive">
                      <table className="table table-borderless">
                        <tbody><tr className='border-0'>
                            <th />
                            <td />
                            <th >Medicine Name</th>
                            <td ><span id="medicine_names">{props.medicineName}</span></td>
                            <th >Medicine Category</th>
                            <td ><span id="medicine_category_ids">{props.medicineCategory}</span>
                            </td>
                          </tr>
                          <tr className='border-0'> 
                            <th />
                            <td />
                            <th >Medicine Company</th>
    <td ><span id="medicine_companys">{props.medicineCompany}</span></td>
                            <th >Medicine Composition</th>
                          <td ><span id="medicine_compositions">{props.medicineComposition}</span>
                            </td>
                          </tr>
                          <tr className='border-0'>
                            <th />
                            <td />
                            <th >Medicine Group</th>
                            <td ><span id="medicine_groups">{props.medicineGroup}</span></td>
                            <th >Unit</th>
                            <td ><span id="units">30</span>
                            </td>
                          </tr>
                          <tr className='border-0'>
                            <th />
                            <td />
                            <th >Min Level</th>
    <td ><span id="min_levels">{props.minLevel}</span></td>
                            <th >Re-Order Level</th>
                            <td ><span id="reorder_levels">{props.reorderLevel}</span>
                            </td>
                          </tr>
                          <tr className='border-0'>                                  <th />
                            <td />
                            <th >VAT (%)</th>
    <td ><span id="vats" />{props.vat}</td>
                            <th >Unit/Packing</th>
                            <td ><span id="unit_packings">{props.unitPacking}</span>
                            </td>
                          </tr>
                          <tr className='border-0'>
                            <th />
                            <td />
                            <th >VAT A/C</th>
                            <td ><span id="vat_acs" />
                            {props.vatAc}
                            </td>
                          </tr>
                        </tbody></table>
                    </div>
                  {/*./col-md-12*/}       
            </div>:''}{/*./row*/}
{
  showstock?
  <div className='text-center'>
  <table className="table table-responsive" id="testreport" width="100%">
  <thead>
                              <tr role="row">
                                <th >Inward Date</th>
                                <th>Batch No</th>
                                <th >Expiry Date</th>
                                <th>Packing Qty ($)</th>
                                <th >Purchase Rate ($)</th>
                                <th >Amount ($)</th>
                                <th>Quantity</th>
                                <th>MRP ($)</th><th >Sale Price ($)</th>
                                <th >Action</th></tr>
</thead>
<tbody>{
stock && stock.length>0?
stock.map((data)=><tr>
<td>{data.inwardDate}</td>
<td>{data.batchNum}</td>
<td>{data.expiryDate}</td>
<td>{data.packingqty}</td>
<td>{data.purchasePrice}</td>
<td>{data.amount}</td>
<td>{data.quantity}</td>
<td>{data.mrp}</td>
<td>{data.saleprice}</td>
<td><button onClick={()=>deletestock(data.id)} className={'btn btn-xs'}><i className='fa fa-trash'/></button></td>
</tr>)
  :''}
  </tbody>
  </table>
  
  </div>
  
  :''
}

{
  showbadstock?<div>bad stock</div>:''
}









            </div>
          </div>
        </div>    
       </div>
    );
  }
