import React from 'react'

export default function AddIssue() {
    return (
<div className="modal fade in" id="addissue" tabIndex={-1} role="dialog" aria-labelledby="follow_up" aria-hidden="false">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content modal-media-content">
      <div className="modal-header modal-media-header py-2">
      <h6 className="box-title">Add Issue Item</h6>
        <button type="button" className="close" data-dismiss="modal">×</button>
       
      </div>
      <div className="modal-body pt0 pb0">
        <div className="row ptt10">
                             <div className="form-group col-md-4 col-sm-4">
              <label htmlFor="exampleInputEmail1">User Type</label><small className="req"> *</small>
              <select name="account_type" onchange="getIssueUser(this.value)" id="input-type-student" className="form-control ac_type">
                <option value>Select</option>
                <option value={1}>Admin</option>
                Admin
                <option value={2}>Accountant</option>
                Accountant
                <option value={3}>Doctor</option>
                Doctor
                <option value={4}>Pharmacist</option>
                Pharmacist
                <option value={5}>Pathologist</option>
                Pathologist
                <option value={6}>Radiologist</option>
                Radiologist
                <option value={8}>Receptionist</option>
                Receptionist
              </select>
              <span className="text-danger" />
            </div>
            <div className="form-group col-md-4 col-sm-4">
              <label htmlFor="exampleInputEmail1">Issue To</label><small className="req"> *</small>
              <select id="issue_to" name="issue_to" className="form-control">
                <option value>Select</option>
              </select>
              <span className="text-danger" />
            </div>
            {/* <div class="clearfix"></div> */}
            <div className="form-group col-md-4 col-sm-4">
              <label htmlFor="exampleInputEmail1">Issue By</label><small className="req"> *</small>
              <input id="issue_by" name="issue_by" placeholder type="text" className="form-control"  />
              <span className="text-danger" />
            </div>
            <div className="form-group col-md-4 col-sm-4">
              <label htmlFor="exampleInputEmail1">Issue Date</label><small className="req"> *</small>
              <input id="issue_date" name="issue_date" placeholder type="text" className="form-control date"  readOnly />
              <span className="text-danger" />
            </div>
            {/* <div class="clearfix"></div> */}
            <div className="form-group col-md-4 col-sm-4">
              <label htmlFor="exampleInputEmail1">Return Date</label>
              <input id="return_date" name="return_date" placeholder type="text" className="form-control date"  readOnly />
              <span className="text-danger" />
            </div>
            <div className="form-group col-md-4 col-sm-4">
              <label htmlFor="exampleInputEmail1">Note</label>
              <textarea name="note" className="form-control" id="note"  />
              <span className="text-danger" />
            </div>
            <div className="clearfix" />
            <hr />
            <div className="col-md-12">
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="exampleInputEmail1">Item Category</label><small className="req"> *</small>
                  <select id="item_category_id" name="item_category_id" className="form-control">
                    <option value>Select</option>
                    <option value={1}>Syringe Packs</option>
                    <option value={2}>Cotton Packs</option>
                    <option value={3}>Equipements</option>
                  </select>
                  <span className="text-danger" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="exampleInputEmail1">Item</label><small className="req"> *</small>
                  <select id="item_id" name="item_id" className="form-control">
                    <option value>Select</option>
                  </select>
                  <span className="text-danger" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="exampleInputEmail1">Quantity</label><small className="req"> *</small>
                  <input className="form-control" name="quantity" />
                  <div id="div_avail">
                    <span>Available Quantity : </span>
                    <span id="item_available_quantity">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="box-footer clear">
        <div className="pull-right">
          <button type="submit" id="form1btn" data-loading-text="Processing..." className="btn btn-info pull-right">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
