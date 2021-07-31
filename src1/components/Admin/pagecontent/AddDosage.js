import React, { useCallback } from 'react'
import { useFormik } from 'formik';
import { Postdata,Getdata } from '../../../Network/Server';
export default function(props) {
  const [data,setdata]=React.useState([]);
const formik=useFormik({
  enableReinitialize:true,
  initialValues:{
...props.data
  },
  onSubmit:values=>Postdata('medicinedosage/add','POST',values).then(data=>{
    if(values.id)
    props.setdataSrc(item=>item.map(item1=>item1.id==data.id?data:item1))
else
    props.setdataSrc(item=>[data,...item])

    window.$('#addDosage').modal('hide');
  })
})


      return (
  
        <div className="modal fade in" id="addDosage">
          <div className="modal-dialog modal-mid" role="document">
            <div className="modal-content modal-media-content">
              <div className="modal-header modal-media-header">
              <h6 className="box-title"> Add Medicine Dosage</h6> 
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <form >
                <div className="modal-body pt0 pb0">
                  <div className="ptt10">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Medicine Category</label><small className="req"> *</small>
                      <select name="medicine_category" type="text" className="form-control" {...formik.getFieldProps('medicineCategory')}>
                        <option value=''>Select</option>
                        {
                          props.medcat && props.medcat.length>0 ?
                          props.medcat.map((data)=>
                            <option value={data.id}>{data.medicineCategory}</option>):''
                        }
                        </select>
                      <span className="text-danger" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Dosage</label>
                      <small className="req"> *</small>
                      <input  name="dosage"  type="text" className="form-control" {...formik.getFieldProps('dosage')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                </div>{/*./modal*/}         
                <div className="box-footer">
                  <button type="submit" onClick={formik.handleSubmit} className="btn btn-primary pull-right">Save</button>
                </div>
              </form>
            </div>{/*./row*/} 
          </div>
        </div>
      );
    }
