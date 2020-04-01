import React from 'react'

export default function BankInfo() {
    return (
        <div class="card-body collapse fade" id='bankinfo'>
        <div className="row around10">
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Account Title</label>
      <input id="account_title" name="account_title" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Bank Account Number</label>
      <input id="bank_account_no" name="bank_account_no" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Bank Name</label>
      <input id="bank_name" name="bank_name" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">IFSC Code</label>
      <input id="ifsc_code" name="ifsc_code" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Bank Branch Name</label>
      <input id="bank_branch" name="bank_branch" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
</div>

        </div>
    )
}
