import React from 'react'
import { useFormik } from 'formik'
import {Postdata} from '../../Network/Server'

export default function AddAmbulance(props) {

const formik=useFormik({
  enableReinitialize:true,
  initialValues:{
 ...props.data },
  onSubmit:e=>Postdata('vehicle/add','POST',e).then(data=>{
if(e.id){
  props.setdataSrc(item=>item.map(item1=>item1.id==data.id?data:item1))
}else{
  props.setdataSrc(item=>[data,...item])

}
window.$('#addambulance').modal('hide')
  })
})
    return (
      <div id="addambulance" className="modal fade in" role="dialog" aria-hidden="false">
  <div className="modal-dialog modal-dialog2 modal-lg">
    <div className="modal-content">
    <div className="card  ">
            
            <div className="card-body login-card-body">
            <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button> 
                  <h5 className="login-box-msg">Add Ambulance</h5> 
      
        <div className="row">
        <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Vehicle Number</label>
                       <input 
                       className='form-control'
                       {...formik.getFieldProps('vehicleNo')}
                       />
                          
                     </div>
                     </div> 
                     <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Vehicle Model</label>
                       <input 
                       className='form-control'
                       {...formik.getFieldProps('vehicleModel')}
                       />
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Year Made</label>
                       <input className='form-control'
                       {...formik.getFieldProps('manufactureYear')}
                       />
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Driver Name</label>
                       <input className='form-control'
                       {...formik.getFieldProps('driverName')}
                       />
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Driver License</label>
                       <input className='form-control'
                       {...formik.getFieldProps('driverLicence')}
                       />
                     </div>
                     </div> <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Driver Contact</label>
                       <input className='form-control'
                       {...formik.getFieldProps('driverContact')}
                       />
                     </div>
                     </div> 
                     <div className='col-md-4'>
                     <div className='form-group'>
                     <label>Vehicle Type</label>
                       <select className='form-control'
                       {...formik.getFieldProps('vehicleType')}
                       >
                           <option></option>
                           <option>owened</option>
                           <option>contractual</option>
                           </select>
                     </div>
                     </div> 
                     <div className='col-md-8'>
                     <div className='form-group'>
                         <label>Note</label>
                       <textarea className='form-control'
                       {...formik.getFieldProps('note')}
                       />
                     </div>
                     </div> 
                      
                         
                     <div className='col-md-12 pt-3'>
                     <div className='form-group text-right'>
                       <button className='btn  btn-primary btn-block' onClick={formik.handleSubmit}>save</button>
                     </div>
                     </div> 
                     </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
