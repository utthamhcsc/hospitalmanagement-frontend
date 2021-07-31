import React from 'react'

export default function AddItem() {
    return (
<div className="modal fade in" id="additem" tabIndex={-1} role="dialog" aria-labelledby="follow_up" aria-hidden="false" >
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content modal-media-content">
      <div className="modal-header ">
      <h5 className="box-title">Add Item</h5>
        <button type="button" className="close" data-dismiss="modal">×</button>
       
      </div>
      <div className="modal-body pt0 pb0">
        <div className="row ptt10">
        
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Item</label><small className="req"> *</small>
                <input autofocus id="name" name="name"  type="text" className="form-control"  />
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Item Category</label><small className="req"> *</small>
                <select id="item_category_id" name="item_category_id" className="form-control">
                  <option value>Select</option>
                  <option value={1}>Syringe Packs</option>
                  <option value={2}>Cotton Packs</option>
                  <option value={3}>Equipements</option>
                </select>
                <span className="text-danger" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Unit</label><small className="req"> *</small>
                <input autofocus id="unit" name="unit"  type="text" className="form-control"  />
                <span className="text-danger" />
              </div>
            </div>
            {/*-  <div class="col-md-12">
                        <div class="form-group">
                        <label for="exampleInputEmail1">Purchase Price</label><small class="req"> *</small>
                        <input autofocus="" id="purchase_price" name="purchase_price" ="" type="text" class="form-control"  value="" />
                       
                        </div>
                        </div>*/}
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description</label>
                <textarea className="form-control" id="description" name="description"  rows={3}  />
                <span className="text-danger" />
              </div>
            </div>
        </div>
      </div>
      <div className="box-footer clear">
        <div className="pull-right">
          <button type="submit" className="btn btn-info pull-right">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
