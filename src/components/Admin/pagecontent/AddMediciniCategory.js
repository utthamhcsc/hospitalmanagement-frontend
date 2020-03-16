import React from 'react'
import { useFormik } from 'formik';
import { Postdata } from '../../../Network/Server';
export default function(props) {
  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      ...props.data
    },
    onSubmit:values=>Postdata('medicineCat/add','POST',values).then(data=>props.setdataSrc(item=>[data,...item]))
  })
      return (
  
        <div className="modal fade in" id="MedicineCategory" >
          <div className="modal-dialog modal-mid" role="document">
            <div className="modal-content modal-media-content">
              <div className="modal-header modal-media-header">
              <h6 className="box-title"> Add Medicine Category</h6> 
                <button type="button" className="close" data-dismiss="modal">×</button>
                
              </div>
              <form >
                <div className="modal-body pt0 pb0">  
                  <div className="ptt10">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Category Name</label><small className="req"> *</small>
                      <input autofocus name="medicine_category"  type="text" className="form-control" {...formik.getFieldProps('medicineCategory')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                </div>{/*./modal-body*/}        
                <div className="box-footer">
                  <button type="submit" id="formaddbtn" onClick={formik.handleSubmit} className="btn btn-primary pull-right">Save</button>
                </div>
              </form>
            </div>{/*./row*/} 
          </div>
        </div>
      );
    }