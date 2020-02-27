import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import {Getdata,PostFormdata} from '../../Network/Server'



export default  (props) => {
  const mydata=(Object.entries(props.data).length === 0 )?
  { 
    fromTitle:'',
    referenceNo:'',
    address:'',
    toTitle:'',
    note:'',
    date:'',
    attachdDocument:null
 }:{...props.data,date:new Date(props.data.date)};
  const formik = useFormik({
    
    enableReinitialize:true,
    initialValues:{
       
...mydata
    }
  ,
    onSubmit:values=>{alert(JSON.stringify(values,null,2))
      PostFormdata('postaldispatchlist/','POST',values).then(data=>console.log(data))},
      validationSchema:Yup.object().shape({
        fromTitle:Yup.string().required(),
        referenceNo:Yup.string().required(),
        address:Yup.string().required(),
        toTitle:Yup.string().required(),
        note:Yup.string().required(),
        date:Yup.date().required(),
        //attachdDocument:null
    })
  })
return(
  <div class="modal fade" id="PostalDsp" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
         <div class="modal-content p-0" role="document">

        
<div className="card p-0">
   <div class="card-header bg-primary  "> Add Dispatch
   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
    </div>
  <div className="card-body m-0">     
  <form  onSubmit={formik.handleSubmit}>
    <div className="border bg-light">

      <div class="form-row p-2">

         <div class="form-group col-md-6">
           <label for="fromtitle">To Title</label>
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
       <div className="border bg-light mt-2"> 

        <div className="form-row p-2">

          <div className="form-group col-md-6">
            <label for="address">Address</label>
            <textarea className="form-control bg-transparent" value={formik.values.address} rows="2" onChange={(e)=>formik.setFieldValue('address',e.target.value)}>
            </textarea>
            <span className='text-danger'>{(formik.touched.address && formik.errors.address)?formik.errors.address:''}</span>
          </div>
        
          <div className="form-group col-md-6">
            <label for="address">Note</label>
            <textarea className="form-control bg-transparent" value={formik.values.note} rows="2" onChange={(e)=>formik.setFieldValue('note',e.target.value)}>
            </textarea>
            <span className='text-danger'>{(formik.touched.note && formik.errors.note)?formik.errors.note:''}</span>
          </div>
        </div>
      </div>
      
      <div className="border bg-light mt-2">

      <div className="form-row p-2">

        <div className="form-group col-md-6">
          <label for="totitle">From Title</label>
          <input type="text" className="form-control" value={formik.values.fromTitle} onChange={(e)=>formik.setFieldValue('fromTitle',e.target.value)}/>
          <span className='text-danger'>{(formik.touched.fromTitle && formik.errors.fromTitle)?formik.errors.fromTitle:''}</span>
        </div>
        
        <div class="form-group col-md-6">
          <label for="inputState">Date</label>
          <div className="w-100 ">
            <DatePicker className="form-control" value={formik.values.date} style={{width:'100% !important'}} selected={formik.values.date}  name='date' onChange={(data)=>formik.setFieldValue('date',data)}/>
          </div> 
          <span className='text-danger'>{(formik.touched.date && formik.errors.date)?formik.errors.date:''}</span>
        </div>
      </div>
    </div>
       <div className="border bg-light mt-2">
      <div class="form-group p-2">
      <label for="inputCity">Attach Document</label>
      <input type="file" class="custom-file" id="inputCity" onChange={(e)=>formik.setFieldValue('attachdDocument',e.target.files[0])} />
      <span className='text-danger'>{(formik.touched.attachdDocument && formik.errors.attachdDocument)?formik.errors.attachdDocument:''}</span>

    </div>
    </div>
    
        <button type="submit" class="btn btn-primary mt-2">Save</button>
  </form>
</div>
</div>
</div>
</div>
</div>

    );
}