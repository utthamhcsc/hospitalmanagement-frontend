import React from 'react'

export default function AddStock() {
    return (
        <div className="modal fade in" id="addstock" tabIndex={-1} role="dialog" aria-labelledby="follow_up" aria-hidden="false">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content modal-media-content">
      <div className="modal-header modal-media-header py-2">
      <h6 className="box-title">Add Item Stock</h6>
        <button type="button" className="close" data-dismiss="modal" autoComplete="off">×</button>
        
      </div>
     
        <div className="modal-body pt0 pb0">
          <div className="row ptt10">
                                 <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Item Category</label><small className="req"> *</small>
                <select autofocus id="item_category_id" name="item_category_id" className="form-control">
                  <option value>Select</option>
                  <option value={1}>Syringe Packs</option>
                  <option value={2}>Cotton Packs</option>
                  <option value={3}>Equipements</option>
                </select>
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Item</label><small className="req"> *</small>
                <select id="item_id" name="item_id" className="form-control">
                  <option value>Select</option>
                </select>
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Supplier</label>
                <select id="supplier_id" name="supplier_id" className="form-control">
                  <option value>Select</option>
                  <option value={1}>VK Supplier</option>
                  <option value={2}>Quick Service</option>
                </select>
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Store</label>
                <select id="store_id" name="store_id" className="form-control">
                  <option value>Select</option>
                  <option value={1}>SK Pharma</option>
                  <option value={2}>Vinay Pharmacy</option>
                </select>
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Quantity</label><small className="req"> *</small> <span id="item_unit" />
                <div className="input-group"> 
                  <div className="input-group-prepend">
                    <select className="input-group-text" name="symbol">
                      <option value="+">+</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <input id="quantity" name="quantity"  type="text" className="form-control "  />
                </div>
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">        
                <label htmlFor="exampleInputEmail1">Purchase Price</label><small className="req"> *</small>
                <input id="purchase_price" name="purchase_price" placeholder type="text" className="form-control"  />
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Date</label>
                <input id="date" name="date" placeholder type="text" className="form-control"  readOnly="readonly" />
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description</label>
                <textarea className="form-control" id="description" name="description" placeholder rows={3}  />
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Attach Document</label>
                <input type="file" className='form-control'/>
                <span className="text-danger" />
              </div>
            </div>
          </div>
        </div>{/*./modal*/}
        <div className="box-footer">
          <div className="pull-right">
            <button type="submit" data-loading-text="Processing..." id="form1btn" className="btn btn-info pull-right">Save</button>
          </div>
        </div>
    
    </div>
  </div>
</div>

    )
}
