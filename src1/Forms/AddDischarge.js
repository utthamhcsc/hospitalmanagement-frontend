import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import {Getdata,PostFormdata, Postdata} from '../Network/Server'

import {toast} from 'react-toastify'

export default  (props) => {
    const {ipdId,bednumber,bedgroup}=props;
   // alert(ipdId)
    const [data,setdata]=React.useState({ ipdId:'',
    summer:'',
    disChargeDate:new Date(),
    bedgroup:'',
    bednumber:''
   })
   React.useEffect(()=>{
      // alert(JSON.stringify(data,null,2))
      setdata({...data,ipdId,bedgroup,bednumber})
   },[ipdId,bedgroup,bednumber])
    const formik = useFormik(
    {
    initialValues:{
        ...data
    },

    enableReinitialize:true,
    onSubmit:values=>{console.log(JSON.stringify(values,null,2))
      Postdata('inpatient/','PUT',values).then(data=>{toast.success('successfully added', {
      position: toast.POSITION.TOP_CENTER
    });console.log(data)})},

      validationSchema:Yup.object().shape({
       // toTitle:Yup.string().required('*Required ToTitle'),
        //attachdDocument:null
    })
  })
return(

  <div class="modal fade" id="discharge" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content p-0" role="document">
        <div className="card p-0">
         <div class="card-header bg-primary  "> Discharge Patient
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button> 
          </div>
       <div className="card-body m-0">     
       <form  onSubmit={formik.handleSubmit}>

       <div className="border bg-light row mt-2">
      <div class="form-group p-2 col-md-6">
      <label for="inputCity">IPD Id</label>
      <input className="form-control" id="inputCity" readOnly {...formik.getFieldProps('ipdId')} />
      <span className='text-danger'>{''}</span>

    </div>
    <div class="form-group col-md-6 p-2">
      <label for="inputCity">Discharge Date</label>
      <DatePicker className="form-control" id="inputCity" readOnly selected={formik.values.disChargeDate} autoComplete={false} onChange={(e)=>formik.setFieldValue('disChargeDate',e)} />
      <span className='text-danger'>{''}</span>

    </div>
   
    </div>
    <div className="border bg-light mt-2 row">
      <div class="form-group p-2 col-md-6">
      <label for="inputCity">Bed Group</label>
      <input className="form-control" id="inputCity" readOnly {...formik.getFieldProps('bedgroup')} />
      <span className='text-danger'>{''}</span>
      </div>
      <div class="form-group p-2 col-md-6">
      <label for="inputCity">Bed Number</label>
      <input className="form-control" id="inputCity" readOnly {...formik.getFieldProps('bednumber')} />
      <span className='text-danger'>{''}</span>

 
    
    </div>
    </div>
    
    
    
       <div className="border bg-light mt-2">
      <div class="form-group p-2">
      <label for="inputCity">Discharge Note</label>
      <textarea className="form-control" id="inputCity" {...formik.getFieldProps('summer')} />
      <span className='text-danger'>{''}</span>

    </div>
    </div>
    
      
        <button type="submit" class="btn btn-primary form-control mt-2">Discharge</button>
  </form>
</div>
</div>
</div>
</div>
</div>

    );
}