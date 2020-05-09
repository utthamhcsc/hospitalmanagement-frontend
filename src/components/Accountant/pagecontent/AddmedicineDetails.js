var NewComponent = React.createClass({
    render: function() {
      return (
  
        <div className="modal fade in" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" style={{display: 'block'}}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-media-content">
              <div className="modal-header modal-media-header">
                <button type="button" className="close pt4" data-toggle="tooltip" title data-dismiss="modal">×</button>
                <h4 className="box-title">Add Medicine Details</h4> 
              </div>
              <form id="formadd" acceptCharset="utf-8" method="post" className="ptt10" encType="multipart/form-data"> 
                <div className="modal-body pt0 pb0">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 paddlr">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>Medicine Name</label>
                            <small className="req"> *</small> 
                            <input id="medicine_name" name="medicine_name" placeholder type="text" className="form-control" />
                            <span className="text-danger" />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label htmlFor="exampleInputFile">
                              Medicine Category</label>
                            <small className="req"> *</small> 
                            <div>
                              <select className="form-control select2 select2-hidden-accessible" style={{width: '100%'}} name="medicine_category_id" tabIndex={-1} aria-hidden="true">
                                <option value>Select                                              </option>
                                <option value={5}>Syrup                                                  </option>   
                                <option value={6}>Capsule                                                  </option>   
                                <option value={7}>Injection                                                  </option>   
                                <option value={9}>Ointment                                                  </option>   
                                <option value={10}>Cream                                                  </option>   
                                <option value={11}>Surgical                                                  </option>   
                                <option value={12}>Drops                                                  </option>   
                                <option value={13}>Inhalers                                                  </option>   
                                <option value={14}>Implants / Patches                                                  </option>   
                                <option value={15}>Liquid                                                  </option>   
                                <option value={16}>Preparations                                                  </option>   
                                <option value={17}>Diaper                                                  </option>   
                                <option value={18}>Tablet                                                  </option>   
                              </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-medicine_category_id-oq-container"><span className="select2-selection__rendered" id="select2-medicine_category_id-oq-container" title="Select                                                ">Select                                              </span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                            </div>
                            <span className="text-danger" />
                          </div>
                        </div>  
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>Medicine Company</label>
                            <small className="req"> *</small> 
                            <input type="text" name="medicine_company" defaultValue className="form-control" />
                            <span className="text-danger" />
                          </div>
                        </div> 
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>Medicine Composition</label>
                            <small className="req"> *</small> 
                            <input type="text" name="medicine_composition" defaultValue className="form-control" />
                            <span className="text-danger" />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>Medicine Group</label>
                            <small className="req"> *</small> 
                            <input type="text" name="medicine_group" defaultValue className="form-control" />
                            <span className="text-danger" />
                          </div>
                        </div>
                        {/* <div class="col-sm-3">
                                       <div class="form-group">
                                           <label>Supplier</label>
                                           <input type="text" name="supplier" class="form-control">
                                       </div>
                                   </div>*/}
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>Unit</label>
                            <small className="req"> *</small> 
                            <input type="text" name="unit" className="form-control" />
                            <span className="text-danger" />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>Min Level</label>
                            <input type="text" name="min_level" className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>Re-Order Level</label>
                            <input type="text" name="reorder_level" className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>VAT (%)</label>
                            <input type="text" name="vat" className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>Unit/Packing</label>
                            <small className="req"> *</small> 
                            <input type="text" name="unit_packing" className="form-control" />
                            <span className="text-danger">                                  </span></div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label>VAT A/C</label>
                            <input type="text" name="vat_ac" className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label>Note</label>
                            <textarea name="note" className="form-control" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label>Medicine Photo ( JPG | JPEG | PNG )</label>
                            <div className="dropify-wrapper"><div className="dropify-message"><p><i className="fa fa-cloud-upload dropi18" />Drop a file here or click</p><p className="dropify-error">Ooops, something wrong appended.</p></div><div className="dropify-loader" /><div className="dropify-errors-container"><ul /></div><input type="file" name="file" id="file" className="form-control filestyle" /><button type="button" className="dropify-clear">Remove</button><div className="dropify-preview"><span className="dropify-render" /><div className="dropify-infos"><div className="dropify-infos-inner"><p className="dropify-filename"><span className="file-icon" /> <span className="dropify-filename-inner" /></p><p className="dropify-infos-message">Drag and drop or click to replace</p></div></div></div></div>
                          </div>
                        </div>
                      </div>{/*./row*/}   
                    </div>{/*./col-md-12*/}       
                  </div>{/*./row*/} 
                </div>
                <div className="box-footer">
                  <div className="pull-right">
                    <button type="submit" id="formaddbtn" data-loading-text="Processing..." className="btn btn-info pull-right">Save</button>
                  </div>
                </div>
              </form> 
            </div>
          </div>    
        </div>
      );
    }
  });