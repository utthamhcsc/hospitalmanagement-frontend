import React from 'react'

export default function BankInfo(props) {
    return (
        <div class="card-body collapse fade" id='bankinfo'>
        <div className="row around10">
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Account Title</label>
      <input  type="text" {...props.formik.getFieldProps('accountTitle')} className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Bank Account Number</label>
      <input  type="text" {...props.formik.getFieldProps('bankAccountNumber')} className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Bank Name</label>
      <input {...props.formik.getFieldProps('bankName')} type="text" className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">IFSC Code</label>
      <input {...props.formik.getFieldProps('ifscCode')} type="text" className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Bank Branch Name</label>
      <input  {...props.formik.getFieldProps('bankBranchName')} type="text" className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
</div>

        </div>
    )
}
