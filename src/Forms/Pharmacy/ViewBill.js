import React from 'react'

export default  React.memo((props)=> {
  //alert(props)
    return (
      <div className="modal fade in" id="viewBill" role="dialog" >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content modal-media-content">
            <div className="modal-header modal-media-header">
            <h4 className="box-title">Bill Details</h4>
              <button type="button" className="close" data-toggle="tooltip" title data-dismiss="modal">×</button>
               
            </div>
            <div className="modal-body pt-0 pb-0">
              <div id="reportdata">
                <title>Bill</title>
                <div id="html-2-pdfwrapper">
                  <div className="row">
                    {/* left column */}
                    <div className="col-md-12">
                      <div>
                        <div className="pprinta4">
                          {/* <img src="https://demo.smart-hospital.in/uploads/printing/4.jpg" 
                          className="img-responsive" style={{height: '100px', width: '100%'}} />
                         */}
                         </div>
                        <table width="100%" className="table border-0">
                          <tbody><tr>
                        <td className='text-left'><h5>Bill #{props.id}</h5>
                              </td>
                              <td className={'text-right'}><h5>Date : {props.date?props.date.split("T")[0]:''}</h5>
                              </td>
                            </tr>
                          </tbody>
                          </table>
                         <table className="table p-0 m-0 border-0" cellSpacing={0} cellPadding={0} width="100%">
                          <tbody><tr>
                              <th >Name</th>
                        <td >{props.patientName}</td>
                              <th >Doctor</th>
                        <td  align="left">{props.doctorName}</td>
                            </tr>
                          </tbody></table>
                        <hr style={{height: '1px', clear: 'both', marginBottom: '10px', marginTop: '10px'}} />
                        <table className="printablea4" id="testreport" width="100%">
                          <tbody><tr>
                              <th width="20%">Medicine Name</th> 
                              <th>Batch No</th>
                              <th>Unit</th>
                              <th>Expiry Date</th>
                              <th>Quantity</th>
                              <th > Price ($)</th>
                            </tr>
                            {props.medicine && props.medicine.length>0?props.medicine.map(
                              (data,index)=>
                              <tr key={index}>
                              <td className={'text-left'}>{data.medicineName}</td>
                            <td className={'text-left'}>{data.batchNum}</td>
                            <td className={'text-left'}>{data.unit}</td>
                            <td className={'text-left'}>{new Date(data.expiryDate).toLocaleDateString()}</td>
                            <td className={'text-left'}>{data.quantity}</td>
                            <td className={'text-left'}>{data.amount}</td>
                            </tr>
                 
                              
                            ):''}
                           
                          </tbody></table> 
                        <hr style={{height: '1px', clear: 'both', marginBottom: '10px', marginTop: '10px'}} />
                        <table align className="printablea4" style={{width: '30%', float: 'right'}}>
                          <tbody><tr>
                              <th>Total ($)</th>
                            <td align="right">{props.total}</td>
                            </tr>
                            <tr>
                              <th>Discount ($)</th>
                            <td align="right">{props.discount}</td>
                            </tr>
                            <tr>
                              <th>Tax ($)</th>
                            <td align="right">{props.tax}</td>
                            </tr>
                            <tr>
                              <th>Net Amount ($)</th>
                            <td align="right">{props.netamount}</td>
                             </tr>
                            {/*<tr id="generated_by">
                              <th>Collected By</th>
                              <td align="right">Simon Stark</td>
                            </tr> */}
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
)
