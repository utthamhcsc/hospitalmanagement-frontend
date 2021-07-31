import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import {Getdata,Postdata,PostFormdata} from '../../Network/Server' 

import {toast} from 'react-toastify'

export default  (props) => {
const [data,setdata]=useState([])
  const mydata=(Object.entries(props.data).length === 0 )?
  { purpose:'',
  name:'',
  phone:'',
  idCard:'',
  numberOfPersons:'',
  date:'',
  inTime:'',
  outTime:'',
  note:'',
  attachedDocument:''
 }:{...props.data};
  const formik = useFormik({
    
    enableReinitialize:true,
    initialValues:{
       
...mydata
    },
    onSubmit:values=>{console.log(JSON.stringify(values,null,2))
      typeof(values.attachedDocument)=='string'?
      Postdata('visitorlist/iffileisnull','POST',values).then(data=>
      {
        values.id?
        props.setdataSrc(item=>item.map(item1=>{
          if(item1.id==data.id)return data;else return item1;

        })):
        props.setdataSrc(item=>[data,...item]
          

        )
      }  
      ):
    PostFormdata('visitorlist/','POST',values).then(data=> {
      values.id?
      props.setdataSrc(item=>item.map(item1=>{
        if(item1.id==data.id)return data;else return item1;

      })):
      props.setdataSrc(item=>[data,...item]
        

      )
    })
  
  window.$('#Visitor').modal('hide')
  },
      validationSchema:Yup.object().shape({
        purpose:Yup.string().required('required'),
        
        phone:Yup.string().matches(/^[0-9]{10}$/,'Must be 10 digit').required('*Enter Mobile Number'),
        
        //attachdDocument:null
    })
  })
  React.useEffect(()=>{
    Getdata('purpose/get').then(data=>setdata(data));
  },[])




return(
  <div class="modal fade" id="Visitor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
   <div class="modal-content" role="document">

<div className="card  ">
   <div class="card-header text-white bg-primary"> Add Visitor
   <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
    </div>
  <div className="card-body">     
  <form onSubmit={formik.handleSubmit}> 

  <div className="border bg-light">
  <div class="form-row p-2">
    <div class="form-group col-md-6 ">
      <label for="inputEmail4" className="text-sm">Purpose <small class="req text-danger"> *</small></label>
      <select id="input" class="form-control" name='purpose' {...formik.getFieldProps('purpose')}>
        <option value=''>Choose</option>
        {
          (data||[]).map(item=><option>{item.purpose}</option>)
        }
      </select>
      <span className='text-danger'>{(formik.touched.purpose && formik.errors.purpose)?formik.errors.purpose:''}</span>
    </div>
    
    <div class="form-group col-md-6">
      <label for="inputPassword4" className="text-sm" >Name</label>
      <input type="text" class="form-control" id="inputPassword4" name='name' {...formik.getFieldProps('name')}/>
      <span className='text-danger'>{(formik.touched.name && formik.errors.name)?formik.errors.name:''}</span>
    </div>
    
   </div>
  </div>

  <div className="border bg-light mt-2">
  <div class="form-row p-2">

    <div class="form-group col-md-6">
      <label for="inputAddress" className="text-sm">Phone <small class="req text-danger"> *</small></label>
      <input type="number" class="form-control" id="inputAddress" name='phone' {...formik.getFieldProps('phone')}/>
      <span className='text-danger'>{(formik.touched.phone && formik.errors.phone)?formik.errors.phone:''}</span>
    </div>
    
    <div class="form-group col-md-6">
      <label for="inputAddress2" className="text-sm">ID Card</label>
      <input type="text" class="form-control" id="inputAddress2" name='idCard' {...formik.getFieldProps('idCard')}/>
      <span className='text-danger'>{(formik.touched.idCard && formik.errors.idCard)?formik.errors.idCard:''}</span>
    </div>
    
    </div>
  </div>

  <div className="border bg-light mt-2">
  <div class="form-row p-2">
    <div class="form-group col-md-6">
      <label for="inputCity" className="text-sm">Number Of Person</label>
      <input type="text" class="form-control" id="inputCity" name='numberOfPersons' {...formik.getFieldProps('numberOfPersons')}/>
      <span className='text-danger'>{(formik.touched.numberOfPersons && formik.errors.numberOfPersons)?formik.errors.numberOfPersons:''}</span>
    </div>
    
    
    <div class="form-group col-md-6">
      <label for="inputState" className="text-sm">Date</label>
      <div className="w-100 ">
          <DatePicker
          minDate={new Date()}
          autoComplete='off' className="form-control "  style={{width:'100% !important'}} 
          selected={new Date(formik.values.date)=='Invalid Date'?
          '':new Date(formik.values.date)} 
                        
          
          customInput={<input className="form-control"/>} name='date' onChange={(data)=>formik.setFieldValue('date',data)}/>
      </div> 
      
      <span className='text-danger'>{(formik.touched.date && formik.errors.date)?formik.errors.date:''}</span>
    </div>
  </div>
  </div>

  <div className="border bg-light mt-2">
  <div class="form-row p-2">
    <div class="form-group col-md-6">
      <label for="inputCity" className="text-sm">In Time</label>
      <input type="text" class="form-control" id="inputCity" name='inTime' {...formik.getFieldProps('inTime')}/>
      <span className='text-danger'>{(formik.touched.inTime && formik.errors.inTime)?formik.errors.inTime:''}</span>
    </div>
    
    
    <div class="form-group col-md-6">
      <label for="inputCity" className="text-sm">Out Time</label>
      <input type="text" class="form-control" id="inputCity" name='outTime' {...formik.getFieldProps('outTime')}/>
      <span className='text-danger'>{(formik.touched.outTime && formik.errors.outTime)?formik.errors.outTime:''}</span>
    </div>
    
    </div>
    </div>

  <div className="border bg-light mt-2">
   <div className="form-row p-2">
     <div className="form-group mb-2 col-md-6">
       <label for="inputCity" className="text-sm">Note</label>
       <textarea className="form-control" rows="2" placeholder="" name='note' {...formik.getFieldProps('note')}>
       </textarea>
       <span className='text-danger'>{(formik.touched.note && formik.errors.note)?formik.errors.note:''}</span>
      </div>
  
      <div class="form-group col-md-6  ">
        <label for="inputCity" className="text-sm">Attach Document</label>
        <input type="file" class="custom-file " className="text-sm" id="inputCity" onChange={(e)=>formik.setFieldValue('attachedDocument',e.target.files[0])}/>
      </div>
      <span className='text-danger'>{(formik.touched.attachedDocument && formik.errors.attachedDocument)?formik.errors.attachedDocument:''}</span>
    </div>
    </div>
    
   <div className="d-flex float-right mt-3">
 <button type="submit" class="btn btn-primary form-control">Save</button>
 </div>
</form>

</div>
</div>
</div>
</div>
</div>

    );
}