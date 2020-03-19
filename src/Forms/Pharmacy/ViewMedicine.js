import React from 'react'
import { Route } from 'react-router-dom'

export default (props)=> {
    return (

      <div className="modal fade in" id="viewMedicine" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" >
        <div className="modal-dialog modal-dialog-scollable modal-xl"  role="document">
           <div className="modal-content modal-media-content" style={{width:'100vw !important'}}>
            <div className="modal-header modal-media-header p-2 clear-fix">
              
            <h6 className="box-title">Medicine Details</h6> 
            
            <div>
            <button type="button" className="btn btn-xs btn-light ml-1" data-toggle="tooltip" title="stock" >View Stock </button>
            <button type="button" className="btn btn-xs btn-light ml-1" data-toggle="tooltip" title="bad stock">View Bad stock </button>
           
              <button type="button" className="btn btn-xs btn-light ml-1" data-toggle="tooltip" title="Close" data-dismiss="modal">close</button>
             </div>
            </div>
            <div className="modal-body pt0 pb0">
              <div className="row">
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
              </div>{/*./row*/}
            </div>
          </div>
        </div>    
       </div>
    );
  }
