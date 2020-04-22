import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { Getdata, Postdata } from '../../Network/Server'
import { Formik, useFormik } from 'formik'


export default function AddAmbulanceCall(props) {
const [vehicle,setVehicle]=useState([])
const formik=useFormik({
  enableReinitialize:true,
  initialValues:{
 ...props.data
  },
  onSubmit:e=>Postdata('vehicle/call/add','POST',e).then(d=>{
console.log(d)
  })
})
  useEffect(()=>{
    Getdata('vehicle/get').then(data=>setVehicle(data))
  },[])
    return (
      <div id="addambulancecall" className="modal fade in" role="dialog" aria-hidden="false">
  <div className="modal-dialog modal-dialog2 modal-lg">
    <div className="modal-content">
      <div className="modal-header bg-primary">
      <h6 className="modal-title">Add&nbsp;Ambulance&nbsp;Call</h6>
        <button type="button" className="close" data-dismiss="modal" autoComplete="off">×</button>
       
      </div>
      <div className="modal-body">
        <div className="row">
        <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Vehicle Model</label>
                       <select className='form-control'
                      onChange={(e)=>{
                        const data=e.target.value.split('-');
                        formik.setFieldValue('vehicleid',data[0])
                    formik.setFieldValue('driverName',data[1])
                    }}
                      >
                           <option></option>
                            {
                              vehicle.map(data=><option value={data.id+'-'+data.driverName}>{
                                data.vehicleModel+'-'+data.vehicleNo
                              }</option>)
                            }
                           </select>
                     </div>
                     </div> 
                     <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Driver Name</label>
                       <input 
                       className='form-control'
                       {...formik.getFieldProps('driverName')}
                       readOnly
                       />
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Date</label>
                       <ReactDatePicker 
                       minDate={new Date()}
                       className='form-control'
                       selected={new Date(formik.values.date)=='Invalid Date'?'':new Date(formik.values.date)}
                       
                       onChange={(e)=>formik.setFieldValue('date',e)}
                       />
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Amount</label>
                       <input 
                       className='form-control'
                       {...formik.getFieldProps('amount')}
                       />
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Patient Name</label>
                       <input 
                       className='form-control'
                       {...formik.getFieldProps('patientName')}
                       />
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Contact Num</label>
                       <input 
                       className='form-control'
                       {...formik.getFieldProps('contactNo')}
                       />
                     </div>
                     </div> 
                     <div className='col-md-12'>
                     <div className='form-group'>
                         <label>Address</label>
                       <textarea 
                       className='form-control'
                       {...formik.getFieldProps('address')}
                       />
                     </div>
                     </div> 
                      
                         
                     <div className='col-md-12 border-top pt-3'>
                     <div className='form-group text-right'>
                       <button 
                       className='btn btn-sm bg-primary'
                       onClick={formik.handleSubmit}
                       >save</button>
                     </div>
                     </div> 
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
