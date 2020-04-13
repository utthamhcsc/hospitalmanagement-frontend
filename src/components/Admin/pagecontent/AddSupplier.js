import React from 'react'
import { useFormik } from 'formik';
import {Postdata} from '../../../Network/Server'
export default function(props) {
  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      ...props.data
    },onSubmit:values=>Postdata('item-supplier/add','POST',values).then(data=>{
      if(values.id)
      props.setdataSrc(item=>item.map(item1=>item1.id==data.id?data:item1))
  else
      props.setdataSrc(item=>[data,...item])
    })
  });
      return (
  
        <div className="modal fade in" id="addSuplier" >
          <div className="modal-dialog modal-mid" role="document">
            <div className="modal-content modal-media-content">
              <div className="modal-header modal-media-header">
              <h6 className="box-title"> Add Supplier</h6> 
                <button type="button" className="close" data-dismiss="modal">×</button>
               </div>
              <form >
                <div className="modal-body pt0 pb0">    
                  <div className="ptt10">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label htmlFor="exampleInputEmail1">Supplier Name</label>
                          <small className="req"> *</small>
                          <input  name="supplier_category"  type="text" className="form-control" {...formik.getFieldProps('itemSupplier')} />
                          <span className="text-danger" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Supplier Contact</label>
                          <input  name="contact"  type="text" className="form-control" {...formik.getFieldProps('phone')} />
                          <span className="text-danger" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Contact Person Name</label>
                          <input  name="supplier_person"  type="text" className="form-control"  {...formik.getFieldProps('contactPersonName')}/>
                          <span className="text-danger" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Contact Person Phone</label>
                          <input  name="supplier_person_contact"  type="text" className="form-control" {...formik.getFieldProps('contactPersonPhone')} />
                          <span className="text-danger" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Address</label>
                          <input  name="address"  type="text" className="form-control" {...formik.getFieldProps('address')} />
                          <span className="text-danger" />
                        </div>                      
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-footer">
                  <button type="submit" id="formaddbtn" onClick={formik.handleSubmit} className="btn btn-primary pull-right">Save</button>
                </div>
              </form>
            </div>{/*./row*/}   
          </div>
        </div>
      );
    }
  