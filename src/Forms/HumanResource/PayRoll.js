import React from 'react'

export default function PayRoll() {
    return (
        <div class="card-body collapse fade" id='payroll'>
         <div className="row around10">
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">EPF No</label>
      <input id="epf_no" name="epf_no" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Basic Salary</label>
      <input type="text" className="form-control" name="basic_salary" defaultValue />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Contract Type</label>
      <select className="form-control" name="contract_type" autoComplete="off">
        <option value>Select</option>
        <option value="permanent">Permanent</option>
        <option value="probation">Probation</option>
      </select>
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Work Shift</label>
      <input id="shift" name="shift" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Location</label>
      <input id="location" name="location" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
</div>

        </div>
    )
}
