import React from 'react'

export default function PayRoll(props) {
    return (
        <div class="card-body collapse fade" id='payroll'>
         <div className="row around10">
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">EPF No</label>
      <input {...props.formik.getFieldProps('epfNum')} type="text" className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Basic Salary</label>
      <input type="text" {...props.formik.getFieldProps('basicSalary')} className="form-control"   />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Contract Type</label>
      <select className="form-control" {...props.formik.getFieldProps('contractType')} name="contract_type" >
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
      <input {...props.formik.getFieldProps('workShift')} type="text" className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Location</label>
      <input {...props.formik.getFieldProps('location')} type="text" className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
</div>

        </div>
    )
}
