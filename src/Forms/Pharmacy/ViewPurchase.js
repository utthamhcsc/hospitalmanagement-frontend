import React from 'react'

export default (props)=> {
    return (

      <div className="modal fade in" id="viewPurchase" 
      role="dialog">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content modal-media-content">
            <div className="modal-header bg-primary p-2">
                
              <h6 className="box-title">Purchase Details</h6> 
              
           
              <button type="button" className="close" data-toggle="tooltip" title data-dismiss="modal" data-original-title="Close" autoComplete="off">×</button>
               </div>
            <div className="modal-body pt0 pb0">
              <div id="reportdata">
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>Bill</title>
                <div id="html-2-pdfwrapper" className="pup100">
                  <div className="row">
                    {/* left column */}
                    <div className="col-md-12">
                      <div className>
                        <table width="100%" className="printablea4">
                          <tbody><tr>
    <td className="text-left"><h6>Purchase No #{props.id}</h6>
                              </td>
    <td className="text-right"><h6>Date : {props.date? props.date.split("T")[0]:''}</h6>
                              </td>
                            </tr>
                          </tbody></table>
                        <hr style={{height: '1px', clear: 'both', marginBottom: '10px', marginTop: '10px'}} />
                        <table className="printablea4" cellSpacing={0} cellPadding={0} width="100%">
                          <tbody><tr>
                              <th width="20%">Supplier Name</th>
    <td width="25%">{props.itemSupplier}</td>
                              <th width="25%">Contact No</th>
                              <td width="30%" align="left">{props.phone}</td>
                            </tr>
                            <tr>
                              <th width="20%">Contact Person</th>
    <td width="25%">{props.contactPersonName}</td>
                              <th width="25%">Address</th>
    <td width="30%" align="left">{props.address}</td> 
                            </tr> 
                          </tbody></table>
                        <hr style={{height: '1px', clear: 'both', marginBottom: '10px', marginTop: '10px'}} />
                        <table className="table table-responsive" id="testreport" width="100%">
                          <tbody><tr>
                              <th>Medicine Category</th>
                              <th >Medicine Name</th> 
                              <th>Batch No</th>
                              <th>Expiry Date</th>
                              <th>MRP</th>
                              <th>Batch Amt</th>
                              <th>Sale Price</th>
                              <th>Packing Qty</th>
                              <th>Quantity</th>
                              <th style={{textAlign: 'right'}}>Purchase Price ($)</th>
                              <th style={{textAlign: 'right'}}>Amount ($)</th>
                            </tr>{
                                props.medicine?props.medicine.map(
                                    (data,index)=> <tr key={index}>
                                    <td >{data.medicineCategory}</td>
                                    <td >{data.medicineName}</td>
                                <td>{data.batchNum}</td>
                                <td>{data.expiryDate.split("T")[0]}</td>
                                    <td>{data.mrp}</td>
                                    <td>{data.batchamt}</td>
                                    <td>{data.saleprice}</td>
                                <td>{data.packingqty}</td>
                                    <td>{data.quantity}</td>
                                <td >{data.purchasePrice}</td>
                                    <td >{data.amount}</td>
                                  </tr>

                                ):''
                            }
                           
                          </tbody></table> 
                        <hr style={{height: '1px', clear: 'both', marginBottom: '10px', marginTop: '10px'}} />
                        <table className="table" width="100%" style={{width: '30%', float: 'right'}}>
                          <tbody><tr>
                              <th>Total ($)</th>
                        <td >{props.total}</td>
                            </tr>
                            <tr>
                              <th>Discount ($)</th>
                        <td >{props.discount}</td>
                            </tr>
                            <tr>
                              <th>Tax ($)</th>
                        <td >{props.tax}</td>
                            </tr>
                            <tr>
                              <th>Net Amount ($)</th>
                        <td >{props.netamount}</td>
                            </tr>
                          </tbody></table>
                        <hr style={{height: '1px', clear: 'both', marginBottom: '10px', marginTop: '10px'}} />    
                        <p />
                      </div>
                    </div>
                    {/*/.col (left) */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
    );
  }
