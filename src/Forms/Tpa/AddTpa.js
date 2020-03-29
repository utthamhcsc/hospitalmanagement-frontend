import React from 'react'
import { useFormik } from 'formik';
import { Postdata } from '../../Network/Server';
export default function(props) {
  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      ...props.data
    },
    onSubmit:values=>{

        Postdata('organisation/add','POST',values).then(res=>{
          console.log(res)
            if(values.id)
            props.setdataSrc(data=>data.map(item=>item.id==res.id?res:item))  
            else
            props.setdataSrc(data=>[res,...data])
            window.$('#addTpa').modal('hide')
        })
      //props.setdataSrc(data=>data.map(item=>item.id==values.id?values:values.id?values))
   //    props.setdataSrc(data=>[...data,values])
       
    }
  })
      return (
  
        <div className="modal fade in" id="addTpa" >
          <div className="modal-dialog modal-mid" role="document">
            <div className="modal-content modal-media-content">
              <div className="modal-header modal-media-header pb-1">
              <h6 className="box-title"> Add Tpa</h6> 
                <button type="button" className="close" data-dismiss="modal">×</button>
                
              </div>
           
                <div className="modal-body pt0 pb0">  
                <div className='row'>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Name</label><small className="req"> *</small>
                      <input autoComplete={'off'}    type="text" className="form-control" {...formik.getFieldProps('organisationName')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Code</label><small className="req"> *</small>
                      <input autoComplete={'off'}    type="text" className="form-control" {...formik.getFieldProps('code')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Contact No</label><small className="req"> *</small>
                      <input autoComplete={'off'}    type="text" className="form-control" {...formik.getFieldProps('contactNo')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Address</label><small className="req"> *</small>
                      <input autocomplete={'off'}    type="text" className="form-control" {...formik.getFieldProps('address')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Contact Person Name</label><small className="req"> *</small>
                      <input autoComplete={'off'}    type="text" className="form-control" {...formik.getFieldProps('contactPersonName')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Contact Person Phone</label><small className="req"> *</small>
                      <input autoComplete={'off'}    type="text" className="form-control" {...formik.getFieldProps('contactPersonPhone')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                </div>
                </div>{/*./modal-body*/} 

                <div className="box-footer">
                  <button type="submit" id="formaddbtn" onClick={formik.handleSubmit} className="btn btn-primary pull-right">Save</button>
                </div>
            
            </div>{/*./row*/} 
          </div>
        </div>
      );
    }