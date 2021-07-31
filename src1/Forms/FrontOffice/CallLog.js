import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'
 import {toast} from 'react-toastify'

export default (props) =>
{
    const mydata=(Object.entries(props.data).length === 0 )?
  { name:'',
  date:'',
  phone:'',
  nextFallowUpDate:'',
  description:'',
  callDuretion:'',
  callType:'',
  note:'',
 }:{...props.data};
  const formik = useFormik({
    
    enableReinitialize:true,
    initialValues:{
       
...mydata
    }
    ,
        onSubmit:values=>{console.log(JSON.stringify(values,null,2))
          Postdata('phonecall/','POST',values).then(data=>{
            //  console.log(data.id==values.id)
              if(values.id)
              props.setdataSrc(item=>item.map(item1=>item1.id==data.id?data:item1))
              else props.setdataSrc(item=>[...item,data])
              window.$('#calllog').modal('hide')
          })},
          validationSchema:Yup.object().shape({
            name:Yup.string().required('*Enter Name'),
            
            phone:Yup.string().matches(/^[0-9]{10}$/,'Must be 10 digit').required('*Enter Mobile Number'),
            
            callType:Yup.string().required('*Select Call Type'),
            
          })
      })
    return(
        <div class="modal fade" id="calllog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
         <div class="modal-content" role="document">

        <div className="card  ">
            <div className="card-header bg-primary">Call Log
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
            </div>
            <div className="card-body">
                <form  onSubmit={formik.handleSubmit}>
                    <div className=" border bg-light">
                    <div className="form-row p-2">

                        <div className="form-group col-md-6 ">
                           <label for="name">Name <small class="req text-danger"> *</small></label>
                           <input type="text" className="form-control" id="name" value={formik.values.name} onChange={(e)=>formik.setFieldValue('name',e.target.value)}/>
                           <span className='text-danger'>{(formik.touched.name && formik.errors.name)?formik.errors.name:''}</span>
                        </div>

                        <div className="form-group col-md-6 ">
                            <label for="phone">Phone <small class="req text-danger"> *</small></label>
                            <input type="number" className="form-control" value={formik.values.phone} onChange={(e)=>formik.setFieldValue('phone',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.phone && formik.errors.phone)?formik.errors.phone:''}</span>
                        </div>
                        
                   </div>
                   </div>

                   <div className="border bg-light mt-3">
                   <div className="form-row p-2">
                       <div className="form-group col-md-6">
                         <label for="inputState">Date</label>
                            <div className=" ">
                               <DatePicker 
                               minDate={new Date()}
                               className="form-control "  
                               style={{width:'100% !important'}} 
                               selected={new Date(formik.values.date)=='Invalid Date'?'':new Date(formik.values.date)} 
                               customInput={<input className="form-control"/>}  
                               onChange={(data)=>formik.setFieldValue('date',data)}/>
                            </div>
                            <span className='text-danger'>{(formik.touched.date && formik.errors.date)?formik.errors.date:''}</span>
                       </div>

                       <div className="form-group col-md-6">
                           <label for="description">Description</label>
                           <textarea className="form-control" rows="3" placeholder="" value={formik.values.description} onChange={(e)=>formik.setFieldValue('description',e.target.value)}>
                           </textarea>
                           <span className='text-danger'>{(formik.touched.description && formik.errors.description)?formik.errors.description:''}</span>
                       </div>

                       </div>
                       </div>

                       <div className="border bg-light mt-3">
                       <div className="form-row p-2">
                       <div className="form-group col-md-6">
                         <label for="inputState">Next Follow Up Date</label>
                            <div className="w-100 ">
                               <DatePicker 
                               minDate={new Date()}
                               className="form-control "  style={{width:'100% !important'}} 
                               selected={new Date(formik.values.nextFallowUpDate)=='Invalid Date'?'':new Date(formik.values.nextFallowUpDate)} 
                               customInput={<input className="form-control"/>}  onChange={(data)=>formik.setFieldValue('nextFallowUpDate',data)}/>
                            </div>
                            
                       <span className='text-danger'>{(formik.touched.nextFallowUpDate && formik.errors.nextFallowUpDate)?formik.errors.nextFallowUpDate:''}</span>
                       </div>
                       <div className="form-group col-md-6">
                           <label for="CallDuration">Call Duration</label>
                           <input type="text"  className="form-control" id="callduration"value={formik.values.callDuretion} onChange={(e)=>formik.setFieldValue('callDuretion',e.target.value)} />
                           <span className='text-danger'>{(formik.touched.callDuretion && formik.errors.callDuretion)?formik.errors.callDuretion:''}</span>
                       </div>
                       </div>
                       </div>

                        <div className="border bg-light mt-3">
                        <div className="form-row p-2">
                        <div className="form-group col-md-6">
                            <label for="note">Note</label>
                            <textarea className="form-control bg-transperent" rows="3" value={formik.values.note}  onChange={(e)=>formik.setFieldValue('note',e.target.value)}></textarea>
                            <span className='text-danger'>{(formik.touched.note && formik.errors.note)?formik.errors.note:''}</span>
                        </div>
                        
                
                        <div className="form-group ml-2">
                        <label for="calltype">Call Type <small class="req text-danger"> *</small></label>
                        <div className="form-check ">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" checked={formik.values.callType=='incomingCall'} onChange={(e)=>formik.setFieldValue('callType','incomingCall')}/>
                            <label class="form-check-label" for="exampleRadios1">Incoming Call</label>
                        </div> 
                        <div className="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" checked={formik.values.callType=='outgoingCall'} onChange={(e)=>formik.setFieldValue('callType','outgoingCall')}/>
                            <label class="form-check-label" for="exampleRadios1">Outgoing Call</label>
                        </div>
                        <span className='text-danger'>{(formik.touched.callType && formik.errors.callType)?formik.errors.callType:''}</span>
                        </div>
                        
                    </div>
                    </div>
                    <div className="d-flex float-right">
                    <button type="submit" class="btn bg-primary mt-2">Save</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}