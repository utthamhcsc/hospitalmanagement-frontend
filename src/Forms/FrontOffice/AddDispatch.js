import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import {Getdata,PostFormdata, Postdata} from '../../Network/Server'

import {toast} from 'react-toastify'

export default  (props) => {
  const mydata=(Object.entries(props.data).length === 0 )?
  { 
    fromTitle:'',
    referenceNo:'',
    address:'',
    toTitle:'',
    note:'',
    date:'',
    attachdDocument:''}:{...props.data};

    const formik = useFormik(
    {
    enableReinitialize:true,
    initialValues:{
    ...mydata
    },

    onSubmit:values=>{console.log(JSON.stringify(values,null,2))
      typeof(formik.values.attachdDocument)!=='string'?
      PostFormdata('postaldispatchlist/','POST',values).then(data=> {
        console.log(data)
        values.id?
        props.setdataSrc(item=>item.map(item1=>{
          if(item1.id==data.id)return data;else return item1;
  
        })):
        props.setdataSrc(item=>[data,...item]
          
  
        )
      }):Postdata('postaldispatchlist/iffileisnull','POST',values).then(data=>{
        values.id?
        props.setdataSrc(item=>item.map(item1=>{
          if(item1.id==data.id)return data;else return item1;
  
        })):
        props.setdataSrc(item=>[data,...item]
          
  
        )
        window.$('#PostalDsp').modal('hide')
      })},

      validationSchema:Yup.object().shape({
        toTitle:Yup.string().required('*Required ToTitle'),
        //attachdDocument:null
    })
  })
return(

  <div class="modal fade" id="PostalDsp" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content p-0" role="document">
       
    <div className="card  ">
            
            <div className="card-body login-card-body">
            <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button> 
                  <h5 className="login-box-msg">Add Dispatch</h5>      
       <form  onSubmit={formik.handleSubmit}>
       <div className="">

        <div class="form-row ">

         <div class="form-group col-md-6">
           <label for="fromtitle">To Title <small class="req text-danger"> *</small></label>
           <input type="text" class="form-control" value={formik.values.toTitle} onChange={(e)=>formik.setFieldValue('toTitle',e.target.value)}/>
           <span className='text-danger'>{(formik.touched.toTitle && formik.errors.toTitle)?formik.errors.toTitle:''}</span>
         </div>

         <div className="form-group col-md-6">
             <label for="referenceno">Reference No</label>
             <input type="number" className="form-control" value={formik.values.referenceNo} onChange={(e)=>formik.setFieldValue('referenceNo',e.target.value)}/>
             <span className='text-danger'>{(formik.touched.referenceNo && formik.errors.referenceNo)?formik.errors.referenceNo:''}</span>
        </div>
     </div>
   </div>
       <div className=" mt-2"> 

        <div className="form-row ">

          <div className="form-group col-md-6">
            <label for="address">Address</label>
            <textarea className="form-control " value={formik.values.address} rows="2" onChange={(e)=>formik.setFieldValue('address',e.target.value)}>
            </textarea>
            <span className='text-danger'>{(formik.touched.address && formik.errors.address)?formik.errors.address:''}</span>
          </div>
        
          <div className="form-group col-md-6">
            <label for="address">Note</label>
            <textarea className="form-control " value={formik.values.note} rows="2" onChange={(e)=>formik.setFieldValue('note',e.target.value)}>
            </textarea>
            <span className='text-danger'>{(formik.touched.note && formik.errors.note)?formik.errors.note:''}</span>
          </div>
        </div>
      </div>
      
      <div className=" mt-2">

      <div className="form-row ">

        <div className="form-group col-md-6">
          <label for="totitle">From Title</label>
          <input type="text" className="form-control" value={formik.values.fromTitle} onChange={(e)=>formik.setFieldValue('fromTitle',e.target.value)}/>
          <span className='text-danger'>{(formik.touched.fromTitle && formik.errors.fromTitle)?formik.errors.fromTitle:''}</span>
        </div>
        
        <div class="form-group col-md-6">
          <label for="inputState">Date</label>
          <div className="w-100 ">
            <DatePicker 
            minDate={new Date()}
            className="form-control" 
            autoComplete={'off'}
            style={{width:'100% !important'}} 
            selected={new Date(formik.values.date)=='Invalid Date'?'':new Date(formik.values.date)}  name='date' onChange={(data)=>formik.setFieldValue('date',data)}/>
          </div> 
          <span className='text-danger'>{(formik.touched.date && formik.errors.date)?formik.errors.date:''}</span>
        </div>
      </div>
    </div>
       <div className=" mt-2">
      <div class="form-group ">
      <label for="inputCity">Attach Document</label>
      <input type="file" class="custom-file" id="inputCity" onChange={(e)=>formik.setFieldValue('attachdDocument',e.target.files[0])} />
      <span className='text-danger'>{(formik.touched.attachdDocument && formik.errors.attachdDocument)?formik.errors.attachdDocument:''}</span>

    </div>
    </div>
    
        <button type="submit" class="btn btn-primary mt-2 btn-block">Save</button>
  </form>
</div>
</div>
</div>
</div>
</div>

    );
}